import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./signin.css";

function Signin() {
  return (
    <Container className="container-login form-container">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item href="/" className="breadcrumb-link">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Signin</Breadcrumb.Item>
      </Breadcrumb>

      {/* Heading */}
      <h2 className="signin-heading mb-5">Create Account</h2>

      <Row className="form-col">
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name*</Form.Label>
              <Form.Control placeholder="Enter Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email*</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone number*</Form.Label>
              <Form.Control placeholder="Enter Phone Number" required />
            </Form.Group>
            {/* Password Input */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password*</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password*</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                className="custom-checkbox"
                label="I've read and accept the Privacy Policy"
                required
              />
            </Form.Group>
            {/* Login Button */}
            <Button
              variant="primary"
              type="submit"
              className="signin-button mb-3"
            >
              Sign In
            </Button>
            <Button
              variant="primary"
              type="submit"
              as={Link} to="/login"
              className="already-button mb-3"
            >
              Already an Account?
            </Button>

            
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signin;
