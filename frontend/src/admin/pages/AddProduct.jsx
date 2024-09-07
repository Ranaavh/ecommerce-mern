// src/admin/pages/AddProduct.js
import  { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({ name: "", price: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle product submission here
  };

  return (
    <div className="container-fluid">
      <h1 className="mt-4">Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Price</label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
