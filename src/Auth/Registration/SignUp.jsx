import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../../ApiServices/CommonApi/api";
import "./Signup.css"
const SignUp = () => {
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobile: ""
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};

        if (!/^[a-zA-Z\s]{3,}$/.test(formData.name)) {
            newErrors.name = "Full name must be at least 3 characters and contain only letters & spaces.";
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            newErrors.password = "Password must be at least 8 characters, include a letter, number, and special character.";
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.mobile)) {
            newErrors.mobile = "Mobile number must be exactly 10 digits and contain only numbers.";
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

        try {
            const { confirmPassword, ...userData } = formData;
            const response = await apiRequest("users/register", "POST", userData);
            if(response.success){
                navigate("/login")
            }else {
                alert("Signup failed: " + response.message);
            }
        } catch (error) {
            alert("Error: " + error.message);
        }

    };
    return (
        <div className="container">
            <div className="signup-container">
                <h3 className="text-center">Sign Up</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleInputChange} required />
                        {errors.name && <p className="text-danger">{errors.name}</p>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} required autoComplete="email" />
                        {errors.email && <p className="text-danger">{errors.email}</p>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleInputChange} required autoComplete="new-password" />
                        {errors.password && <p className="text-danger">{errors.password}</p>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Enter password to confirm" value={formData.confirmPassword} onChange={handleInputChange} required autoComplete="new-password" />
                        {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">Contact Number</label>
                        <input type="tel" className="form-control" id="mobile" name="mobile" placeholder="Enter your mobile number" value={formData.mobile} onChange={handleInputChange} required />
                        {errors.mobile && <p className="text-danger">{errors.mobile}</p>}
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                </form>
                <p className="text-center mt-3">Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>

    )
}
export default SignUp