import { Outlet,Navigate } from "react-router-dom";
import { useAuth } from "../../ContextApi/AuthContext"; // Import auth context
import { toast, Zoom } from "react-toastify";
import { useEffect, useRef } from "react";
import {CommonToast} from "../../ComponentReuse/Loader/commonToast";

const PrivateRoute = ({ children }) => {
let isLoggedIn=localStorage.getItem("isLoggedIn")

const toastShown = useRef(false);
  useEffect(() => {
    if (!isLoggedIn && !toastShown.current) {
      CommonToast("warning","Please login to book Service(s)")
      toastShown.current = true;
    }
  }, [isLoggedIn]);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
