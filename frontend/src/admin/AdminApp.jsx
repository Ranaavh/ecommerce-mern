import { Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AdminDashboard from "./pages/AdminDashboard";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./features/auth/authSlice";
import PrivateRoute from "./components/PrivateRoute";
import "./admin.css";

const AdminApp = () => {
  const { user } = useSelector((state) => state.auth); // Access user state from Redux
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    window.location.href = "/admin/login";
  };

  // Conditionally render based on user authentication
  return user ? (
    <Routes>
      {/* Public route for login */}
      <Route path="/login" element={<Login />} />

      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <div className="d-flex" id="wrapper">
              <Sidebar />
              <div id="page-content-wrapper">
                <Header onLogout={handleLogout} />
                <AdminDashboard />
              </div>
            </div>
          </PrivateRoute>
        }
      />
      <Route
        path="/products"
        element={
          <PrivateRoute>
            <ProductList />
          </PrivateRoute>
        }
      />
      <Route
        path="/add-product"
        element={
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        }
      />

      {/* Redirect all unknown routes to dashboard */}
      <Route path="*" element={<Navigate to="/admin/dashboard" />} />
    </Routes>
  ) : (
    <Navigate to="/admin/login" />
  );
};

export default AdminApp;
