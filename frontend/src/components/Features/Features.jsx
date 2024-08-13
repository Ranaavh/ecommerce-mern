import "./Features.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FaTruck, FaLock, FaHeadset } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";

const Features = () => {
  return (
    <div className="features m-4">
      <Row className=" text-center ">
        <Col md={3}>
          <FaTruck
            style={{
              color: "var(--primary-color)",
              fontSize: "30px",
              marginBottom: "10px",
            }}
          />
          <h4>Free Shipping</h4>
          <p>For all Orders Over $100</p>
        </Col>
        <Col md={3}>
          <LuRefreshCcw
            style={{
              color: "var(--primary-color)",
              fontSize: "30px",
              marginBottom: "10px",
            }}
          />
          <h4>30 Days Returns</h4>
          <p>For an Exchange Product</p>
        </Col>
        <Col md={3}>
          <FaLock
            style={{
              color: "var(--primary-color)",
              fontSize: "30px",
              marginBottom: "10px",
            }}
          />
          <h4>Secured Payment</h4>
          <p>Payment Cards Accepted</p>
        </Col>
        <Col md={3}>
          <FaHeadset
            style={{
              color: "var(--primary-color)",
              fontSize: "30px",
              marginBottom: "10px",
            }}
          />
          <h4>Support 24/7</h4>
          <p>Contact us Anytime</p>
        </Col>
      </Row>
    </div>
  );
};

export default Features;
