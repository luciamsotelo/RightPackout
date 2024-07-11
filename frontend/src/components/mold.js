import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Shoes1 from '../images/MB&Ashoe.jpeg';
import Chamber1 from '../images/MChamb4.JPEG';
import Image1 from '../images/imagesoon.png';

function MoldCards() {
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

    let subject = 'Quote Request on Mold Removal';
    if (quoteFormData.firstName && quoteFormData.lastName) {
      const fullName = `${quoteFormData.firstName} ${quoteFormData.lastName}`;
      if (fullName !== 'Lucia Sotelo') {
        subject = `Quote Request for Drapery - ${fullName}`;
      }
    }

    window.location.href = `mailto:therightpackout@gmail.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`;
    handleCloseModal();
  };

  const cardsData = [
    {
      title: 'Before and After Mold Removal',
      image: Shoes1,
      description: 'Before and after mold removal.'
    },
    {
      title: 'Mold Removal Process',
      image: Chamber1,
      description: 'Process of mold removal.'
    },
    {
      title: 'Mold Before',
      image: Image1,
      description: 'Mold before removal.'
    },
    {
      title: 'Mold After Cleaning',
      image: Image1,
      description: 'Mold after cleaning.'
    },
    {
      title: 'Mold Before',
      image: Image1,
      description: 'Another example of mold before removal.'
    },
    {
      title: 'Mold After Cleaning',
      image: Image1,
      description: 'Another example of mold after cleaning.'
    },
    {
      title: 'Mold Before',
      image: Image1,
      description: 'Another example of mold before removal.'
    },
    {
      title: 'Mold After Cleaning',
      image: Image1,
      description: 'Another example of mold after cleaning.'
    },
  ];

  return (
    <div className="" style={{ marginBottom: '100px'}}>
      <div style={{ textAlign: 'justify', margin: '30px' }}>
          <h1 style={{ textAlign: 'center', padding: '8px' }}>Mold Removal</h1>
          <p style={{ textAlign: 'justify', padding: '1px 20px 1px 20px' }}>Mold removal is a critical service aimed at ensuring the safety and health of your home or business environment. Mold growth can occur in areas with excessive moisture, often resulting from leaks, flooding, or high humidity levels. Our professional mold removal process begins with a thorough inspection to identify the source and extent of the mold infestation. Using advanced equipment and proven techniques, we meticulously remove mold and clean affected areas to prevent further contamination. Our team also addresses the underlying moisture issues to inhibit future growth. Trust our experienced professionals to restore your space to a clean, healthy state, free from the harmful effects of mold.</p>
      </div>
      <Row xs={1} md={2} lg={4} className="g-4 m-3">
        {cardsData.map((card, idx) => (
          <Col key={idx} style={{ marginBottom: '50px' }}>
            <Card className="h-100">
              <Card.Img variant="top" src={card.image} className="card-img-top" style={{ maxHeight: '300px', objectFit: 'cover' }} />
              <Card.Body className="card-body">
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                  {card.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center" style={{ padding: '1px 10px 50px 10px' }}>
        <Button variant="danger" onClick={handleShowModal}>Request a Quote</Button>
      </div>

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

export default MoldCards;
