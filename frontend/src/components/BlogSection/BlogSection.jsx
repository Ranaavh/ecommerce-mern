
import { Container, Row, Col } from "react-bootstrap";
import "./BlogSection.scss";

const blogItems = [
  {
    id: 1,
    image: "images/blog/blog-1.jpg",
    alt: "Latest Fashion Trends",
    title: "Discover the Latest Trends",
    description:
      "Stay ahead with our curated collection of the latest trends and seasonal must-haves.",
  },
  {
    id: 2,
    image: "images/blog/blog-2.jpg",
    alt: "Style Inspirations",
    title: "Exclusive Collections",
    description:
      "Explore limited-edition pieces and unique designs that make you stand out from the crowd.",
  },
  {
    id: 3,
    image: "images/blog/blog-3.jpg",
    alt: "Exclusive Collections",
    title: "Style Inspirations",
    description:
      "Get inspired by styling tips and outfit ideas. Discover new ways to wear your favorite pieces.",
  },
];

const BlogSection = () => {
  return (
    <section className="info-section">
      <Container>
        <Row>
          {blogItems.map((item) => (
            <Col lg={4} md={12} key={item.id}>
              <div className="info-item">
                <img src={item.image} alt={item.alt} className="info-image" />
                <div className="info-text">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <button>Read More</button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
