import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import logo1 from '../images/logo1.png';

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
    <div style={{ margin: '-20px 20px 50px 20px'}}> 
      <div className="d-flex">
        <div style={{ flex: 1 }}>
          <Card.Img src={logo1} alt="Packout" />
        </div>
        <div style={{ flex: 1 }}>
          <Card.Img src={logo1} alt="Packback" />
        </div>
        <div style={{ flex: 1 }}>
          <Card.Img src={logo1} alt="Packback" />
        </div>
      </div>
      <Card className="bg-light text-black mt-3" style={{ textAlign: 'justify', padding: '20px'}}>
          <Card.Title>Storage</Card.Title>
          <Card.Text>
          We understand the importance of safeguarding your valuable items, whether it's for short-term storage during a renovation or long-term preservation. Our comprehensive storage solutions are designed to meet the unique needs of businesses and individuals alike. We offer secure, climate-controlled storage facilities to ensure your possessions are protected from environmental damage, theft, and loss. Our professional team meticulously catalogs and handles each item with the utmost care, providing you with peace of mind and the convenience of accessing your items whenever needed. Trust us to provide a seamless, reliable storage experience tailored to your specific requirements.
          </Card.Text>
          <div className="d-flex justify-content-center mt-4">
        <Button variant="danger" onClick={() => handleShowModal('Quote Request for Storage')}>Request a Quote</Button>
      </div>
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
    </div>
  );
}

export default MultiImgCardExample;
