import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense } from "react";
import { ToastContainer, Zoom } from "react-toastify";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./ComponentReuse/Navbar/Navbar";
import Breadcrumbs from "./ComponentReuse/Breadcrumb/Breadcum";
import { AuthProvider } from "./ContextApi/AuthContext";
import Footer from "./ComponentReuse/Footer/Footer";
import routes from "./Routes/routesConfig";
import Loader from "./ComponentReuse/Loader/Loader";
function App() {
  // useAutoLogout();
  return (
    <AuthProvider>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={5000}
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
        {/* <AutoLogout/> */}
        <NavBar />
        <Breadcrumbs />

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