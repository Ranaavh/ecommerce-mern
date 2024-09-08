import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
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

  // Handle delete product
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios
        .delete(`/api/products/${id}`)
        .then(() => {
          alert("Product deleted");
          setProducts(products.filter((product) => product._id !== id)); // Use _id if that's what MongoDB uses
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
        });
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="content">
        <Header />
        <div className="container-fluid">
          <h1 className="mt-4">Manage Products</h1>
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
                    <td>
                      <button className="btn btn-warning btn-sm">Edit</button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(product._id)}
                      >
                        Delete
                      </button>
                    </td>
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
