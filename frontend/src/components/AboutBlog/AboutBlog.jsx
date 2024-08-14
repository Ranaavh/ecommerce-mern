// components/AboutBlog/AboutBlog.jsx
import "./AboutBlog.scss";
import "../Shop-Button/ShopButton.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const AboutBlog = () => {
  return (
    <div className="container py-5">
      <Row className="align-items-center">
        <Col lg={6}>
          <div className="image-container">
            <img
              src="./images/banner/banner-4.jpg"
              alt="banner"
              height={"520px"}
              width={"500px"}
              className="transition-image"
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="text-container">
            <h2>Discover the Latest Trends</h2>
            <p>
              Explore our carefully curated new arrivals collection, featuring
              modern styles with timeless elegance. Stay ahead in fashion and
              find your next favorite outfit today!
            </p>
            <button>SHOP NOW</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutBlog;
