import { lazy } from "react";
import Unauthorized from "../ComponentReuse/Misceleneous/UnAuthorized";
import EditAccount from "../RoleBaseModule/UserModule/Account/EditAccount";
import AgentDescriptionPage from "../RoleBaseModule/UserModule/Agent/AgentDescriptionPage";
import PaymentOptions from "../RoleBaseModule/UserModule/Payment/PaymentOptions";
import NotFound from "../ComponentReuse/Misceleneous/Notfound";  
import ReviewAndComplete from "../RoleBaseModule/UserModule/Booking/ReviewAndComplete"
import UserManagement from "../RoleBaseModule/AdminModule/admin/UserManagement";
import AdminDashboard from "../RoleBaseModule/AdminModule/admin/AdminDashboard";
import HomePage from "../RoleBaseModule/UserModule/Dashboard/HomePage";
import AgentList from "../RoleBaseModule/UserModule/Agent/AgentList"
import Categories from "../RoleBaseModule/UserModule/Dashboard/Categories";
import { Navigate } from "react-router-dom";
const UserHome = lazy(() => import("../RoleBaseModule/UserModule/Dashboard/UserHome"));
const SignUp = lazy(() => import("../Auth/Registration/SignUp"));
const Login = lazy(() => import("../Auth/Login/Login"));  
const AgentDashboard = lazy(() => import("../RoleBaseModule/AgentModule/AgentDashboard"))
const PrivateRoute = lazy(() => import("./Protected/PrivateRoute"))
const RoleBasedRoute = lazy(() => import("./RoleBased/RoleBasedRoute"))
const TabBar = lazy(() => import("../RoleBaseModule/UserModule/Account/TabBar"))
const ForgetPassword = lazy(() => import("../Auth/ForgotAuth/ForgetPassword"))

const routes = [
  // Public routes
  {
    path: "/",
    element: (() => {

      const isLoggedIn = localStorage.getItem("isLoggedIn")
      const role = localStorage.getItem("role")

      if (isLoggedIn && role === "user") {
        return <Navigate to="/user" replace />;
      }
      if (isLoggedIn && role === "agent") {
        return <Navigate to="/agent" replace />;
      }
      if (isLoggedIn && role === "admin") {
        return <Navigate to="/admin" replace />;
      }
      return <HomePage />
    })(),
  },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/unauthorized", element: <Unauthorized /> },
  { path: "/forgotPassword", element: <ForgetPassword /> },

  // Private and Role-based routes
  {
    path: "/user",
    element: <RoleBasedRoute allowedRoles={["user", "admin"]} />,
    children: [
      { index: true, element: <Categories /> },
      // { path:"categories", element: <Categories /> },
      { path: "bookingdetails", element: <AgentList/> },
      { path: "bookingdetails/agentdescription", element: <AgentDescriptionPage /> },
      { path: "profile", element: <TabBar /> },
      { path: "profile/edit", element: <EditAccount /> },
      { path: "review", element: <ReviewAndComplete /> },
      { path: "paymentoptions", element: <PaymentOptions /> },
      { path: "*", element: <NotFound /> },

    ],
  },
  {
    path: "/agent",
    element: <RoleBasedRoute allowedRoles={["agent", "admin"]} />,
    children: [{ index: true, element: <AgentDashboard /> },
      { path:"profile", element: <TabBar /> },
      { path: "profile/edit", element: <EditAccount /> },
      { path: "*", element: <NotFound /> },

    ],
  },
  {
    path: "/admin",
    element: <RoleBasedRoute allowedRoles={["admin"]} />,
    children: [{ index: true, element: <AdminDashboard /> },
      { path: "usermanagement", element: <UserManagement /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];
export default routes;