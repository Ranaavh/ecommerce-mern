import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaHeart, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { logout } from "../../features/auth/authSlice";
import "./Navbar.css";

/**
 * CollapsibleNavbar component for displaying the main navigation bar.
 * Contains the brand, navigation links, and icons for search, user, cart, and wishlist.
 */
const CollapsibleNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/"); // Redirect to the homepage after logging out
  };
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
              <Nav.Link as="span">
                <FaSearch />
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <FaCartShopping />
              </Nav.Link>
              <Nav.Link as={Link} to="/wishlist">
                <FaHeart />
              </Nav.Link>
              <NavDropdown
                title={user?.username ? user.username : <FaUser />}
                id="user-dropdown"
              >
                {user?.username ? (
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                ) : (
                  <>
                    <NavDropdown.Item as={Link} to="/login">
                      Login
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/register">
                      Sign Up
                    </NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
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
        <Nav className="gap-2 d-none d-lg-flex nav-icons">
          <Nav.Link as="span">
            <FaSearch />
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            <FaCartShopping />
          </Nav.Link>
          <Nav.Link as={Link} to="/wishlist">
            <FaHeart />
          </Nav.Link>
          <NavDropdown
            title={user?.username ? user.username : <FaUser />}
            id="user-dropdown"
          >
            {user?.username ? (
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            ) : (
              <>
                <NavDropdown.Item as={Link} to="/login">
                  Login
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/register">
                  Sign Up
                </NavDropdown.Item>
              </>
            )}
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CollapsibleNavbar;
