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

function Guidance() {
  const [activeKey, setActiveKey] = useState(null); // State to track active accordion item
  const [showQuoteModal, setShowQuoteModal] = useState(false); // State for showing quote request modal
  const [quoteFormData, setQuoteFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    quoteDetail: '',
  });

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

  // State to track the subject line for the quote request email
  const [quoteSubject, setQuoteSubject] = useState('');

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
            Contents Consultation
          </Accordion.Header>
          <Accordion.Body>
            Consultation reporting is an essential service offered by The Right Packout,
            providing detailed insights and recommendations tailored to your specific needs.
            Our consultation reports are comprehensive documents that outline findings, analysis,
            and expert advice based on thorough assessments of your property or project.
            Whether you're planning a renovation, dealing with damage restoration, or seeking
            professional advice on preservation, our reports offer clarity and actionable steps forward.
            They encompass detailed observations, cost estimates, and strategic suggestions to help you
            make informed decisions aligned with your goals. At The Right Packout, our commitment to
            excellence ensures that our consultation reporting not only identifies challenges but also
            proposes effective solutions, empowering you to navigate your project with confidence and clarity.
            <div style={{ marginTop: '30px' }}>
              <Button variant="danger" onClick={() => handleShowQuoteModal('Request for Contents Consultation')} style={{ marginTop: '10px' }}>
                Request a Quote
              </Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" style={{ border: '3px groove white' }}>
          <Accordion.Header onClick={() => handleAccordionClick('1')}>
            Insurance Reporting
          </Accordion.Header>
          <Accordion.Body>
            Insurance reporting is a crucial aspect of The Right Packout's services, aimed at facilitating
            smooth and efficient claims processes for our clients. Our dedicated team specializes in preparing
            thorough and detailed insurance reports that document the scope of damage, loss, or restoration
            needs accurately. These reports are meticulously crafted to meet the stringent requirements of
            insurance companies, ensuring transparency and compliance throughout the claims process. We provide
            comprehensive documentation, including itemized lists, photographs, and assessments, to support your
            insurance claim effectively. At The Right Packout, we understand the importance of timely and accurate
            reporting in securing the coverage you deserve, offering peace of mind during challenging times. Our
            commitment is to advocate for you, providing the necessary documentation and expertise to streamline
            your insurance claims and expedite your recovery.
            <div style={{ marginTop: '30px' }}>
              <Button variant="danger" onClick={() => handleShowQuoteModal('Request for Insurance Reporting')} style={{ marginTop: '10px' }}>
                Request a Quote
              </Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" style={{ border: '3px groove blue' }}>
          <Accordion.Header onClick={() => handleAccordionClick('2')}>
            Total Loss Inventory
          </Accordion.Header>
          <Accordion.Body>
            Total loss inventory reporting is a specialized service offered by The Right Packout, designed to assist
            clients in documenting and managing items deemed irreparable or lost due to unforeseen events such as
            fires, floods, or natural disasters. Our experienced team meticulously catalogues and assesses each item,
            compiling comprehensive reports that outline the scope of the loss. These reports include detailed descriptions,
            valuations, and supporting documentation necessary for insurance claims and personal records. We understand the
            emotional and practical challenges of dealing with total losses, and our goal is to provide clarity and support
            throughout the inventory reporting process. With The Right Packout, you can trust that your total loss inventory
            is handled with professionalism and care, ensuring a thorough and accurate representation of your losses to aid
            in your recovery journey.
            <div style={{ marginTop: '30px' }}>
              <Button variant="danger" onClick={() => handleShowQuoteModal('Request for Total Loss Inventory')} >
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

export default Guidance;
