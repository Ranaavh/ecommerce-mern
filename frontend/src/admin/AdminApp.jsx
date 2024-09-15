import {
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AdminDashboard from "./pages/AdminDashboard";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { login, logout } from "./features/auth/authSlice";
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute for protected admin routes
import "./admin.css";

const AdminApp = () => {
  const { user } = useSelector((state) => state.auth); // Access user state from Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check for token in localStorage when app loads
    const token = localStorage.getItem("token");

    if (token) {
      // Dispatch login action if token exists
      dispatch(login({ token, email: localStorage.getItem("email") }));
    } else {
      // Otherwise, reset the auth state
      dispatch(logout());
    }
  }, [dispatch]);

 useEffect(() => {
   if (user) {
     // Redirect authenticated users away from the login page
     if (location.pathname === "/admin/login") {
       navigate("/admin/dashboard", { replace: true });
     }
   } else {
     // Redirect unauthenticated users to login from any protected route
     if (location.pathname !== "/admin/login") {
       navigate("/admin/login", { replace: true });
     }
   }
 }, [user, navigate, location.pathname]);

  return (
    <Routes>
      {/* Public route for admin login */}
      <Route path="/login" element={<Login />} />

      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <div className="d-flex">
              <Sidebar />
              <div id="page-content-wrapper">
                <Header />
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
            <div className="d-flex">
              <Sidebar />
              <div id="page-content-wrapper">
                <Header />
                <ProductList />
              </div>
            </div>
          </PrivateRoute>
        }
      />
      <Route
        path="/add-product"
        element={
          <PrivateRoute>
            <div className="d-flex">
              <Sidebar />
              <div id="page-content-wrapper">
                <Header />
                <AddProduct />
              </div>
            </div>
          </PrivateRoute>
        }
      />

      {/* Catch-all route to redirect unknown paths */}
      <Route path="*" element={<Navigate to="/admin/login" />} />
    </Routes>
  );
};

export default AdminApp;
