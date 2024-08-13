// components/InfoSection/InfoSection.jsx
import "./BlogSection.scss";

const BlogSection = () => {
  return (
    <section className="info-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="info-item">
              <img
                src="images/blog/blog-1.jpg"
                alt="Latest Fashion Trends"
                className="info-image"
              />
              <div className="info-text">
                <h2>Discover the Latest Trends</h2>
                <p>
                  Stay ahead with our curated collection of the latest trends
                  and seasonal must-haves.
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="info-item">
              <img
                src="images/blog/blog-2.jpg"
                alt="Style Inspirations"
                className="info-image"
              />
              <div className="info-text">
                <h2>Exclusive Collections</h2>
                <p>
                  Explore limited-edition pieces and unique designs that make
                  you stand out from the crowd.
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="info-item">
              <img
                src="images/blog/blog-3.jpg"
                alt="Exclusive Collections"
                className="info-image"
              />
              <div className="info-text">
                <h2>Style Inspirations</h2>
                <p>
                  Get inspired by styling tips and outfit ideas. Discover new
                  ways to wear your favorite pieces.
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
