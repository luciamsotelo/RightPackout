import Carousel from 'react-bootstrap/Carousel';
import Furniture from '../images/FurnitureAfter.jpeg';
function DarkVariantExample() {
  return (
    
    <Carousel fade style={{ marginTop: '15px', marginBottom: '50px'}}>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={Furniture}
          alt="First slide"
        />
        <Carousel.Caption className='bg-dark bg-opacity-50' style={{borderRadius: '50px'}}>
          <h5>The Right Pack Out</h5>
          <p>We bring over a decade of experience and specialized training to manage and care for your high-end contents. Our team handles it all with precision and care. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1501183638710-841dd1904471?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Second slide"
        />
        <Carousel.Caption className='bg-dark bg-opacity-50' style={{borderRadius: '50px'}}>
          <h5>Our Core Value</h5>
          <p>"Do you see a man skillful in his work? He will stand before kings; he will not stand before obscure men." </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Third slide"
        />
        <Carousel.Caption className='bg-dark bg-opacity-50 p-2' style={{borderRadius: '50px'}}>
        <h5>Commitment to Excellence</h5>
        <p>We are committed to ensuring your treasured items are handled with the utmost respect and professionalism. We not only care but we offer peace of mind through our trusted and reliable service. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;