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
      name: 'Pack Out',
      image: POAfter1,
      description:
        '',
      emailSubject: 'Quote Request for Pack out',
    },
    {
      name: 'Pack Back',
      image: picture5,
      description:
        '',
      emailSubject: 'Quote Request for Pack back',
    },
    {
      name: 'Pack Out',
      image: POAfter1,
      description:
        '',
    },
    {
      name: 'Pack Back',
      image: picture5,
      description:
        '',
      emailSubject: 'Quote Request for Pack back',
    },
    {
      name: 'Pack Out',
      image: POAfter1,
      description:
        '',
      emailSubject: 'Quote Request for Pack out',
    },
    {
      name: 'Pack Back',
      image: picture5,
      description:
        '',
      emailSubject: 'Quote Request for Pack back',
    },
    {
      name: 'Pack Out',
      image: POAfter1,
      description:
        '',
    },
    {
      name: 'Pack Back',
      image: picture5,
      description:
        '',
      emailSubject: 'Quote Request for Pack back',
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
      <h1 style={{ textAlign: 'center' }}>Pack Out & Pack Back</h1>
      <p style={{ textAlign: 'justify', padding: '10px 35px 10px 35px' }}>Discover the essence of our <strong>Pack Out</strong> services. Our experts handle everything from precise cataloging to secure wrapping and boxing, ensuring each item reaches its destination safely. With meticulous attention to detail and optional temporary storage, our professional Pack Out services ensure minimal disruption and seamless transitions. Trust us to restore peace and order swiftly after unexpected events. </p>
      <p style={{ textAlign: 'justify', padding: '10px 35px 10px 35px' }}>Experience the efficiency of our <strong>Pack Back</strong> services. Our dedicated team meticulously repositions or reinstalls every item with precision, ensuring they are securely placed according to your specific requirements. Whether following a move, renovation, or restoration due to fire or water damage, our professional Pack Back services focus on restoring order and functionality seamlessly. We prioritize meticulous organization, aiming to minimize disruption and facilitate a smooth return to normalcy for homeowners and businesses alike.</p>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button variant="danger" onClick={() => handleShowModal('Quote Request for Pack Out')} style ={{ marginTop: '10px' }}>
          Request Quote for Pack Out
        </Button>{' '}
        <Button variant="danger" onClick={() => handleShowModal('Quote Request for Pack Back')} style ={{ marginTop: '10px' }}>
          Request Quote for Pack Back
        </Button>
      </div>

      <Row xs={1} md={2} lg={4} className="g-4" style={{ margin: '20px' }}>
        {cardsData.map((card, idx) => (
          <Col key={idx}>
            <Card className="h-100" style={{ display: 'flex', flexDirection: 'column', border: '3px outset black' }}>
              <Card.Img variant="top" src={card.image} style={{ objectFit: 'cover', height: '300px' }} />
              <Card.Body style={{ flex: '1' }}>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text style={{ flex: '1', textAlign: 'justify', fontSize: '14px' }}>
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
