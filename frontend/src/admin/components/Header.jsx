import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/admin/login"); // Redirect to login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <button className="btn btn-primary" id="menu-toggle">
        Toggle Menu
      </button>
      <div className="ml-auto">
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;
