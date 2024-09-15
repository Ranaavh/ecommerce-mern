import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { validateToken } from "./features/auth/authSlice";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutPage";
import WishlistPage from "./Pages/WishlistPage";
import CheckoutPage from "./Pages/CheckoutPage";
import ContactPage from "./Pages/Contact";
import ShopPage from "./Pages/ShopPage";
import Login from "./components/Login/Login";
import Signin from "./components/Signin/Signin";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import AdminApp from "./admin/AdminApp";
import "./App.css";

const AppContent = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    dispatch(validateToken()); // Validate token on app load
  }, [dispatch]);

  return (
    <>
      {/* Conditionally render Navbar and Footer based on admin route */}
      {!isAdminRoute && <Navbar />}
      <ToastContainer />
      <main>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Protected Routes */}
          <Route
            path="/wishlist"
            element={user ? <WishlistPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/checkout"
            element={user ? <CheckoutPage /> : <Navigate to="/login" />}
          />

          {/* Auth Routes */}
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!user ? <Signin /> : <Navigate to="/" />}
          />

          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminApp />} />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
