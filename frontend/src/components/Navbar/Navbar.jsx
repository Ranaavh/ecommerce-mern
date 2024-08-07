import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
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

/**
 * CollapsibleNavbar component for displaying the main navigation bar.
 * Contains the brand, navigation links, and icons for search, user, cart, and wishlist.
 */
const CollapsibleNavbar = () => {
  return (
    <Navbar
      expand="lg"
      className="p-3 navbar-light"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Container>
        <Navbar.Brand className="brand" as={Link} to="/">
          REACT<span>SITE</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          className="justify-content-center align-items-center"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="d-lg-none gap-3 flex-row">
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
            <Nav className="gap-3 justify-content-end flex-grow-1 pe-3">
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
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Nav className="gap-2 nav-icons d-none d-lg-flex">
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
