import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  // If user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default PrivateRoute;
