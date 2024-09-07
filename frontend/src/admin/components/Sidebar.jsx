// src/admin/components/Sidebar.js
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">Admin Dashboard</div>
      <div className="list-group list-group-flush">
        <Link
          to="/admin/dashboard"
          className="list-group-item list-group-item-action bg-light"
        >
          Dashboard
        </Link>
        <Link
          to="/admin/products"
          className="list-group-item list-group-item-action bg-light"
        >
          Manage Products
        </Link>
        <Link
          to="/admin/add-product"
          className="list-group-item list-group-item-action bg-light"
        >
          Add Product
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
