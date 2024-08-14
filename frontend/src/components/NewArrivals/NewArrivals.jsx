// components/NewArrivals/NewArrivals.jsx
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./NewArrivals.scss";

const products = [
  {
    id: 1,
    image: "images/product/product-1.jpg",
    label: "New",
    title: "Piqué Biker Jacket",
    price: "$67.24",
    rating: 3,
  },
  {
    id: 2,
    image: "images/product/product-2.jpg",
    title: "Piqué Biker Jacket",
    price: "$67.24",
    rating: 2,
  },
  {
    id: 3,
    image: "images/product/product-3.jpg",
    label: "Sale",
    title: "Multi-pocket Chest Bag",
    price: "$43.48",
    rating: 4,
  },
  {
    id: 4,
    image: "images/product/product-4.jpg",
    label: "Sale",
    title: "Multi-pocket Chest Bag",
    price: "$43.48",
    rating: 4,
  },
  {
    id: 5,
    image: "images/product/product-5.jpg",
    label: "New",
    title: "Piqué Biker Jacket",
    price: "$67.24",
    rating: 3,
  },
  {
    id: 6,
    image: "images/product/product-6.jpg",
    title: "Piqué Biker Jacket",
    price: "$67.24",
    rating: 4,
  },
  {
    id: 7,
    image: "images/product/product-7.jpg",
    label: "Sale",
    title: "Multi-pocket Chest Bag",
    price: "$43.48",
    rating: 4,
  },
  {
    id: 8,
    image: "images/product/product-8.jpg",
    label: "Sale",
    title: "Multi-pocket Chest Bag",
    price: "$43.48",
    rating: 4,
  },
];

const NewArrivals = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProducts = products.filter((product) => {
    if (activeFilter === "*") return true;
    if (activeFilter === ".new-arrivals") return product.label === "New";
    if (activeFilter === ".hot-sales") return product.label === "Sale";
    return false;
  });

  return (
    <div className="product">
      <div className="container py-6">
        <Row>
          <Col lg={12}>
            <ul className="filter__controls">
              <li
                className={activeFilter === "*" ? "active" : ""}
                onClick={() => handleFilterClick("*")}
              >
                Best Sellers
              </li>
              <li
                className={activeFilter === ".new-arrivals" ? "active" : ""}
                onClick={() => handleFilterClick(".new-arrivals")}
              >
                New Arrivals
              </li>
              <li
                className={activeFilter === ".hot-sales" ? "active" : ""}
                onClick={() => handleFilterClick(".hot-sales")}
              >
                Hot Sales
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="product__filter">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`col-lg-3 col-md-6 col-sm-6 mix ${
                product.label === "New" ? "new-arrivals" : "hot-sales"
              }`}
            >
              <div className={`product__item ${product.label ? "sale" : ""}`}>
                <div
                  className="product__item__pic set-bg"
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  {product.label && (
                    <span className="label">{product.label}</span>
                  )}
                  <ul className="product__hover">
                    <li>
                      <a href="#">
                        <img src="images/icons/heart.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>{product.title}</h6>
                  <a href="#" className="add-cart">
                    + Add To Cart
                  </a>
                  <div className="rating">
                    {[...Array(5)].map((_, index) => (
                      <i
                        key={index}
                        className={`bi ${
                          index < product.rating ? "bi-star-fill" : "bi-star"
                        }`}
                      ></i>
                    ))}
                  </div>
                  <h5>{product.price}</h5>
                </div>
              </div>
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default NewArrivals;
