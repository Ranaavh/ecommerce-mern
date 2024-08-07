// App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AppNavbar, CollapsibleNavbar } from "./components/Navbar/Navbar";
import HomePage from "./Pages/Home/HomePage";
import AboutUsPage from "./Pages/About/AboutPage";
import WishlistPage from "./Pages/Wishlist/WishlistPage";
import CheckoutPage from "./Pages/Checkout/CheckoutPage";
import ContactPage from "./Pages/Contact/contact";
import ShopPage from "./Pages/Shop/ShopPage";
import Login from "./components/Login/Login";
import Signin from "./components/Signin/Signin";

import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
      <AppNavbar />
      <CollapsibleNavbar />
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
    </Router>
  );
};

export default App;
