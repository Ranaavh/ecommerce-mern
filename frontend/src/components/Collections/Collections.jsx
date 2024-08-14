import "./Collections.scss";
import { Row, Col } from "react-bootstrap";

const collectionItems = [
  {
    imgSrc: "images/banner/banner-1.jpg",
    title: "Clothing Collections 2030",
    link: "#",
    colClass: "banner__item--first",
  },
  {
    imgSrc: "images/banner/banner-2.jpg",
    title: "Accessories",
    link: "#",
    colClass: "banner__item--middle",
  },
  {
    imgSrc: "images/banner/banner-3.jpg",
    title: "Shoes Spring 2030",
    link: "#",
    colClass: "banner__item--last",
  },
];

const Collections = () => {
  return (
    <div className="banner">
      <div className="container">
        <Row>
          {collectionItems.map((item, index) => (
            <Col sm={12} md={4} lg={4} key={index}>
              <div className={`banner__item ${item.colClass}`}>
                <div className="banner__item__pic">
                  <img src={item.imgSrc} alt={item.title} />
                </div>
                <div className="banner__item__text">
                  <h2>{item.title}</h2>
                  <a href={item.link}>Shop now</a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Collections;
