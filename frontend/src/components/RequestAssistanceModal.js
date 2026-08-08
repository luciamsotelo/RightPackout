import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import "../styles/RequestAssistanceModal.css";

function RequestAssistanceModal({
  show,
  onHide,
  service = "General Assistance",
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      message: "",
    });

    onHide();
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent(
      `Request Assistance - ${service}`
    );

    const body = encodeURIComponent(
      `Service: ${service}

First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Phone Number: ${formData.phoneNumber}
Email: ${formData.email}

How Can We Help?
${formData.message}`
    );

    window.location.href =
      `mailto:therightpackout@gmail.com?subject=${subject}&body=${body}`;

    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="request-modal-dialog"
      contentClassName="request-modal-content"
    >
      {/* ==========================================
          HEADER
      ========================================== */}

      <Modal.Header
        closeButton
        className="request-modal-header"
      >
        <div>
          <span className="request-modal-eyebrow">
            The Right Pack Out
          </span>

          <Modal.Title className="request-modal-title">
            How Can We Help?
          </Modal.Title>

          <p className="request-modal-intro">
            Tell us a little about what you need and the best
            way to reach you.
          </p>

          {service !== "General Assistance" && (
            <div className="request-modal-service">
              <span>Service</span>
              <strong>{service}</strong>
            </div>
          )}
        </div>
      </Modal.Header>

      {/* ==========================================
          FORM
      ========================================== */}

      <Modal.Body className="request-modal-body">
        <Form>
          <div className="request-modal-name-grid">

            <Form.Group>
              <Form.Label>
                First Name
              </Form.Label>

              <Form.Control
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>
                Last Name
              </Form.Label>

              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </Form.Group>

          </div>

          <Form.Group className="mt-3">
            <Form.Label>
              Phone Number
            </Form.Label>

            <Form.Control
              type="tel"
              name="phoneNumber"
              placeholder="619-555-1234"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>
              Email Address
            </Form.Label>

            <Form.Control
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>
              How Can We Help?
            </Form.Label>

            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              placeholder="Tell us about the assistance you need."
              value={formData.message}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      {/* ==========================================
          FOOTER
      ========================================== */}

      <Modal.Footer className="request-modal-footer">

        <button
          type="button"
          className="request-modal-cancel"
          onClick={handleClose}
        >
          Cancel
        </button>

        <button
          type="button"
          className="request-modal-submit"
          onClick={handleSubmit}
        >
          Request Assistance
        </button>

      </Modal.Footer>
    </Modal>
  );
}

export default RequestAssistanceModal;