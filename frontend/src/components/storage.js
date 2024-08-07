import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import storage1 from '../images/Storerug1.JPEG';
import storage4 from '../images/storage4.jpeg';
import storage11 from '../images/storage11.jpeg';

function MultiImgCardExample() {
  const [showModal, setShowModal] = useState(false);
  const [quoteFormData, setQuoteFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const [emailSubject, setEmailSubject] = useState('');

  const handleShowModal = (subject) => {
    setEmailSubject(subject);
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
    window.location.href = `mailto:therightpackout@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    handleCloseModal();
  };

  return (
    <Container>
      
      <Card style={{ padding: '20px', marginBottom: '70px' }}>
        <Card.Title style={{ textAlign: 'center'}}><h1>Storage</h1></Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>
          We understand the importance of safeguarding your valuable items, whether it's for short-term storage during a renovation or long-term preservation. Our comprehensive storage solutions are designed to meet the unique needs of businesses and individuals alike. We offer secure, climate-controlled storage facilities to ensure your possessions are protected from environmental damage, theft, and loss. We also offer on site storage utilizing pods or your own space. Our professional team meticulously catalogs and handles each item with the utmost care, providing you with peace of mind and the convenience of accessing your items whenever needed. Trust us to provide a seamless, reliable storage experience tailored to your specific requirements.
        </Card.Text>
        <div className="d-flex justify-content-center mt-4" style={{ marginBottom: '20px' }}>
          <Button variant="danger" onClick={() => handleShowModal('Quote Request for Storage')}>Request a Quote</Button>
        </div>
        <Row className="justify-content-center">
        <Col sm={4} className="mb-4">
          <Card>
            <Card.Img src={storage11} alt="Packout" className="storage" />
          </Card>
        </Col>
        <Col sm={4} className="mb-4">
          <Card>
            <Card.Img src={storage1} alt="Packback" className="storage" />
          </Card>
        </Col>
        <Col sm={4} className="mb-4">
          <Card>
            <Card.Img src={storage4} alt="Packback" className="storage" />
          </Card>
        </Col>
      </Row>
      </Card>

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
}

export default MultiImgCardExample;
