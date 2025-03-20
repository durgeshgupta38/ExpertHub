import React,{useState} from "react"
import "./Signup.css"
const SignUp =()=>{
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        contact: ""
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};

        if (!/^[a-zA-Z\s]{3,}$/.test(formData.fullName)) {
            newErrors.fullName = "Full name must be at least 3 characters and contain only letters & spaces.";
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
        if (!phoneRegex.test(formData.contact)) {
            newErrors.contact = "Mobile number must be exactly 10 digits and contain only numbers.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted successfully:", formData);
        } else {
            console.log("Validation errors:", errors);
        }
    };
    return (
        <div className="container">
        <div className="signup-container">
            <h3 className="text-center">Sign Up</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName" name="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleInputChange} required />
                    {errors.fullName && <p className="text-danger">{errors.fullName}</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} required autoComplete="email"/>
                    {errors.email && <p className="text-danger">{errors.email}</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleInputChange} required autoComplete="new-password"/>
                    {errors.password && <p className="text-danger">{errors.password}</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Enter password to confirm" value={formData.confirmPassword} onChange={handleInputChange} required autoComplete="new-password"/>
                    {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="contact" className="form-label">Contact Number</label>
                    <input type="tel" className="form-control" id="contact" name="contact" placeholder="Enter your contact number" value={formData.contact} onChange={handleInputChange} required />
                    {errors.contact && <p className="text-danger">{errors.contact}</p>}
                </div>

                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </form>
            <p className="text-center mt-3">Already have an account? <a href="/login">Login</a></p>
        </div>
    </div>
  
    )
}
export default SignUp