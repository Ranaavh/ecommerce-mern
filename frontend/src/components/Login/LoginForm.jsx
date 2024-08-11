import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { unwrapResult } from "@reduxjs/toolkit";
import "./Login.css";

const LoginForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Redux dispatch and navigate hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password } = formData;

  // Handle input changes
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }))
      .then((resultAction) => {
        unwrapResult(resultAction);
        toast.success("Login successful"); // Notify success
        navigate("/home"); // Redirect to home page on success
      })
      .catch((error) => {
        toast.error(error.message || "Login failed"); // Notify failure
      });
  };

  return (
    <Form onSubmit={onSubmit}>
      {/* Email input field */}
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

      {/* Password input field */}
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

      {/* Submit button */}
      <Button variant="primary" type="submit" className="login-button mb-3">
        Login
      </Button>

      {/* Footer buttons for account creation and password recovery */}
      <Row>
        <Col className="footer-buttons">
          <Button as={Link} to="/signin" className="create-button">
            Create Account
          </Button>
          <Button as={Link} to="/forgot-password" className="forgot-button">
            Forgot Password?
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default LoginForm;
