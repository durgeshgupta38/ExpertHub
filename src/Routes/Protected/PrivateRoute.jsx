import { Outlet,Navigate,useLocation  } from "react-router-dom";
import { useEffect, useRef } from "react";
import {CommonToast} from "../../ComponentReuse/Loader/commonToast";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
let isLoggedIn=localStorage.getItem("isLoggedIn")

const toastShown = useRef(false);
  useEffect(() => {
    if (!isLoggedIn && !toastShown.current) {
      CommonToast("warning","Please login to continue")
      toastShown.current = true;
    }
  }, [isLoggedIn]);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" state={{ path: location.pathname }} replace />;
};

export default PrivateRoute;
