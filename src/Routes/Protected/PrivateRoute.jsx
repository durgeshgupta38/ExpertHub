import { Outlet,Navigate } from "react-router-dom";
import { useAuth } from "../../ContextApi/AuthContext"; // Import auth context
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  !isAuthenticated && toast.info("Please login to book a service");

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
