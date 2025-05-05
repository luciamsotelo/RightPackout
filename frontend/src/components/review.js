import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const FeedbackDisplay = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/reviews");
        const data = await response.json();
        setFeedback(data);
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
