import { lazy } from "react";
import Unauthorized from "../ComponentReuse/Misceleneous/UnAuthorized";
import EditAccount from "../RoleBaseModule/UserModule/Account/EditAccount";
import AgentDescriptionPage from "../RoleBaseModule/UserModule/Agent/AgentDescriptionPage";
import PaymentOptions from "../RoleBaseModule/UserModule/Payment/PaymentOptions";
import NotFound from "../ComponentReuse/Misceleneous/Notfound";  
import ReviewAndComplete from "../RoleBaseModule/UserModule/Booking/ReviewAndComplete"
import UserManagement from "../RoleBaseModule/AdminModule/admin/UserManagement";
import AdminDashboard from "../RoleBaseModule/AdminModule/admin/AdminDashboard";

const Home = lazy(() => import("../RoleBaseModule/UserModule/Dashboard/Home"));
const SignUp = lazy(() => import("../Auth/Registration/SignUp"));
const Login = lazy(() => import("../Auth/Login/Login"));  
const AgentDashboard = lazy(() => import("../RoleBaseModule/AgentModule/AgentDashboard"))
// const UserDashboard = lazy(() => import("./pages/UserDashboard"))
const ExpertList = lazy(() => import("../RoleBaseModule/UserModule/Agent/ExpertList"))
// const AdminLayout = lazy(() => import("../RoleBaseModule/AdminModule/AdminLayout"))
const PrivateRoute = lazy(() => import("./Protected/PrivateRoute"))
const RoleBasedRoute = lazy(() => import("./RoleBased/RoleBasedRoute"))
const TabBar = lazy(() => import("../RoleBaseModule/UserModule/Account/TabBar"))
const ForgetPassword = lazy(() => import("../Auth/ForgotAuth/ForgetPassword"))

const routes = [
  { path: "/", element: <Home /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/unauthorized", element: <Unauthorized /> },
  { path: "/forgetPassword", element: <ForgetPassword /> },

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
  { path: "/account/edit",
     element: <PrivateRoute />,
     children: [
      { index: true, element: <EditAccount /> },

    ],  
  },

  {
    path: "/profile",
    element: <PrivateRoute />,
    children: [
      { index: true, element: <TabBar /> },
    ],
  },
  { path: "/review",
    element: <PrivateRoute />,
    children: [
     { index: true, element:  <ReviewAndComplete/> },
   ],  
 },

  // Role-based routes
  {
    path: "/user",
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
    children: [{ index: true, element: <AdminDashboard /> },
      { path: "usermanagement", element: <UserManagement /> },
      // { path: "paymentoptions", element: <PaymentOptions /> }
    ],
  },
  { path: "*", element: <NotFound /> },
];

export default routes;
