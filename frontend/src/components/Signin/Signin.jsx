import Container from "react-bootstrap/Container";
import FormComponent from "./SigninFormComponent";
import BreadcrumbComponent from "./BreadcrumbComponent";
import "./Signin.css";

const Signin = () => {
  return (
    <Container className="container-signin form-container">
      <BreadcrumbComponent /> {/* Breadcrumb navigation */}
      <h2 className="signin-heading mb-5">Create Account</h2>{" "}
      {/* Heading for the form */}
      <FormComponent />{" "}
      {/* Custom form component to handle form inputs and submission */}
    </Container>
  );
};

export default Signin;
