import { useState, useEffect } from "react";
import axios from "axios";
import "../admin.css"; // Import the custom CSS file

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the backend
  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="d-flex">
      <div className="content">
        <div className="container-fluid">
          <h1 className="mt-4"> Products</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product) => (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>
                      <img src={product.image} alt={product.title} width="50" />
                    </td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.rating}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No products found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
