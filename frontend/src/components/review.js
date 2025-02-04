import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const feedbackData = result.data.map((row) => ({
              name: row["Your Name"]?.replace(/"/g, "").trim() || "Anonymous",
              email: row["Your Email Address"]?.replace(/"/g, "").trim(),
              rating: row["How Would You Rate Your Experience?"]?.replace(/"/g, "").trim(),
              message: row["Share Your Experience"]?.replace(/"/g, "").trim() || "",
            }));

            setFeedback(feedbackData);
          },
        });
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <Container
      className="py-4"
      style={{
        background: "linear-gradient(to bottom, #003366, #ffffff, #cc0000)",
        minHeight: "100vh",
        borderRadius: "10px",
      }}
    >
      <h2 className="text-center mb-4 text-white">Customer Reviews</h2>
      {feedback.length === 0 ? (
        <p className="text-center text-white">No feedback available yet.</p>
      ) : (
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <ul className="list-unstyled">
              {feedback.map((item, index) => (
                <li
                  key={index}
                  className="p-3 mb-4 border border-primary rounded shadow"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    transition: "transform 0.2s ease-in-out",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <h5 className="text-center text-primary">{item.name}</h5>
                  <p className="text-center text-warning">⭐ {item.rating}/5</p>
                  <p className="text-justify text-dark">{item.message}</p>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default FeedbackDisplay;
