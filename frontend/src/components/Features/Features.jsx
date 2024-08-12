import "./Features.css";
import { FaTruck, FaLock,FaHeadset  } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";

const Features = () => {
  return (
    <div className="info-section m-4">
      <div className="row text-center ">
        <div className="col-md-3 ">
          <FaTruck
            style={{
              color: "var(--primary-color)",
              fontSize: "30px",
              marginBottom: "10px",
            }}
          />
          <h4>Free Shipping</h4>
          <p>For all Orders Over $100</p>
        </div>
        <div className="col-md-3">
          <LuRefreshCcw
            style={{
              color: "var(--primary-color)",
              fontSize: "30px",
              marginBottom: "10px",
            }}
          />
          <h4>30 Days Returns</h4>
          <p>For an Exchange Product</p>
        </div>
        <div className="col-md-3">
          <FaLock
            style={{
              color: "var(--primary-color)",
              fontSize: "30px",
              marginBottom: "10px",
            }}
          />
          <h4>Secured Payment</h4>
          <p>Payment Cards Accepted</p>
        </div>
        <div className="col-md-3">
          <FaHeadset
            style={{
              color: "var(--primary-color)",
              fontSize: "30px",
              marginBottom: "10px",
            }}
          />
          <h4>Support 24/7</h4>
          <p>Contact us Anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
