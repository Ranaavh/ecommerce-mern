import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import "../admin.css"; // Import the custom CSS file

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

const handleLogout = () => {
  // Clear token and email from localStorage
  localStorage.removeItem("token");
  localStorage.removeItem("email");

  // Dispatch the logout action to update Redux state
  dispatch(logout());

  // Wait for state to be updated before navigating
  navigate("/admin/login", { replace: true });
};

  return (
    <nav className="navbar navbar-light bg-light border-bottom shadow-sm">
      <div className="container">
        <button
          className="btn btn-outline-danger container-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;
