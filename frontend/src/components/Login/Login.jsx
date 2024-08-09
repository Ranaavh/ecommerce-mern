// Login.jsx
import { Container, Row, Col } from "react-bootstrap";
import BreadcrumbNav from "./BreadcrumbNav";
import LoginForm from "./LoginForm";
import "./Login.css";

const Login = () => {
  return (
    <Container className="container-login form-container">
      <BreadcrumbNav />
      <h2 className="login-heading mb-5">Login</h2>
      <Row className="form-col">
        <Col md={{ span: 6, offset: 3 }}>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
