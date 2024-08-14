import { Carousel, Container, Row, Col } from "react-bootstrap";
import "./Herosection.scss";
import ShopButton from "../Shop-Button/ShopButton";

// Array of carousel items
const carouselItems = [
  {
    image: "/images/hero/hero-1.jpg",
    heading: "Summer Collection",
    subheading: "Fall - Winter Collections 2030",
    description:
      "A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.",
  },
  {
    image: "/images/hero/hero-2.jpg",
    heading: "Summer Collection",
    subheading: "Fall - Winter Collections 2030",
    description:
      "A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.",
  },
];

const HeroSection = () => {
  return (
    <section className="hero">
      <Carousel>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <div
              className="hero__items set-bg"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <Container>
                <Row>
                  <Col xl={5} lg={12} md={5}>
                    <div className="hero__text">
                      <h6>{item.heading}</h6>
                      <h2>{item.subheading}</h2>
                      <p>{item.description}</p>
                      <ShopButton />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
