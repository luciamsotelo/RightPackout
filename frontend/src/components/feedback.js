import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FeedbackForm = () => {
  return (
    <div 
      style={{
        minHeight: "100vh", // Ensures full-page background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #cc0000, #ffffff, #003366)", // Vertical Red-White-Blue gradient
        padding: "2rem",
      }}
    >
      <Container 
        className="text-center py-4" 
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "2rem",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderTop: "5px solid #003366", // Subtle blue accent on top
          maxWidth: "900px",
        }}
      >
        <h2 
          className="mb-4"
          style={{
            color: "#003366",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
            borderBottom: "3px solid #cc0000", // Thin red underline
            display: "inline-block",
            paddingBottom: "5px",
          }}
        >
          Leave Your Feedback
        </h2>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <iframe
              title="Feedback Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSf3mOyRg4Ul7Khbg36BBR9hlBvbuSnu6jAAPaW49Ue9tLE8oQ/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              style={{
                maxWidth: "100%",
                borderRadius: "10px",
                border: "3px solid rgba(204, 0, 0, 0.7)", // Soft red border
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              Loading…
            </iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeedbackForm;
