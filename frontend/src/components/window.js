import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../images/imagesoon.png';

function WindowCards() {
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

    let subject = 'Quote Request on Window Cleaning';
    if (quoteFormData.firstName && quoteFormData.lastName) {
      const fullName = `${quoteFormData.firstName} ${quoteFormData.lastName}`;
      if (fullName !== 'Lucia Sotelo') {
        subject = `Quote Request for Window Cleaning - ${fullName}`;
      }
    }

    window.location.href = `mailto:therightpackout@gmail.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`;
    handleCloseModal();
  };

  const cardsData = [
    {
      title: 'Window 1',
      image: Image,
      description: 'Description of window 1.'
    },
    {
      title: 'Window 2',
      image: Image,
      description: 'Description of window 2.'
    },
    {
      title: 'Window 3',
      image: Image,
      description: 'Description of window 3.'
    },
    {
      title: 'Window 4',
      image: Image,
      description: 'Description of window 4.'
    },
    {
      title: 'Window 5',
      image: Image,
      description: 'Description of window 5.'
    },
    {
      title: 'Window 6',
      image: Image,
      description: 'Description of window 6.'
    },
    {
      title: 'Window 7',
      image: Image,
      description: 'Description of window 7.'
    },
    {
      title: 'Window 8',
      image: Image,
      description: 'Description of window 8.'
    }
  ];

  return (
    <div className="" style={{ marginBottom: '100px'}}>
      <div className="d-flex justify-content-center mt-3">
        <div style={{ textAlign: 'justify', margin: '30px' }}>
          <h1 style={{ textAlign: 'center' }}>Window Cleaning Services</h1>
          <p style={{ marginBottom: '-55px' }}>Our window cleaning services at The Right Pack Out are designed to enhance the appearance and clarity of your windows, ensuring a pristine and inviting atmosphere for your home or business. Whether you're seeking routine maintenance or preparing for a special event, our skilled team delivers meticulous cleaning using state-of-the-art equipment while using eco-friendly products. Utilizing professional equipment and purified, filtered water, we can effectively clean windows up to three stories high. For interior windows, our careful hand-washing method ensures thorough and delicate cleaning. We tackle both interior and exterior windows, removing dirt, grime, and streaks to provide crystal-clear views and maximize natural light penetration. With a commitment to quality and customer satisfaction, The Right Pack Out promises streak-free results and a sparkling finish every time. Discover the difference our professional window cleaning services can make for your property today.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center" style={{ padding: '40px 10px 1px 10px' }}>
        <Button variant="danger" onClick={handleShowModal}>Request a Quote</Button>
      </div>
      <Row xs={1} sm={2} md={4} className="g-4 m-3">
        {cardsData.map((card, idx) => (
          <Col key={idx} style={{ marginBottom: '50px' }}>
            <Card className="h-100">
              <Card.Img variant="top" src={card.image} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text style={{ fontSize: '0.8rem' }}>
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

export default WindowCards;
