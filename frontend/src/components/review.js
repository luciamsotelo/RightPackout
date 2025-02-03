import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const FeedbackDisplay = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEMVSF5E2NrHnkSKGXxKGPHGDo7zGYLNIkYFcrtUQu6ASMo0-IAIgtVMFJA3bwDK-fFpOiwffFGRuK/pub?output=csv"
        );

        const text = await response.text();

        // Use PapaParse to parse the CSV data
        Papa.parse(text, {
          header: true, // Use the first row as headers
          skipEmptyLines: true, // Skip empty lines
          complete: (result) => {
            const feedbackData = result.data.map((row) => {
              return {
                name: row["Your Name"]?.replace(/"/g, "").trim() || "Anonymous", // Adjusted column name
                email: row["Your Email Address"]?.replace(/"/g, "").trim(),
                rating: row["How Would You Rate Your Experience?"]?.replace(/"/g, "").trim(),
                message: row["Share Your Experience"]?.replace(/"/g, "").trim() || "", // Adjusted column name
              };
            });

            setFeedback(feedbackData);
          },
        });
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchFeedback();
  }, []);

  const formatMessage = (message) => {
    return message ? message.replace(/\n/g, "<br />") : ""; // Only replace newlines if message exists
  };

  return (
    <div style={styles.container}>
      <h2>Customer Reviews</h2>
      {feedback.length === 0 ? (
        <p>No feedback available yet.</p>
      ) : (
        <ul style={styles.list}>
          {feedback.map((item, index) => (
            <li key={index} style={styles.feedbackItem}>
              <strong>{item.name}</strong> ⭐ {item.rating}/5
              <p>
                <em
                  dangerouslySetInnerHTML={{
                    __html: formatMessage(item.message),
                  }}
                />
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "1rem",
    textAlign: "center",
  },
  feedbackItem: {
    border: "2px solid red",
    listStyle: "none",
    marginBottom: "10px",
    textAlign: "justify",
    maxWidth: "100%",
    margin: "0 auto",
    background: "#f0f0f0",
    borderRadius: "10px",
    padding: "10px",
    whiteSpace: "pre-wrap", // Ensures the text wraps correctly
    wordWrap: "break-word", // Prevents long words from overflowing
  },
};

export default FeedbackDisplay;
