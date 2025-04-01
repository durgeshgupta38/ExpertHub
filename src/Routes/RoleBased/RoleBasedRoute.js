import { useEffect, useRef } from "react";
import { Navigate,Outlet } from "react-router-dom";
import { CommonToast } from "../../ComponentReuse/Loader/commonToast";
const RoleBasedRoute = ({ allowedRoles }) => {
let isLoggedIn=localStorage.getItem("isLoggedIn")
let role=localStorage.getItem("role");
const toastShown = useRef(false);
  useEffect(() => {
    if (!isLoggedIn && !toastShown.current) {
      CommonToast("warning","Please login to continue")
      toastShown.current = true;
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) return <Navigate to="/login" />;
  if (!allowedRoles.includes(role)) return <Navigate to="/unauthorized" />;

  return <Outlet />;
};

export default RoleBasedRoute;
