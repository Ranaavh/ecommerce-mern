import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./login.css";

function Login() {
  return (
    <Container className="container-login form-container">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item href="/" className="breadcrumb-link">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Login</Breadcrumb.Item>
      </Breadcrumb>

      {/* Heading */}
      <h2 className="login-heading mb-5">Login</h2>

      <Row className="form-col">
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email*</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            {/* Password Input */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password*</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            {/* Login Button */}
            <Button
              variant="primary"
              type="submit"
              className="login-button mb-3"
            >
              Login
            </Button>

            {/* Footer Buttons */}
            <Row>
              <Col className="footer-buttons">
                <Button as={Link} to="/signin" className="create-button">
                  Create Account
                </Button>
                <Button
                  as={Link}
                  to="/forgot-password"
                  className="forgot-button"
                >
                  Forgot Password?
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
