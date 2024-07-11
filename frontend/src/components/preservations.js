import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Imaging from '../images/imagesoon.png';

function PreservationCards() {
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

    // Use a fixed subject for all emails
    const subject = 'Quote Request on Preservation';

    // Prepare mailto link with fixed subject
    window.location.href = `mailto:therightpackout@gmail.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`;

    // Close modal after sending request
    handleCloseModal();
  };

  const cardsData = [
    {
      title: 'Preservation 1',
      image: Imaging,
      description: 'Description of preservation 1.'
    },
    {
      title: 'Preservation 2',
      image: Imaging,
      description: 'Description of preservation 2.'
    },
    {
      title: 'Preservation 3',
      image: Imaging,
      description: 'Description of preservation 3.'
    },
    {
      title: 'Preservation 4',
      image: Imaging,
      description: 'Description of preservation 4.'
    },
    {
      title: 'Preservation 5',
      image: Imaging,
      description: 'Description of preservation 5.'
    },
    {
      title: 'Preservation 6',
      image: Imaging,
      description: 'Description of preservation 6.'
    },
    {
      title: 'Preservation 7',
      image: Imaging,
      description: 'Description of preservation 7.'
    },
    {
      title: 'Preservation 8',
      image: Imaging,
      description: 'Description of preservation 8.'
    }
  ];

  return (
    <div className="" style={{ marginBottom: '50px'}}>
      <div className="d-flex justify-content-center mt-3">
        <div style={{ maxWidth: '100%'}}>
          <br></br>
          <h1 style={{ textAlign: 'center'}}>Preservation Services</h1>
          <p style={{ textAlign: 'justify', margin: '10px'}}>We invite you to explore our comprehensive Preservation Services and see how we can help you protect your valuable possessions. 
          </p>
          <ul style ={{ paddingBottom: '-100px', color: 'blue', marginLeft: '10px'}}>
            <li>take down drapery</li> 
            <li>clean drapery</li>
            <li>repair if needed</li>
            <li>ability to make drapes</li>
            <li>rehang drapery</li>
          </ul>
          
          <div className="" style={{ margin: '5px', textAlign: 'center' }}>
            <Button variant="danger" onClick={handleShowModal}>Request a Quote</Button>
          </div>
        </div>
      </div>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 m-3">
        {cardsData.map((card, idx) => (
          <Col key={idx} style={{ marginBottom: '20px' }}>
            <Card className="h-100">
              <Card.Img variant="top" src={card.image} style={{ height: '300px', objectFit: 'cover' }} />
              <Card.Body style={{ maxHeight: '120px', overflow: 'hidden' }}>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                  {card.description}
                </Card.Text>
              </Card.Body>
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
    </div>
  );
}

export default PreservationCards;
