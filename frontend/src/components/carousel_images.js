import Carousel from "react-bootstrap/Carousel";
import Furniture from "../images/FurnitureAfter.jpeg";
import "../styles/Carousel.css";

function HomeCarousel() {
  return (
    <Carousel fade className="professional-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 professional-carousel-image"
          src={Furniture}
          alt="Professionally cleaned and restored furniture"
        />

        <Carousel.Caption className="professional-carousel-caption">
          <span className="carousel-eyebrow">Trusted Contents Care</span>

          <h2>The Right Pack Out</h2>

          <p>
            Experienced packout, cleaning, storage, and restoration support
            delivered with care, precision, and professionalism.
          </p>

          <a href="/about" className="carousel-link-button">
            Meet Our Team
          </a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 professional-carousel-image"
          src="https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1400&auto=format&fit=crop&q=85"
          alt="Clean and professionally maintained home interior"
        />

        <Carousel.Caption className="professional-carousel-caption">
          <span className="carousel-eyebrow">Professional Standards</span>

          <h2>Skilled Work. Careful Service.</h2>

          <p>
            We treat every property and every item with the attention and
            respect we would want for our own home.
          </p>

          <a href="/pack" className="carousel-link-button">
            Explore Packout Services
          </a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 professional-carousel-image"
          src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=85&w=1400&auto=format&fit=crop"
          alt="Bright restored residential interior"
        />

        <Carousel.Caption className="professional-carousel-caption">
          <span className="carousel-eyebrow">Peace of Mind</span>

          <h2>Committed to Excellent Results</h2>

          <p>
            From the first assessment through final delivery, our goal is to
            make the restoration process feel organized, dependable, and
            manageable.
          </p>

          <a href="/feedback" className="carousel-link-button">
            Request Assistance
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;