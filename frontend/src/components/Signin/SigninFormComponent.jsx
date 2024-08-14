import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { unwrapResult } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";

const FormComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // Redux dispatch and navigate hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, email, phone, password, confirmPassword } = formData;

  // Handle input changes
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      toast.warn("Passwords do not match"); // Notify user of password mismatch
    } else {
      // Dispatch register action
      dispatch(register({ name, email, phone, password }))
        .then((resultAction) => {
          unwrapResult(resultAction); // Unwrap result to handle fulfilled or rejected action
          toast.success("User registered successfully"); // Notify success
          navigate("/"); // Redirect to home page on success
        })
        .catch((error) => {
          toast.error(error.message || "Registration failed"); // Notify failure
        });
    }
  };

  return (
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
            <Form.Label>Phone Number*</Form.Label>
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
  );
};

export default FormComponent;
