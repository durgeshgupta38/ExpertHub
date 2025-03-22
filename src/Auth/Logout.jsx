import { useAuth } from "../ContextApi/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    // navigate("/login");
  };

  return <Link className="nav-link" to="/login" onClick={handleLogout}>Logout</Link>
};

export default LogoutButton;
