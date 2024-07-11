import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fire4 from '../images/FjacketB3.jpeg';
import Fire1 from '../images/FjacketB1.jpeg';
import Fire2 from '../images/FjacketA1.jpeg';
import Fire3 from '../images/FjacketA2.jpeg';
import Image2 from '../images/imagesoon.png';

function FireCards() {
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

    let subject = 'Quote Request on Fire Restoration';
    if (quoteFormData.firstName && quoteFormData.lastName) {
      const fullName = `${quoteFormData.firstName} ${quoteFormData.lastName}`;
      if (fullName !== 'Lucia Sotelo') {
        subject = `Quote Request for Fire Restoration - ${fullName}`;
      }
    }

    window.location.href = `mailto:therightpackout@gmail.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`;
    handleCloseModal();
  };

  const cardsData = [
    {
      title: 'Before Fire Restoration',
      image: Fire4,
      description: 'Description of fire restoration 1.'
    },
    {
      title: 'Before Fire Restoration',
      image: Fire1,
      description: 'Description of fire restoration 2.'
    },
    {
      title: 'After Fire Restoration',
      image: Fire2,
      description: 'Description of fire restoration 3.'
    },
    {
      title: 'After Fire Restoration',
      image: Fire3,
      description: 'Description of fire restoration 4.'
    },
    {
      title: 'Fire Restoration',
      image: Image2,
      description: 'Description of fire restoration 1.'
    },
    {
      title: 'Fire Restoration',
      image: Image2,
      description: 'Description of fire restoration 2.'
    },
    {
      title: 'Fire Restoration',
      image: Image2,
      description: 'Description of fire restoration 3.'
    },
    {
      title: 'Fire Restoration',
      image: Image2,
      description: 'Description of fire restoration 4.'
    }
    
  ];

  return (
    <div className="" style={{ marginBottom: '100px'}}>
      <div className="d-flex justify-content-center mt-3">
        <div style={{ textAlign: 'justify', margin: '30px' }}>
          <h1 style={{ textAlign: 'center' }}>Fire Restoration</h1>
          <p style={{ marginBottom: '-55px' }}>Fire restoration is a crucial service dedicated to repairing and restoring properties impacted by fire damage. Whether it's a residential home or commercial establishment, our comprehensive fire restoration process begins with a detailed assessment to evaluate the extent of structural damage, smoke residue, and water damage from firefighting efforts. Our skilled technicians employ state-of-the-art equipment and techniques to remove soot, ash, and smoke odors, while salvaging and restoring belongings whenever possible. We prioritize safety, efficiency, and compassion in every restoration project, aiming to swiftly return your property to its pre-fire condition. Trust us to guide you through the restoration process, offering peace of mind during this challenging time</p>
        </div>
      </div>
      <div className="d-flex justify-content-center" style={{ padding: '60px 10px 5px 10px' }}>
        <Button variant="danger" onClick={handleShowModal}>Request a Quote</Button>
      </div>
      <Row xs={1} sm={2} md={2} lg={4} className="g-4 m-3">
        {cardsData.map((card, idx) => (
          <Col key={idx} style={{ marginBottom: '50px' }}>
            <Card className="h-100">
              <Card.Img variant="top" src={card.image} style={{ height: '300px', objectFit: 'cover' }} className="img-fluid" />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text style={{ fontSize: '0.9rem' }}>
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

export default FireCards;
