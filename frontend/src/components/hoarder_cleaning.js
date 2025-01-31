import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import Images from '../images/imagesoon.png';

const HoarderServices = () => {
  const [showModal, setShowModal] = useState(false);
  const [quoteFormData, setQuoteFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const handleShowModal = () => {
    setQuoteFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      message: ''
    });
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuoteFormData({ ...quoteFormData, [name]: value });
  };

  const handleSendQuoteRequest = () => {
    const emailBody = encodeURIComponent(`
      First Name: ${quoteFormData.firstName}
      Last Name: ${quoteFormData.lastName}
      Phone Number: ${quoteFormData.phoneNumber}
      Email: ${quoteFormData.email}
      Message: ${quoteFormData.message}
    `);
    const emailSubject = encodeURIComponent('Quote Request on Hoarder Cleanup');
    window.location.href = `mailto:therightpackout@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    handleCloseModal();
  };

  const cardsData = [
    { id: 1, image: Images },
    { id: 2, image: Images },
    { id: 3, image: Images },
    { id: 4, image: Images },
    { id: 5, image: Images },
    { id: 6, image: Images },
    { id: 7, image: Images },
    { id: 8, image: Images }
  ];

  return (
    <Container style={{ marginTop: '50px', textAlign: 'justify' }}>
      <Row className="mb-5">
        <Col>
          <h2 style={{ textAlign: 'center' }}>Hoarder HouseCleanup</h2>
          <p>
            Hoarder house cleanup is a specialized service designed to address the challenging and sensitive task of cleaning up homes affected by hoarding. This process involves removing excessive clutter, sorting and organizing belongings, and thoroughly cleaning and sanitizing the space. Professional hoarder cleanup services are equipped to handle bio-hazards, structural damage, and the emotional challenges associated with hoarding situations, ensuring a safe and livable environment for the occupants.
          </p>
          <div className="d-flex justify-content-center" style={{ padding: '1px 10px 5px 10px' }}>
            <Button variant="danger" onClick={handleShowModal}>Request a Quote</Button>
          </div>
        </Col>
      </Row>
      <Row style={{ paddingBottom: '70px'}}>
        {cardsData.map(card => (
          <Col key={card.id} xs={12} sm={6} md={3} className="mb-3">
            <Card>
              <Card.Img src={card.image} alt="hoarder" className="hoarder" />
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Request a Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="firstName">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={quoteFormData.firstName}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="lastName" className="mt-2">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={quoteFormData.lastName}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="phoneNumber" className="mt-2">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={quoteFormData.phoneNumber}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="email" className="mt-2">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={quoteFormData.email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="message" className="mt-2">
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={quoteFormData.message}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          <Button variant="primary" onClick={handleSendQuoteRequest}>Send Quote Request</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default HoarderServices;
