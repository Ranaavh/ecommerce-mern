import { useState, useEffect } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./NewArrivals.scss";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("*");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products"); // Adjust the URL to your backend endpoint
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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
