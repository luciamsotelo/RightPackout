import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rating: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", rating: "", message: "" });
      } else {
        const result = await response.json();
        setError(result.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(to bottom, #cc0000, #ffffff, #003366)", padding: "2rem" }}>
      <Container style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "2rem", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", maxWidth: "700px" }}>
        <h2 className="mb-4 text-center text-primary">Leave Your Feedback</h2>
        {submitted && <Alert variant="success">Thank you! Your review has been submitted.</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name*</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email*</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone (Optional)</Form.Label>
            <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Rating (1-5)*</Form.Label>
            <Form.Control type="number" name="rating" value={formData.rating} onChange={handleChange} min="1" max="5" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message*</Form.Label>
            <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} rows={4} required />
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Container>
    </div>
  );
};

export default FeedbackForm;

