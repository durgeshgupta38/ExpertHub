import { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./pages/AuthContext";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import routes from "./routesConfig";
import Breadcrumbs from "./components/Breadcum/Breadcum";
import AutoLogout from "./pages/AutoLogout";
// import useAutoLogout from "./customHooks/useAutoLogout";

function App() {
  // useAutoLogout();
  return (
    <AuthProvider>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
     {/* <AutoLogout/> */}
        <NavBar />
        {/* <Breadcrumbs/> */}
     
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
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App