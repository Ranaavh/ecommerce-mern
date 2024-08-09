// AppNavbar.jsx
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

/**
 * AppNavbar component for displaying the top announcement bar.
 * Contains links for sign-in and FAQs.
 */
const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="p-1">
      <Container>
        <Navbar.Brand className="custom-brand">
          Free shipping, 30-day return or refund guarantee.
        </Navbar.Brand>
        <Nav className="gap-2">
          <Nav.Link as={Link} to="/signin">
            SIGN IN
          </Nav.Link>
          <Nav.Link as={Link} to="/faqs">
            FAQS
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
