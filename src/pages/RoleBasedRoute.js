import { Navigate,Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const RoleBasedRoute = ({ allowedRoles }) => {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" />;
  if (!allowedRoles.includes(role)) return <Navigate to="/unauthorized" />;

  return <Outlet />;
};

export default RoleBasedRoute;
