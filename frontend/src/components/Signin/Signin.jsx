import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/authActions";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./signin.css";
import { toast } from "react-toastify";

function Signin() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Destructure form data
  const { name, email, phone, password, confirmPassword } = formData;

  // Handle form input changes
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();

    // Check for password match and required fields
    if (password !== confirmPassword) {
      toast.warn("Passwords do not match");
    } else if (!name || !email || !phone || !password || !confirmPassword) {
      toast.warn("Please fill all fields");
    } else {
      try {
        // Dispatch registration action
        await dispatch(register({ name, email, phone, password }));
        toast.success("User registered successfully");
        navigate("/login"); // Redirect to login page
      } catch (error) {
        toast.error("Registration failed");
      }
    }
  };

  return (
    <Container className="container-login form-container">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item href="/" className="breadcrumb-link">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Signin</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="signin-heading mb-5">Create Account</h2>
      <Row className="form-col">
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Full Name*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                value={name}
                onChange={onChange}
                required
              />
            </Form.Group>
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
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone Number"
                name="phone"
                value={phone}
                onChange={onChange}
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
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password*</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={onChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                className="custom-checkbox"
                label="I've read and accept the Privacy Policy"
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="signin-button mb-3"
            >
              Sign In
            </Button>
            <Button
              variant="primary"
              type="button"
              as={Link}
              to="/login"
              className="already-button mb-3"
            >
              Already have an Account?
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signin;
