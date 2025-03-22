import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import { useNavigate } from "react-router-dom";

const LoginWithGoogle = () => {
    const navigate=useNavigate();
  const handleSuccess = (response) => {
    const credential = response.credential;
    const decoded = jwtDecode(credential);

    console.log("User Info:", decoded);

    // Here you can send user details to your backend for authentication
    fetch("/api/auth/google-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: decoded.email,
        name: decoded.name,
        googleId: decoded.sub,
        profilePic: decoded.picture,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Login Success:", data);
        alert("Login Successful!");
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/"); 
      })
      .catch((err) => console.error("Login Failed:", err));
  };

  const handleError = () => {
    console.log("Google Login Failed");
  };

  return (
    <div className="container text-center">
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} logo_alignment="center" theme="filled_red"/>
    </div>
  );
};

export default LoginWithGoogle;
