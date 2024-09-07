import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
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
import "./App.css";
import { ToastContainer } from "react-toastify";
import AdminApp from "./admin/AdminApp";

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(validateToken()); // Validate token on app load
  }, [dispatch]);

  // Check if the current route is part of the admin section
  const isAdminRoute = window.location.pathname.startsWith("/admin");

  return (
    <Router>
      {!isAdminRoute && <Navbar />}
      <ToastContainer />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route
            path="/wishlist"
            element={user ? <WishlistPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/checkout"
            element={user ? <CheckoutPage /> : <Navigate to="/login" />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Signin />}
          />
          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </Router>
  );
};

export default App;
