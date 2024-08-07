import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import "./Navbar.css";

/**
 * AppNavbar component for displaying the top announcement bar.
 * Contains links for sign-in and FAQs.
 */
const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="p-1 ">
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

/**
 * CollapsibleExample component for displaying the main navigation bar.
 * Contains the brand, navigation links, and icons for search, user, cart, and wishlist.
 */
const CollapsibleNavbar = () => {
  return (
    <Navbar
      className="p-3 navbar-light"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand className="brand" as={Link} to="/">
          REACT<span>SITE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="gap-4 navbar-links">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shop">
              Shop
            </Nav.Link>
            <NavDropdown title="Pages" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/about-us">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/wishlist">
                Wishlist
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/checkout">
                Checkout
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="gap-2">
          <Nav.Link href="">
            <FaSearch />
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            <FaUser />
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            <FaCartShopping />
          </Nav.Link>
          <Nav.Link as={Link} to="/wishlist">
            <FaHeart />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export { AppNavbar, CollapsibleNavbar };
