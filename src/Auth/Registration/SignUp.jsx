import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css"
import CommonSpinner from "../../ComponentReuse/Loader/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../Redux/Slices/userSlice";
import { toast, Zoom  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.user);
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
        const phoneRegex = /^(?:\+91)?[0-9]{10}$/;
        if (!phoneRegex.test(formData.mobile)) {
            newErrors.mobile = "Enter a valid 10-digit mobile number (with or without +91).";
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
        const { confirmPassword, ...userData } = formData;
   try {
            const result = await dispatch(signUpUser(userData)).unwrap(); // 1st and 6th unwrap the response
            console.log(result, "Signup Response");
            navigate("/login");
            toast.success("SignUp successful!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                transition: Zoom,
            });

            // 🔹 Reset Form
            setFormData({name: "",email: "",password: "",confirmPassword: "",mobile: ""});
            setErrors({});
        } catch (error) {
            console.error("Signup Error:", error);
            toast.error(error || "Signup failed. Please try again.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                transition: Zoom,
            });
        }

        // dispatch(signUpUser(userData)).then((result) => {
        //     if (result.meta.requestStatus === "fulfilled") {
        //         navigate("/login");
        //     }
        //     if (result.meta.requestStatus === "rejected") {
        //         toast.error(error, {
        //             position: "top-right",
        //             autoClose: 5000,
        //             hideProgressBar: false,
        //             closeOnClick: false,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //             theme: "colored",
        //             transition: Zoom,
        //             });
        //     }
        // });
        // setFormData({name: "",email: "",password: "",confirmPassword: "",mobile: ""});
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
                        <label htmlFor="mobile" className="form-label">Mobile Number</label>
                        <input type="tel" className="form-control" id="mobile" name="mobile" placeholder="Enter your mobile number" value={formData.mobile} onChange={handleInputChange} required />
                        {errors.mobile && <p className="text-danger">{errors.mobile}</p>}
                    </div>

                    <button type="submit" className="btn btn-primary w-100" disabled={loading}>{loading ?<CommonSpinner size="sm"/>:"Sign Up"}</button>
                </form>
                <p className="text-center mt-3">Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>

    )
}
export default SignUp