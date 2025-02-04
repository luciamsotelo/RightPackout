import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FeedbackForm = () => {
  return (
    <Container className="text-center py-4">
      <h2 className="mb-4">Leave Your Feedback</h2>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <iframe
            title="Feedback Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSf3mOyRg4Ul7Khbg36BBR9hlBvbuSnu6jAAPaW49Ue9tLE8oQ/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          >
            Loading…
          </iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default FeedbackForm;
