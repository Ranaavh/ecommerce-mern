import { Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AdminDashboard from "./pages/AdminDashboard";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./features/auth/authSlice"; // Ensure this action is defined
import "./admin.css";

const AdminApp = () => {
  const { user } = useSelector((state) => state.auth); // Assuming you have user authentication state

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Logout action
    window.location.href = "/admin/login"; // Redirect to login after logout
  };

  return !user ? (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/admin/login" />} />
    </Routes>
  ) : (
    <div className="d-flex" id="wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <Header onLogout={handleLogout} />{" "}
        {/* Pass the logout function to Header */}
        <Routes>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="*" element={<Navigate to="/admin/dashboard" />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminApp;
