import "./Footer.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* First Column */}
          <Col lg={3}  sm={6}>
            <h4 className="brand">
              REACT<span>SITE</span>
            </h4>
            <p>
              The customer is at the heart of our unique business model, which
              includes design.
            </p>
          </Col>

          {/* Second Column */}
          <Col lg={3}  sm={6}>
            <h4>About Us</h4>
            <ul>
              <li>About Us</li>
              <li>Community</li>
              <li>Shipping</li>
              <li>Contact Us</li>
            </ul>
          </Col>

          {/* Third Column */}
          <Col lg={3} sm={6}>
            <h4>Shopping</h4>
            <ul>
              <li>Contact Us</li>
              <li>Payment Methods</li>
              <li>Delivery</li>
              <li>Return & Exchanges</li>
            </ul>
          </Col>

          {/* Fourth Column */}
          <Col lg={3} sm={6}>
            <h4>Our Services</h4>
            <ul>
              <li>Free Shipping</li>
              <li>Free Returns</li>
              <li>Our Franchising</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>Copyright ©2024 All rights reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
