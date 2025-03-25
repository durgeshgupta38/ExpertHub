import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const accessToken = localStorage.getItem("accessToken");
let isLoggedIn=localStorage.getItem("isLoggedIn")

    const role = localStorage.getItem("roles");
    return accessToken ? { isLoggedIn: true, role } : { isLoggedIn: false, role: null };
  });

//   const login = (token, role) => {
//     localStorage.setItem("token", token);
//     localStorage.setItem("role", role);
//     setAuth({ isLoggedIn: true, role });
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     setAuth({ isLoggedIn: false, role: null });
//   };

  return (
    <AuthContext.Provider value={{ ...auth}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
