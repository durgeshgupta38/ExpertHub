import { lazy } from "react";
import Unauthorized from "./pages/UnAuthorized";
import EditAccount from "./pages/EditAccount";
import AgentDescriptionPage from "./pages/AgentDescriptionPage";
import PaymentOptions from "./pages/PaymentOptions";
import NotFound from "./pages/Notfound";
import ReviewAndComplete from "./pages/ReviewAndComplete";
const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const AgentDashboard = lazy(() => import("./pages/AgentDashboard"))
// const UserDashboard = lazy(() => import("./pages/UserDashboard"))
const ExpertList = lazy(() => import("./pages/ExpertList"))
const AdminPanel = lazy(() => import("./pages/AdminPanel"))
const PrivateRoute = lazy(() => import("./pages/PrivateRoute"))
const RoleBasedRoute = lazy(() => import("./pages/RoleBasedRoute"))
const TabBar = lazy(() => import("./pages/TabBar"))
const ForgetPassword = lazy(() => import("./pages/ForgetPassword"))


const routes = [
  // { path: "/", element: <Home /> },
  { path: "/profile", element: <TabBar /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/unauthorized", element: <Unauthorized /> },
  { path: "/shop/:id", element: <Product /> },
  { path: "/cart", element: <Cart /> },
  { path: "/account/edit", element: <EditAccount /> },
  { path: "/forgetPassword", element: <ForgetPassword /> },
  { path: "/review", element: <ReviewAndComplete/> },


  // Private routes (Require authentication)
  {
    path: "/experts",
    element: <PrivateRoute />,
    children: [
      { index: true, element: <Home /> },
      { path: ":id", element: <ExpertList /> },
      { path: ":id/agentlist", element: <AgentDescriptionPage /> },
      { path: "paymentoptions", element: <PaymentOptions /> },

    ],
  },

  // Role-based routes
  {
    path: "/",
    element: <RoleBasedRoute allowedRoles={["user", "admin"]} />,
    children: [{ index: true, element: <Home /> }],
    // children: [{ index: true, element: <UserDashboard /> }],
  },
  {
    path: "/agent",
    element: <RoleBasedRoute allowedRoles={["agent", "admin"]} />,
    children: [{ index: true, element: <AgentDashboard /> }],
  },
  {
    path: "/admin",
    element: <RoleBasedRoute allowedRoles={["admin"]} />,
    children: [{ index: true, element: <AdminPanel /> }],
  },
  { path: "*", element: <NotFound /> },
];

export default routes;






























































// import { lazy, Suspense } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./pages/AuthContext";
// import PrivateRoute from "./pages/PrivateRoute";
// import NavBar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import Loader from "./components/Loader/Loader";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import RoleBasedRoute from "./pages/RoleBasedRoute";
// import AdminPanel from "./pages/AdminPanel";
// import Unauthorized from "./pages/UnAuthorized";
// import ExpertList from "./pages/ExpertList";
// const Home = lazy(() => import("./pages/Home"));
// // const Shop = lazy(() => import("./pages/Shop"));
// const Cart = lazy(() => import("./pages/Cart"));
// const Product = lazy(() => import("./pages/Product"));
// const SignUp = lazy(() => import("./pages/SignUp"));
// const Login = lazy(() => import("./pages/Login"));
// const AgentDashboard = lazy(() => import("./pages/AgentDashboard"))
// const UserDashboard = lazy(() => import("./pages/UserDashboard"))




// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <ToastContainer
//           position="top-right"
//           autoClose={1500}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="light"
//         />
//         <NavBar />
//         <Suspense fallback={<Loader />}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/unauthorized" element={<Unauthorized />} />
//           <Route path="/shop/:id" element={<Product />} />

//           <Route path="/experts" element={<PrivateRoute />}>
//             <Route index element={<Home />} />
//             <Route path=":id" element={<ExpertList/>} />
//             {/* <Route path="settings" element={<Settings />} /> */}
//           </Route>

//           {/* User Routes (Accessible by "user" and "admin") */}
//           <Route element={<RoleBasedRoute allowedRoles={["user", "admin"]} />}>
//             <Route path="/user" element={<Home/>} />
//             {/* <Route path="/profile" element={<UserProfile />} /> */}
//           </Route>

//           {/* Agent Routes (Accessible by "Agent" and "admin") */}
//           <Route element={<RoleBasedRoute allowedRoles={["agent", "admin"]} />}>
//             <Route path="/agent" element={<AgentDashboard />} />
//           </Route>

//            {/* Admin-Only Route */}
//            <Route element={<RoleBasedRoute allowedRoles={["admin"]} />}>
//             <Route path="/admin" element={<AdminPanel />} />
//           </Route>

//           <Route path="/cart" element={<Cart />} />
//         </Routes>
//        </Suspense>

//         <Footer />
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;