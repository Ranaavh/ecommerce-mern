import { Link } from "react-router-dom";
import "../admin.css"; // Import the custom CSS file

const Sidebar = () => {
  return (
    <div className="bg-light border-right sidebar-wrapper">
      <div className="sidebar-heading">Admin Dashboard</div>
      <div className="list-group list-group-flush">
        <Link
          to="/admin/dashboard"
          className="list-group-item list-group-item-action sidebar-link"
        >
          Dashboard
        </Link>
        <Link
          to="/admin/products"
          className="list-group-item list-group-item-action sidebar-link"
        >
          Manage Products
        </Link>
        <Link
          to="/admin/add-product"
          className="list-group-item list-group-item-action sidebar-link"
        >
          Add Product
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
