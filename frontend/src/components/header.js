import React, { useState } from 'react';
import { Navbar, Container, Nav, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import logo from '../images/logo1.png'; // Update with the correct path to your logo

function Header() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteFormData, setQuoteFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    quoteDetail: ''
  });

  const handleEmailButtonClick = () => {
    setShowEmailModal(true);
  };

  const handleQuoteButtonClick = () => {
    setShowQuoteModal(true);
  };

  const handleCloseEmailModal = () => {
    setShowEmailModal(false);
  };

  const handleCloseQuoteModal = () => {
    setShowQuoteModal(false);
  };

  const handleQuoteFormSubmit = (e) => {
    e.preventDefault();
  
    const emailBody = `
      First Name: ${quoteFormData.firstName}
      Last Name: ${quoteFormData.lastName}
      Phone Number: ${quoteFormData.phoneNumber}
      Email: ${quoteFormData.email}
      Quote Details: ${quoteFormData.quoteDetail}
    `;
  
    const emailSubject = encodeURIComponent('Quote Request');
    const emailBodyEncoded = encodeURIComponent(emailBody);
  
    window.location.href = `mailto:therightpackout@gmail.com?subject=${emailSubject}&body=${emailBodyEncoded}`;
  
    setQuoteFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      quoteDetail: ''
    });
  
    setShowQuoteModal(false); // Close the quote modal after submission
  };
  

  const handleQuoteFormChange = (e) => {
    const { name, value } = e.target;
    setQuoteFormData({ ...quoteFormData, [name]: value });
  };

  return (
    
    <div className='' style={{ backgroundColor: 'transparent' }}>
      <Navbar>
        <Container>
          <Row className="align-items-center">
            <Col xs="auto">
              <Navbar.Brand href="/">
                <img
                  alt="Logo"
                  src={logo}
                  width="150"
                  height="150"
                  className="d-inline-block align-top"
                  style={{ border: '4px solid black', borderRadius: '10px' }}
                />{' '}
              </Navbar.Brand>
            </Col>
            
          </Row>

          <Row className="mt-3 mt-md-0">
            <Col xs="auto">
              <Nav className="flex-column flex-md-row">
                <Button variant="outline-danger" href="tel:+6197867089" style={{margin: "10px"}}>619-786-7089</Button>
                <Button variant="outline-primary" onClick={handleEmailButtonClick} style={{margin: "10px"}}>Contact Us</Button>
              </Nav>
            </Col>
          </Row>

          {/* Email Modal */}
          <Modal show={showEmailModal} onHide={handleCloseEmailModal}>
            <Modal.Header closeButton style={{backgroundColor: "lightblue", color: "black"}}> 
              <Modal.Title>How Can We Help You?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Button variant="outline-danger" href={`mailto:therightpackout@gmail.com?subject=General%20Question`} style={{margin: "10px"}}>
                General Question
              </Button>
              <Button variant="outline-primary" onClick={handleQuoteButtonClick} style={{margin: "10px"}}>
                Request a Quote
              </Button>
            </Modal.Body>
          </Modal>

          {/* Quote Modal */}
          <Modal show={showQuoteModal} onHide={handleCloseQuoteModal}>
            <Modal.Header closeButton>
              <Modal.Title>Request a Quote</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleQuoteFormSubmit}>
                <Form.Group controlId="formQuoteFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    value={quoteFormData.firstName}
                    onChange={handleQuoteFormChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formQuoteLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    value={quoteFormData.lastName}
                    onChange={handleQuoteFormChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formQuotePhoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter phone number"
                    name="phoneNumber"
                    value={quoteFormData.phoneNumber}
                    onChange={handleQuoteFormChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formQuoteEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={quoteFormData.email}
                    onChange={handleQuoteFormChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formQuoteDetail">
                  <Form.Label>What do you want a quote on?</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Enter quote details"
                    name="quoteDetail"
                    value={quoteFormData.quoteDetail}
                    onChange={handleQuoteFormChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
