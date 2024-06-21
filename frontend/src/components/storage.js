import React from 'react';
import Card from 'react-bootstrap/Card';
import logo1 from '../images/logo1.png';

function MultiImgCardExample() {
  return (
    <div>
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
      <Card className="bg-dark text-black mt-3">
        <Card.ImgOverlay>
          <Card.Title>Multiple Pictures Card</Card.Title>
          <Card.Text>
            This card showcases multiple images with a shared description. It's useful for scenarios where you want to highlight related visuals along with detailed information.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default MultiImgCardExample;
