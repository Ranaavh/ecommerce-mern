/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";

const FormComponent = ({ formData, onChange, onSubmit }) => {
  const { name, email, phone, password, confirmPassword } = formData;

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
