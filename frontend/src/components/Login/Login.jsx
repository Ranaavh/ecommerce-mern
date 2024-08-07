import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authActions";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { toast } from "react-toastify";
import "./login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(login({ email, password }));

      if (result.success) {
        toast.success("Login successful");
        navigate("/home");
      } else {
        toast.error(result.message || "Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(error.message || "An unexpected error occurred");
    }
  };

  return (
    <Container className="container-login form-container">
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item href="/" className="breadcrumb-link">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Login</Breadcrumb.Item>
      </Breadcrumb>

      <h2 className="login-heading mb-5">Login</h2>

      <Row className="form-col">
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password*</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="login-button mb-3"
            >
              Login
            </Button>

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
