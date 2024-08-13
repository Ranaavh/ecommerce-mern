import "./Collections.css";
const Collections = () => {
  return (
    <section className="banner spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 ">
            <div className="banner__item">
              <div className="banner__item__pic">
                <img src="images/banner/banner-1.jpg" alt="Banner 1" />
              </div>
              <div className="banner__item__text">
                <h2>Clothing Collections 2030</h2>
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="banner__item banner__item--middle">
              <div className="banner__item__pic">
                <img src="images/banner/banner-2.jpg" alt="Banner 2" />
              </div>
              <div className="banner__item__text">
                <h2>Accessories</h2>
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="banner__item banner__item--last">
              <div className="banner__item__pic">
                <img src="images/banner/banner-3.jpg" alt="Banner 3" />
              </div>
              <div className="banner__item__text">
                <h2>Shoes Spring 2030</h2>
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
