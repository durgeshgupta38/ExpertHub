import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
const AutoLogout = () => {
     const { logout } = useAuth(); 
    
  const navigate = useNavigate();
  const timeoutRef = useRef(null); // To store the timeout ID

  const logoutUser = () => {
    clearTimeout(timeoutRef.current);
    logout(); 
    alert("You have been logged out due to inactivity.");
    // Perform logout logic here, such as clearing tokens or session storage
    navigate("/login");
  };

  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear the existing timeout
    }
    // Set a new timeout for 5 minutes (5 * 60 * 1000 milliseconds)
    timeoutRef.current = setTimeout(logoutUser, 1 * 60 * 500);
  };

  useEffect(() => {
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keypress", resetTimer);
    window.addEventListener("click", resetTimer);
    window.addEventListener("scroll", resetTimer);

    // Start the initial timer
    resetTimer();

    // Clean up event listeners and timeout on component unmount
    return () => {
      clearTimeout(timeoutRef.current);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keypress", resetTimer);
      window.removeEventListener("click", resetTimer);
      window.addEventListener("scroll", resetTimer);

    };
  }, []);

  return
};

export default AutoLogout;
