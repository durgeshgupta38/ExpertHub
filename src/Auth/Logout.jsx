import { useAuth } from "../ContextApi/AuthContext";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login page after logout
  };

  return <button onClick={handleLogout}>Sign Out</button>;
};

export default LogoutButton;
