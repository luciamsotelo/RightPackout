import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chair1 from '../images/chairCleanB1.jpeg';
import Chair2 from '../images/ChairCleanA1.jpeg';
import Shoes1 from '../images/MB&Ashoe.jpeg';
import Fire4 from '../images/FjacketB3.jpeg';
import Fire2 from '../images/FjacketA1.jpeg';
import Fire3 from '../images/FjacketA2.jpeg';

function RestorationCards() {
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

    // Customize subject based on form data or other conditions
    let subject = 'Quote Request on Restoration';
    if (quoteFormData.firstName && quoteFormData.lastName) {
      const fullName = `${quoteFormData.firstName} ${quoteFormData.lastName}`;
      if (fullName !== 'Lucia Sotelo') {
        subject = `Quote Request for Fire Restoration - ${fullName}`;
      }
    }

    // Prepare mailto link with updated subject
    window.location.href = `mailto:therightpackout@gmail.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`;

    // Close modal after sending request
    handleCloseModal();
  };

  const cardsData = [
    {
      title: 'Restoration Before ',
      image: Chair1,
      description: 'Description of restoration .'
    },
    {
      title: 'Restoration After',
      image: Chair2,
      description: 'Description of mold restoration .'
    },
    {
      title: 'Mold Restoration Before and After',
      image: Shoes1,
      description: 'Description of fire restoration .'
    },
    {
      title: 'Fire Restoration Before ',
      image: Fire4,
      description: 'Description of fire restoration .'
    },
    {
      title: 'Fire Restoration After',
      image: Fire2,
      description: 'Description of fire restoration .'
    },
    {
      title: 'Fire Restoration After',
      image: Fire3,
      description: 'Description of fire restoration .'
    }
  ];

  return (
    <div className="" style={{ marginBottom: '100px'}}>
      <div className="d-flex justify-content-center mt-3">
        <div style={{ textAlign: 'center', margin: '30px' }}>
          <h1 style={{ textAlign: 'center' }}>Furniture Cleaning & Restoration</h1>
          <p style={{ marginBottom: '-55px' }}>At The Right Packout, we specialize in comprehensive restoration services aimed at rejuvenating spaces impacted by disasters such as fire and mold. Our dedicated team excels in restoring properties to their former glory by addressing the aftermath of fires, including meticulous smoke residue cleaning, structural repairs, and effective odor elimination. Similarly, we expertly handle mold issues with detailed inspections, safe mold removal, and proactive measures to prevent future growth. With a commitment to excellence and compassionate service, The Right Packout guides you through every restoration phase, ensuring your property is restored to safety, functionality, and aesthetic appeal. Trust The Right Packout for professional restoration solutions that bring peace of mind during challenging times.</p>
        </div>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4 m-3">
        {cardsData.map((card, idx) => (
          <Col key={idx} style={{ marginBottom: '50px' }}>
            <Card className="h-100">
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
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

export default RestorationCards;
