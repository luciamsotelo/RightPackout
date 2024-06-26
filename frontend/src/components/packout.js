import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import POAfter1 from '../images/POAfter1.JPEG';
import picture5 from '../images/Picture5.png';

function GridExample() {
  const cardsData = [
    {
      name: 'Packout',
      image: POAfter1,
      description:
        'A packout is the systematic process of inventorying, packing, and moving belongings from one location to another, essential during moves or disaster recovery. It involves cataloging, wrapping, and boxing items for safe transport, crucial for home relocations, renovations, or restoration after fire or water damage. Professional packout services include detailed documentation, secure handling of fragile items, and optional temporary storage. Effective packouts minimize damage, maintain organization, and ensure smooth transitions during significant changes or restoration.',
      emailSubject: 'Quote Request for Packout',
    },
    {
      name: 'Packback',
      image: picture5,
      description:
        'Packback is the careful process of systematically returning items to their original positions or designated places, ensuring everything is restored with meticulous attention. It is crucial during reassembly after moves, renovations, or restoration projects like fire or water damage. Professional packback services focus on precision placement, ensuring items are securely repositioned or reinstalled as per specific requirements. Effective packback aims to maintain organization, minimize disruption, and facilitate seamless transitions for homeowners or businesses undergoing significant changes or restoration processes.',
      emailSubject: 'Quote Request for Packback',
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [quoteFormData, setQuoteFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    quoteDetail: '',
  });
  const [emailSubject, setEmailSubject] = useState('');

  const handleShowModal = (subject) => {
    setQuoteFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      quoteDetail: '',
    });
    setEmailSubject(subject);
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
      Quote Details: ${quoteFormData.quoteDetail}
    `);
    window.location.href = `mailto:therightpackout@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;

    handleCloseModal();
  };

  return (
    <div style={{ marginTop: '25px', marginBottom: '75px'}}>
      <h1 style={{ textAlign: 'center' }}>Packout and Packback</h1>
      <p style={{ textAlign: 'center' }}>Information needed about Packout and Packback from client</p>
      <Row xs={1} md={2} className="g-4" style={{ margin: '20px' }}>
        {cardsData.map((card, idx) => (
          <Col key={idx}>
            <Card className="h-100" style={{ display: 'flex', flexDirection: 'column', border: '4px solid black'}}>
              <Card.Img variant="top" src={card.image} style={{ objectFit: 'cover', height: '600px' }} />
              <Card.Body style={{ flex: '1' }}>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text style={{ flex: '1', textAlign: 'justify' }}>
                  {card.description}
                </Card.Text>
                <div className="d-flex justify-content-center mt-auto">
                  <Button variant="danger" onClick={() => handleShowModal(card.emailSubject)}>
                    Request a Quote
                  </Button>
                </div>
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
