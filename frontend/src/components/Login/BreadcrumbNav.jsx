// BreadcrumbNav.jsx
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const BreadcrumbNav = () => {
  return (
    <Breadcrumb className="mb-4">
      <Breadcrumb.Item as={Link} to="/" className="breadcrumb-link">
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Login</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadcrumbNav;
