import { Carousel } from "react-bootstrap";
import "./Herosection.scss";
import ShopButton from "../Shop-Button/ShopButton";
const HeroSection = () => {
  return (
    <section className="hero">
      <Carousel>
        <Carousel.Item>
          <div
            className="hero__items set-bg"
            style={{ backgroundImage: "url('/images/hero/hero-1.jpg')" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-7 col-md-8">
                  <div className="hero__text">
                    <h6>Summer Collection</h6>
                    <h2>Fall - Winter Collections 2030</h2>
                    <p>
                      A specialist label creating luxury essentials. Ethically
                      crafted with an unwavering commitment to exceptional
                      quality.
                    </p>
                    <ShopButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="hero__items set-bg"
            style={{ backgroundImage: `url('/images/hero/hero-2.jpg')` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-7 col-md-8">
                  <div className="hero__text">
                    <h6>Summer Collection</h6>
                    <h2>Fall - Winter Collections 2030</h2>
                    <p>
                      A specialist label creating luxury essentials. Ethically
                      crafted with an unwavering commitment to exceptional
                      quality.
                    </p>
                    <ShopButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default HeroSection;
