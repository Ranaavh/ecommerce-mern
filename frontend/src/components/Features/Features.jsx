import "./Features.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FaTruck, FaLock, FaHeadset } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";

const Features = () => {
  return (
    <div className="features m-4">
      <Row className=" text-center ">
        <Col sm={6} lg={3}>
          <FaTruck className="features-icon" />
          <h4>Free Shipping</h4>
          <p>For all Orders Over $100</p>
        </Col>
        <Col sm={6} lg={3}>
          <LuRefreshCcw className="features-icon" />
          <h4>30 Days Returns</h4>
          <p>For an Exchange Product</p>
        </Col>
        <Col sm={6} lg={3}>
          <FaLock className="features-icon" />
          <h4>Secured Payment</h4>
          <p>Payment Cards Accepted</p>
        </Col>
        <Col sm={6} md={3}>
          <FaHeadset className="features-icon" />
          <h4>Support 24/7</h4>
          <p>Contact us Anytime</p>
        </Col>
      </Row>
    </div>
  );
};

export default Features;
