import { Navigate,Outlet } from "react-router-dom";
const RoleBasedRoute = ({ allowedRoles }) => {
let isLoggedIn=localStorage.getItem("isLoggedIn")
let role=localStorage.getItem("roles");


  if (!isLoggedIn) return <Navigate to="/login" />;
  if (!allowedRoles.includes(role)) return <Navigate to="/unauthorized" />;

  return <Outlet />;
};

export default RoleBasedRoute;
