import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Newsletter.scss";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2>Newsletter</h2>
            <p>
              Subscribe to our newsletter and get 20% off your first purchase
            </p>
          </Col>
          <Col md={6}>
            <Form>
              <Row className="align-items-center">
                <Col xs={7}>
                  <Form.Control
                    type="email"
                    placeholder="Your email here"
                    className="custom-input"
                  />
                </Col>
                <Col xs={4}>
                  <Button>Subscribe</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
