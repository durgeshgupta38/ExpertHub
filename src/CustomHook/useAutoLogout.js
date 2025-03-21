import { useEffect } from "react";
import { useAuth } from "../ContextApi/AuthContext";

const AUTO_LOGOUT_TIME = 5 * 60 * 1000;

const useAutoLogout = () => {
  const { logout } = useAuth(); 

  useEffect(() => {
    let timeout;

    // Reset inactivity timer
    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        logout(); // Auto logout user after 5 minutes of inactivity
        alert("You have been logged out due to inactivity.");
      }, AUTO_LOGOUT_TIME);
    };

    // Listen for user interactions
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keypress", resetTimer);
    window.addEventListener("click", resetTimer);
    window.addEventListener("scroll", resetTimer);

    // Start timer initially
    resetTimer();

    // Cleanup event listeners when component unmounts
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keypress", resetTimer);
      window.removeEventListener("click", resetTimer);
      window.removeEventListener("scroll", resetTimer);
    };
  }, [logout]);
};

export default useAutoLogout;
