import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { unwrapResult } from "@reduxjs/toolkit";
import Container from "react-bootstrap/Container";
import FormComponent from "./FormComponent";
import BreadcrumbComponent from "./BreadcrumbComponent";
import "./Signin.css";

const Signin = () => {
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
          navigate("/"); // Redirect to login page on success
        })
        .catch((error) => {
          toast.error(error.message || "Registration failed"); // Notify failure
        });
    }
  };

  return (
    <Container className="container-signin form-container">
      <BreadcrumbComponent /> {/* Breadcrumb navigation */}
      <h2 className="signin-heading mb-5">Create Account</h2>{" "}
      {/* Heading for the form */}
      <FormComponent
        formData={formData}
        onChange={onChange}
        onSubmit={onSubmit}
      />{" "}
      {/* Custom form component to handle form inputs and submission */}
    </Container>
  );
};

export default Signin;
