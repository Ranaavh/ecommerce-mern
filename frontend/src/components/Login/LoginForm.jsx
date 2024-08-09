import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { unwrapResult } from "@reduxjs/toolkit";
import "./Login.css";

const LoginForm = () => {
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
      const resultAction = await dispatch(login({ email, password }));
      unwrapResult(resultAction);
      toast.success("Login successful");
      navigate("/home");
    } catch (error) {
      toast.error(error.message || "Login failed");
    }
  };

  return (
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

      <Button variant="primary" type="submit" className="login-button mb-3">
        Login
      </Button>

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
