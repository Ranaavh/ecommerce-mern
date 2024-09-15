import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// Protect admin routes
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  return user ? children : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
