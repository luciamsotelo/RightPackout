import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; // Import Modal component
import picture1 from '../images/Picture1.png';
import picture5 from '../images/Picture5.png';

function GridExample() {
  // Array of objects containing card information
  const cardsData = [
    {
      name: 'Packout',
      image: picture1,
      description:
        'A packout refers to the process of systematically inventorying, packing, and relocating belongings from one location to another, often during a move or disaster recovery. It involves careful cataloging, wrapping, and boxing of items to ensure their safe transportation. Packouts are crucial in situations such as home relocations, renovations, or restoration after fire or water damage. Professional packout services typically include detailed documentation, secure handling of fragile items, and temporary storage if needed. Effective packouts aim to minimize damage, maintain organization, and facilitate smooth transitions for homeowners or businesses undergoing significant changes or restoration processes.',
      emailSubject: 'Quote Request for Packout',
    },
    {
      name: 'Packback',
      image: picture5,
      description:
        'A packback is a versatile and ergonomic backpack designed to optimize comfort and utility during outdoor activities or daily commuting. It features multiple compartments for organized storage of essentials like electronics, water bottles, and clothing. Packbacks often include padded shoulder straps and back panels for comfort, as well as durable materials that withstand rugged environments. They may incorporate hydration systems, compression straps, and exterior loops for attaching gear. Whether used for hiking, travel, or everyday use, packbacks prioritize functionality and durability, ensuring users can carry their belongings conveniently and securely in various settings.',
      emailSubject: 'Quote Request for Packback',
    },
  ];

  // State for modal visibility and form data
  const [showModal, setShowModal] = useState(false);
  const [quoteFormData, setQuoteFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    quoteDetail: ''
  });
  const [emailSubject, setEmailSubject] = useState('');

  // Function to reset form data and show modal
  const handleShowModal = (subject) => {
    // Reset form data
    setQuoteFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      quoteDetail: ''
    });
    setEmailSubject(subject); // Set email subject
    setShowModal(true); // Show modal
  };

  const handleCloseModal = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuoteFormData({ ...quoteFormData, [name]: value });
  };

  const handleSendQuoteRequest = () => {
    // Prepare email body (you may adjust this based on your email structure)
    const emailBody = encodeURIComponent(`
      First Name: ${quoteFormData.firstName}
      Last Name: ${quoteFormData.lastName}
      Phone Number: ${quoteFormData.phoneNumber}
      Email: ${quoteFormData.email}
      Quote Details: ${quoteFormData.quoteDetail}
    `);
    window.location.href = `mailto:therightpackout@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;

    // Close modal after sending request
    handleCloseModal();
  };

  return (
    <div className="" style={{ marginBottom: '100px' }}>
      <div style={{ margin: '-20px 20px -20px 20px', textAlign: 'justify' }}>
        <p>"Information needed about Packout and Packback from client"</p>
      </div>
      <Row xs={1} md={2} className="g-4" style={{ margin: '15px' }}>
        {cardsData.map((card, idx) => (
          <Col key={idx}>
            <Card className="h-100" style={{ border: '10px double red', boxShadow: '-10px -10px 50px blue' }}>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{card.name}</Card.Title>
                <Card.Img variant="top" src={card.image} style={{ height: 'auto', maxWidth: '100%' }} />
                <Card.Text className="mt-auto" style={{ maxHeight: '200px', overflowY: 'auto', textAlign: 'justify' }}>
                  {card.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="danger" onClick={() => handleShowModal(card.emailSubject)} style={{ margin: '10px' }}>
                  Request a Quote
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for quote request */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Request a Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name:</label>
              <input type="text" className="form-control" id="firstName" name="firstName" value={quoteFormData.firstName} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name:</label>
              <input type="text" className="form-control" id="lastName" name="lastName" value={quoteFormData.lastName} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
              <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" value={quoteFormData.phoneNumber} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" className="form-control" id="email" name="email" value={quoteFormData.email} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="quoteDetail" className="form-label">Quote Details:</label>
              <textarea className="form-control" id="quoteDetail" name="quoteDetail" value={quoteFormData.quoteDetail} onChange={handleInputChange}></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          <Button variant="primary" onClick={handleSendQuoteRequest}>Send Quote Request</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default GridExample;
