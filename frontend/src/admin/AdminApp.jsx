import { Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AdminDashboard from "./pages/AdminDashboard";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";
import { useSelector } from "react-redux"; // Remove useDispatch and useNavigate as they aren't used here
import PrivateRoute from "./components/PrivateRoute";
import "./admin.css";

const AdminApp = () => {
  const { user } = useSelector((state) => state.auth); // Access user state from Redux

  // Redirect to dashboard after successful login if the user is on the login page
  if (user && window.location.pathname === "/admin/login") {
    return <Navigate to="/admin/dashboard" />;
  }

  // If the user is not logged in, redirect them to the login page
  if (!user && window.location.pathname !== "/admin/login") {
    return <Navigate to="/admin/login" />;
  }

  return (
    <Routes>
      {/* Public route for login */}
      <Route path="/login" element={<Login />} />

      {/* Protected routes - only accessible if logged in */}
      {user && (
        <>
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
        </>
      )}

      {/* Catch-all route for unknown paths */}
      <Route path="*" element={<Navigate to="/admin/login" />} />
    </Routes>
  );
};

export default AdminApp;
