import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Registration/Signup.css"
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/Slices/userSlice";
import CommonSpinner from "../../ComponentReuse/Loader/Spinner";
import "react-toastify/dist/ReactToastify.css";
import { CommonToast } from "../../ComponentReuse/Loader/commonToast";
import { useLocation } from "react-router-dom";
import { Form, InputGroup, Button } from "react-bootstrap";
const LoginWithEmail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, isLoggedIn } = useSelector((state) => state.user);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const location = useLocation();
    const redirectPath = location.state?.path || "/";
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
            return
        }
        let newformData = {
            username: formData.email,
            password: formData.password
        }

        try {
            const result = await dispatch(loginUser(newformData)).unwrap(); // Unwraps the response
            CommonToast("success", "Login successful!")
            setFormData({ email: "", password: "" });
            setErrors({});
               // 🔹 Redirect Based on Role
               if (result.user.role === "admin") navigate("/admin");
               if (result.user.role === "user") {
                if(redirectPath){
                    navigate(redirectPath)
                }else{
                    navigate("/")
                }
                
            }
               if (result.user.role === "agent") navigate("/agent");

        } catch (error) {
            CommonToast("error", error || "Login failed. Please try again.")
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
                    <Form.Group>
                        <Form.Label htmlFor="password" className="form-label">Password</Form.Label>
                        <InputGroup>
                            <Form.Control type={showPassword ? "text" : "password"} className="form-control" id="password" name="password" autoComplete="current-password" placeholder="Enter your password" value={formData.password} onChange={handleInputChange} required />
                            <Button variant="outline-secondary" className="no-hover" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? "👁️‍🗨️" : '🙈'}
                            </Button>
                        </InputGroup>
                        {errors.password && <p className="text-danger">{errors.password}</p>}
                    </Form.Group>
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>{loading && !isLoggedIn ? <CommonSpinner size="sm" /> : "Login"}</button>

            </form>
        </>
    )
}
export default LoginWithEmail;