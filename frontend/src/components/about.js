import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GridExample() {
  // Array of objects containing card information
  const cardsData = [
    {
      name: 'Sharon',
      image: 'https://img.freepik.com/fotos-kostenlos/laptop-auf-steinoberflaeche-und-meer-hintergrund_1232-430.jpg',
      description: 'information about sharon'
    },
    {
      name: 'Emilio ',
      image: 'https://t4.ftcdn.net/jpg/01/28/49/55/360_F_128495561_AxOj0KERPU6Vp4w3OWJqnkDySIsRMqHM.jpg',
      description: 'information about emilio'
    },
  ];

  return (
    <>
      <div style={{ padding: "1px", margin: "30px 10px 3px 10px", textAlign: "justify" }}>
        <p>"insert info about business"</p>
      </div>
      <Row xs={1} md={2} className="g-4">
        {cardsData.map((card, idx) => (
          <Col key={idx}>
            <Card className="" style={{ padding: "15px", border: "5px solid #ffb79d", margin: "10px", height: "100%" }}>
              {/* You can adjust the card's layout as needed */}
              <Card.Img variant="top" src={card.image} />
              <Card.Body style={{ height: "100%" }}>
                <Card.Title style={{ height: "20%", overflow: "hidden" }}>{card.name}</Card.Title>
                <Card.Text style={{ height: "80%", overflowY: "auto" }}>
                  {card.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{ height: "100px" }}></div> {/* Add a spacer */}
    </>
  );
}

export default GridExample;
