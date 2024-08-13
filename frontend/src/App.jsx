// App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
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

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
