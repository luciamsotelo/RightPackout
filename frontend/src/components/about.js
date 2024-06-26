import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GridExample() {
  // Array of objects containing card information
  const cardsData = [
    {
      name: 'Sharon Ward',
      image: 'https://img.freepik.com/fotos-kostenlos/laptop-auf-steinoberflaeche-und-meer-hintergrund_1232-430.jpg',
      description: 'Sharon is IICRC certified in odor control, bringing specialized training in contents inventory and cleaning to our team. With extensive experience in coordinating job schedules and managing various vendors, Sharon is dedicated to ensuring seamless operations and exceptional service. Her proficiency in creating Xactimate estimates further enhances our ability to provide accurate and efficient project planning. Sharon is passionate about helping you achieve the best outcomes and is ready to assist with your needs.'
    },
    {
      name: 'Emilio Vargas',
      image: 'https://t4.ftcdn.net/jpg/01/28/49/55/360_F_128495561_AxOj0KERPU6Vp4w3OWJqnkDySIsRMqHM.jpg',
      description: 'Emilio is IICRC certified in Contents Processing, with specialized training in wedding gown preservation. With nearly 30 years of experience in the dry cleaning industry, including owning and operating his own dry cleaners for a decade, Emilio brings a wealth of knowledge and expertise to our team. His extensive background ensures meticulous care and preservation of your most cherished garments.'
    },
  ];

  return (
    <>
      <div style={{ margin: "30px",textAlign: "justify" }}>
        <h1 className='about' style={{ textAlign: "center"}}>Together we can meet all of your pack out needs</h1>
        <p>"Both Emilio and Sharon bring extensive training and experience in total loss contents inventory to our team. Their proficiency in this critical area ensures accurate and comprehensive documentation of total loss items, providing peace of mind during challenging times. With a proven track record of collaborating with insurance agents, Emilio and Sharon excel in creating detailed total loss reports and offering expert consultations. Their combined expertise guarantees meticulous attention to detail and exceptional support throughout the insurance process, making them invaluable assets to our clients."</p>
      </div>
      <Row xs={1} md={2} className="g-4">
        {cardsData.map((card, idx) => (
          <Col key={idx}>
            <Card className="" style={{ padding: "15px", border: "5px solid #ffb79d", margin: "30px", height: "75%"}}>
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
