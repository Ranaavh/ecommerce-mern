import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../admin.css"; // Import the custom CSS file

const AddProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    image: "",
    title: "",
    price: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/products", product)
      .then(() => alert("Product added"))
      .catch((error) => console.error("Error adding product:", error));
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="content">
        <Header />
        <div className="container-fluid">
          <h1 className="mt-4">Add Product</h1>
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
              <label htmlFor="id">ID</label>
              <input
                type="number"
                id="id"
                name="id"
                className="form-control"
                placeholder="ID"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image URL</label>
              <input
                type="text"
                id="image"
                name="image"
                value={product.image}
                className="form-control"
                placeholder="Image URL"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-control"
                placeholder="Title"
                value={product.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                name="price"
                className="form-control"
                placeholder="Price"
                value={product.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={product.rating}
                className="form-control"
                placeholder="Rating"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
