
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* First Column */}
          <div className="col-lg-3 col-md-6">
            <h4 className="brand">
              REACT<span>SITE</span>
            </h4>
            <p>
              The customer is at the heart of our unique business model, which
              includes design.
            </p>
          </div>

          {/* Second Column */}
          <div className="col-lg-3 col-md-6">
            <h4>About Us</h4>
            <ul>
              <li>About Us</li>
              <li>Community</li>
              <li>Shipping</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="col-lg-3 col-md-6">
            <h4>Shopping</h4>
            <ul>
              <li>Contact Us</li>
              <li>Payment Methods</li>
              <li>Delivery</li>
              <li>Return & Exchanges</li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div className="col-lg-3 col-md-6">
            <h4>Our Services</h4>
            <ul>
              <li>Free Shipping</li>
              <li>Free Returns</li>
              <li>Our Franchising</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        {/* Second Row */}
        <div className="footer-bottom">
          <p>Copyright ©2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
