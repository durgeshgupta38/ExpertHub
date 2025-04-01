import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef } from "react";
import { Suspense } from "react";
import { ToastContainer, Zoom } from "react-toastify";
import { Route, BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import NavBar from "./ComponentReuse/Navbar/Navbar";
import Breadcrumbs from "./ComponentReuse/Breadcrumb/Breadcum";
import Footer from "./ComponentReuse/Footer/Footer";
import routes from "./Routes/routesConfig";
import Loader from "./ComponentReuse/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "./Redux/Slices/userSlice";
import { CommonToast } from "./ComponentReuse/Loader/commonToast";
import useWindowScrollToTop from "./CustomHook/useWindowScrollToTop";
// import SidePanel from "./RoleBaseModule/AdminModule/admin/SidePanel";

function App() {
  useWindowScrollToTop()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user); // Get user state from Redux
  const accessToken = localStorage.getItem("accessToken");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");

  const logoutoutRef = useRef({
    isLoggedIn: localStorage.getItem("isLoggedIn"),
    role: localStorage.getItem("role"),
    accessToken: localStorage.getItem("accessToken")
  });

  // Update the ref when user state changes (like after login)
  useEffect(() => {
    logoutoutRef.current = {
      isLoggedIn: localStorage.getItem("isLoggedIn"),
      role: localStorage.getItem("role"),
      accessToken: localStorage.getItem("accessToken")
    };
  }, [user]); // Update when Redux user state changes

  const checkForUnauthorizedChanges = async () => {
    // Only check if user is logged in
    if (logoutoutRef.current.isLoggedIn === "true") {
      const currentIsLoggedIn = localStorage.getItem("isLoggedIn");
      const currentRole = localStorage.getItem("role");
      const currentAccessToken = localStorage.getItem("accessToken");
      // Check if any critical values have changed
      if (currentIsLoggedIn !== "true" || 
          currentRole !== logoutoutRef.current.role || 
          currentAccessToken !== logoutoutRef.current.accessToken) {
        try {
         let result= await dispatch(logoutUser()).unwrap();
         console.log(result,"yyyyyyyyyyyyyyy")
          CommonToast("error", "Session invalidated due to unauthorized changes");
          navigate("/login");
        } catch (error) {
          CommonToast("error", error || "Logout failed. Please try again.");
        }
      }    
    }
  };

  useEffect(() => {
    // Check for changes on user interaction
    const events = ["click", "keypress", "mousemove", "scroll"];
    
    const eventListeners = events.map(event => {
      const handler = () => checkForUnauthorizedChanges();
      window.addEventListener(event, handler);
      return { event, handler };
    });

    // Also check periodically (every 5 seconds) in case of programmatic changes
    // const intervalId = setInterval(checkForUnauthorizedChanges, 5000);

    return () => {
      eventListeners.forEach(({ event, handler }) => {
        window.removeEventListener(event, handler);
      });
      // clearInterval(intervalId);
    };
  }, [dispatch, navigate]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Zoom}
      />
      {role!=="admin" &&
      <>
      <NavBar />
      <Breadcrumbs />
      </>}
      
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map(({ path, element, children }, index) => (
            <Route key={index} path={path} element={element}>
              {children &&
                children.map((child, childIndex) => (
                  <Route
                    key={childIndex}
                    index={child.index}
                    path={child.path}
                    element={child.element}
                  />
                ))}
            </Route>
          ))}
        </Routes>
      </Suspense>
      {role!=="admin" && <Footer />}
      
    </>
  );
}

export default App;
