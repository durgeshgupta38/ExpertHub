import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Registration/Signup.css"
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/Slices/userSlice";
import CommonSpinner from "../../ComponentReuse/Loader/Spinner";
import "react-toastify/dist/ReactToastify.css";
import { CommonToast } from "../../ComponentReuse/Loader/commonToast";

const LoginWithEmail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error,isLoggedIn } = useSelector((state) => state.user);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const validateForm = () => {
        let newErrors = {};

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            newErrors.password = "Password must be at least 8 characters, include a letter, number, and special character.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            console.log("Validation errors:", errors);
            return
        }
        let newformData = {
            username:formData.email ,
            password:formData.password
        }

        try {
            const result = await dispatch(loginUser(newformData)).unwrap(); // Unwraps the response
            console.log(result, "Login Response");

            // 🔹 Redirect Based on Role
            if (result.user.role === "admin") navigate("/admin");
            if (result.user.role === "user") navigate("/");
            if (result.user.role === "agent") navigate("/agent");
            CommonToast("success","Login successful!")

            // 🔹 Reset Form
            setFormData({ email: "", password: "" });
            setErrors({});
        } catch (error) {
            console.error("Login Error:", error);
            CommonToast("error",error || "Login failed. Please try again.")
        }
    }

    return (
        <>
            <h3 className="text-center">Login with Email</h3>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} required />
                    {errors.email && <p className="text-danger">{errors.email}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" autoComplete="current-password" placeholder="Enter your password" value={formData.password} onChange={handleInputChange} required />
                    {errors.password && <p className="text-danger">{errors.password}</p>}
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>{loading && !isLoggedIn ? <CommonSpinner size="sm" /> : "Login"}</button>

            </form>
        </>
    )
}
export default LoginWithEmail;