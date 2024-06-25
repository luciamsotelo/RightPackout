import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import picture1 from '../images/Picture1.png';
import picture2 from '../images/Picture2.png'; // Add more pictures as needed

function PictureGallery() {
  const pictures = [
    { src: picture1, alt: 'Picture 1' },
    { src: picture2, alt: 'Picture 2' }, // Add more pictures as needed
  ];

  return (
    <Container style={{ marginTop: '30px' }}>
      <Row>
        {pictures.map((picture, index) => (
          <Col key={index} xs={12} md={4}>
            <Image src={picture.src} alt={picture.alt} thumbnail />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function Management() {
  const [activeKey, setActiveKey] = useState(null); // State to track active accordion item
  const [showQuoteModal, setShowQuoteModal] = useState(false); // State for showing quote request modal
  const [quoteFormData, setQuoteFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    quoteDetail: '',
  });
  const [quoteSubject, setQuoteSubject] = useState(''); // State for quote subject

  // Function to handle accordion item click and toggle active state
  const handleAccordionClick = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };

  // Function to handle showing modal for quote request form
  const handleShowQuoteModal = (subject) => {
    setQuoteFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      quoteDetail: '',
    });
    setQuoteSubject(subject);
    setShowQuoteModal(true);
  };

  // Function to handle closing modal for quote request form
  const handleCloseQuoteModal = () => {
    setShowQuoteModal(false);
    // Reset form data when modal is closed
    setQuoteFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      quoteDetail: '',
    });
  };

  // Function to handle input change in quote request form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuoteFormData({ ...quoteFormData, [name]: value });
  };

  // Function to handle sending quote request
  const handleSendQuoteRequest = () => {
    const emailBody = encodeURIComponent(`
      First Name: ${quoteFormData.firstName}
      Last Name: ${quoteFormData.lastName}
      Phone Number: ${quoteFormData.phoneNumber}
      Email: ${quoteFormData.email}
      Quote Details: ${quoteFormData.quoteDetail}
    `);
    const emailSubject = encodeURIComponent(quoteSubject);
    window.location.href = `mailto:therightpackout@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Close modal after sending request
    handleCloseQuoteModal();
  };

  return (
    <div className="container" style={{ marginBottom: '75px' }}>
      <Accordion activeKey={activeKey}>
        <Accordion.Item eventKey="0" style={{ border: '3px groove red' }}>
          <Accordion.Header onClick={() => handleAccordionClick('0')}>
            Site Coordination
          </Accordion.Header>
          <Accordion.Body>
            Site coordination is a critical aspect of project management, ensuring seamless communication and efficient operations across all phases of a construction or renovation project. At The Right Packout, our site coordination services are designed to streamline workflows, minimize disruptions, and enhance productivity on-site. Our experienced coordinators work closely with contractors, suppliers, and stakeholders to oversee scheduling, logistics, and resource allocation. From initial planning to final execution, we prioritize safety, quality control, and adherence to timelines. Our comprehensive approach fosters collaboration and ensures that every aspect of the project is meticulously managed, allowing our clients to achieve their goals with confidence and efficiency.
            <div style={{ marginTop: '30px' }}>
              <Button variant="danger" onClick={() => handleShowQuoteModal('Request for Site Coordination')}>
                Request a Quote
              </Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" style={{ border: '3px groove white' }}>
          <Accordion.Header onClick={() => handleAccordionClick('1')}>
            Site Management
          </Accordion.Header>
          <Accordion.Body>
            Site management is the cornerstone of effective project execution at The Right Packout, encompassing a range of responsibilities aimed at ensuring smooth operations and achieving project objectives. Our dedicated site managers oversee every aspect of the project lifecycle, from initial planning and resource allocation to execution and closeout. They are adept at coordinating with subcontractors, suppliers, and stakeholders to maintain timelines, quality standards, and budgetary constraints. Our commitment to site management includes rigorous safety protocols, proactive problem-solving, and regular progress updates to keep all parties informed and aligned. At The Right Packout, our focus on meticulous planning and execution underpins successful project delivery, ensuring client satisfaction and project success.
            <div style={{ marginTop: '30px' }}>
              <Button variant="danger" onClick={() => handleShowQuoteModal('Request for Site Management')}>
                Request a Quote
              </Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Picture Gallery */}
      <PictureGallery />

      {/* Modal for quote request form */}
      <Modal show={showQuoteModal} onHide={handleCloseQuoteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Request a Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name:</Form.Label>
              <Form.Control type="text" name="firstName" value={quoteFormData.firstName} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control type="text" name="lastName" value={quoteFormData.lastName} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control type="tel" name="phoneNumber" value={quoteFormData.phoneNumber} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" name="email" value={quoteFormData.email} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>What do you want a quote on?</Form.Label>
              <Form.Control as="textarea" rows={3} name="quoteDetail" value={quoteFormData.quoteDetail} onChange={handleInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseQuoteModal}>Close</Button>
          <Button variant="primary" onClick={handleSendQuoteRequest}>Send Quote Request</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Management;
