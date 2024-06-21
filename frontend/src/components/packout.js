import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import packout from '../images/packout.jpeg';
import boxes from '../images/storage_boxes.jpeg';

function GridExample() {
  // Array of objects containing card information
  const cardsData = [
    {
      name: 'Packout',
      image: packout,
      description:
        'A packout refers to the process of systematically inventorying, packing, and relocating belongings from one location to another, often during a move or disaster recovery. It involves careful cataloging, wrapping, and boxing of items to ensure their safe transportation. Packouts are crucial in situations such as home relocations, renovations, or restoration after fire or water damage. Professional packout services typically include detailed documentation, secure handling of fragile items, and temporary storage if needed. Effective packouts aim to minimize damage, maintain organization, and facilitate smooth transitions for homeowners or businesses undergoing significant changes or restoration processes.',
    },
    {
      name: 'Packback',
      image: boxes,
      description:
        'A packback is a versatile and ergonomic backpack designed to optimize comfort and utility during outdoor activities or daily commuting. It features multiple compartments for organized storage of essentials like electronics, water bottles, and clothing. Packbacks often include padded shoulder straps and back panels for comfort, as well as durable materials that withstand rugged environments. They may incorporate hydration systems, compression straps, and exterior loops for attaching gear. Whether used for hiking, travel, or everyday use, packbacks prioritize functionality and durability, ensuring users can carry their belongings conveniently and securely in various settings.',
    },
  ];

  return (
    <>
      <div style={{ margin: '20px', textAlign: 'justify' }}>
        <p>"Information needed about Packout and Packback from client"</p>
      </div>
      <Row xs={1} md={2} className="g-4" style={{ margin: '15px' }}>
        {cardsData.map((card, idx) => (
          <Col key={idx}>
            <Card className="h-100" style={{ border: '10px double red', boxShadow: '-10px -10px 30px blue' }}>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{card.name}</Card.Title>
                <Card.Img variant="top" src={card.image} style={{ height: 'auto', maxWidth: '100%' }} />
                <Card.Text className="mt-auto" style={{ maxHeight: '200px', overflowY: 'auto', textAlign: 'justify' }}>
                  {card.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{ height: '100px' }}></div> {/* Add a spacer */}
    </>
  );
}

export default GridExample;
