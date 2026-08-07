import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import logo from "../images/logo1.png";
import "../styles/Header.css";

function Header() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const [quoteFormData, setQuoteFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    quoteDetail: "",
  });

  const handleQuoteFormChange = (e) => {
    const { name, value } = e.target;

    setQuoteFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const openQuoteModal = () => {
    setShowContactModal(false);
    setShowQuoteModal(true);
  };

  const handleQuoteFormSubmit = (e) => {
    e.preventDefault();

    const emailBody = `
First Name: ${quoteFormData.firstName}
Last Name: ${quoteFormData.lastName}
Phone Number: ${quoteFormData.phoneNumber}
Email: ${quoteFormData.email}

Quote Details:
${quoteFormData.quoteDetail}
`;

    const subject = encodeURIComponent(
      `Quote Request - ${quoteFormData.firstName} ${quoteFormData.lastName}`
    );

    const body = encodeURIComponent(emailBody);

    window.location.href =
      `mailto:therightpackout@gmail.com?subject=${subject}&body=${body}`;

    setQuoteFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      quoteDetail: "",
    });

    setShowQuoteModal(false);
  };

  return (
    <>
      <header className="site-header">
        <Navbar expand="lg" className="professional-navbar">
          <Container>
            <Navbar.Brand href="/" className="header-brand">
              <img
                src={logo}
                alt="The Right Pack Out logo"
                className="header-logo"
              />

              <div className="brand-text d-none d-md-block">
                <span className="brand-name">The Right Pack Out</span>

                <span className="brand-tagline">
                  Contents Care, Cleaning & Restoration
                </span>
              </div>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="main-navigation" />

            <Navbar.Collapse id="main-navigation">
              <Nav className="ms-auto align-items-lg-center header-navigation">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/review">Reviews</Nav.Link>

                <Button
                  href="tel:+16197867089"
                  variant="outline-danger"
                  className="header-action-button"
                >
                  Call 619-786-7089
                </Button>

                <Button
                  variant="outline-primary"
                  className="header-action-button"
                  onClick={() => setShowContactModal(true)}
                >
                  Contact Us
                </Button>

                <Button
                  variant="danger"
                  className="header-action-button"
                  onClick={openQuoteModal}
                >
                  Request a Quote
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <Modal
        show={showContactModal}
        onHide={() => setShowContactModal(false)}
        centered
      >
        <Modal.Header closeButton className="contact-modal-header">
          <Modal.Title>How Can We Help?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="text-center mb-4">
            Contact our team with a general question or request a personalized
            quote.
          </p>

          <div className="d-grid gap-3">
            <Button
              variant="outline-primary"
              href="mailto:therightpackout@gmail.com?subject=General%20Question"
            >
              Email a General Question
            </Button>

            <Button variant="danger" onClick={openQuoteModal}>
              Request a Quote
            </Button>

            <Button variant="outline-danger" href="tel:+16197867089">
              Call 619-786-7089
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showQuoteModal}
        onHide={() => setShowQuoteModal(false)}
        centered
      >
        <Modal.Header closeButton className="quote-modal-header">
          <Modal.Title>Request a Quote</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleQuoteFormSubmit}>
          <Modal.Body>
            <div className="row">
              <Form.Group className="col-md-6 mb-3">
                <Form.Label>First Name</Form.Label>

                <Form.Control
                  type="text"
                  name="firstName"
                  value={quoteFormData.firstName}
                  onChange={handleQuoteFormChange}
                  required
                />
              </Form.Group>

              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Last Name</Form.Label>

                <Form.Control
                  type="text"
                  name="lastName"
                  value={quoteFormData.lastName}
                  onChange={handleQuoteFormChange}
                  required
                />
              </Form.Group>
            </div>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>

              <Form.Control
                type="tel"
                name="phoneNumber"
                value={quoteFormData.phoneNumber}
                onChange={handleQuoteFormChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>

              <Form.Control
                type="email"
                name="email"
                value={quoteFormData.email}
                onChange={handleQuoteFormChange}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>How can we help?</Form.Label>

              <Form.Control
                as="textarea"
                rows={5}
                name="quoteDetail"
                value={quoteFormData.quoteDetail}
                onChange={handleQuoteFormChange}
                placeholder="Tell us about the service you need."
                required
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowQuoteModal(false)}
            >
              Cancel
            </Button>

            <Button variant="danger" type="submit">
              Continue to Email
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default Header;