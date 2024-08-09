import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { unwrapResult } from "@reduxjs/toolkit";
import Container from "react-bootstrap/Container";
import FormComponent from "./FormComponent";
import BreadcrumbComponent from "./BreadcrumbComponent";
import "./Signin.css";

function Signin() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, email, phone, password, confirmPassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.warn("Passwords do not match");
    } else {
      try {
        const resultAction = await dispatch(
          register({ name, email, phone, password })
        );
        unwrapResult(resultAction);
        toast.success("User registered successfully");
        navigate("/login");
      } catch (error) {
        toast.error(error.message || "Registration failed");
      }
    }
  };

  return (
    <Container className="container-login form-container">
      <BreadcrumbComponent />
      <h2 className="signin-heading mb-5">Create Account</h2>
      <FormComponent
        formData={formData}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </Container>
  );
}

export default Signin;
