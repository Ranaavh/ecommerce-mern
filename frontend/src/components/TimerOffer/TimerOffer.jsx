import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./TimerOffer.scss";
import ShopButton from "../Shop-Button/ShopButton";

const TimeOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the target date and time
    const countdownDate = new Date("2024-08-20T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
        // Optionally handle the event after countdown reaches 0
      }
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="categories">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="categories__text">
              <h2>
                Clothings Hot <br /> <span>Shoe Collection</span> <br />{" "}
                Accessories
              </h2>
            </div>
          </Col>
          <Col lg={4}>
            <div className="categories__hot__deal">
              <img src="images/product-sale.png" alt="Product Sale" />
              <div className="hot__deal__sticker">
                <span>Sale Of</span>
                <h5>$29.99</h5>
              </div>
            </div>
          </Col>
          <Col lg={4} className="offset-lg-1">
            <div className="categories__deal__countdown">
              <span>Deal Of The Week</span>
              <h1>Multi-pocket Chest Bag Black</h1>
              <div
                className="categories__deal__countdown__timer"
                id="countdown"
              >
                <div className="cd-item">
                  <span>{timeLeft.days}</span>
                  <p>Days</p>
                </div>
                <div className="cd-item">
                  <span>{timeLeft.hours}</span>
                  <p>Hours</p>
                </div>
                <div className="cd-item">
                  <span>{timeLeft.minutes}</span>
                  <p>Minutes</p>
                </div>
                <div className="cd-item">
                  <span>{timeLeft.seconds}</span>
                  <p>Seconds</p>
                </div>
              </div>
              <ShopButton />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TimeOffer;
