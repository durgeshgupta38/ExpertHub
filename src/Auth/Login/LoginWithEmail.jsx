import React,{useState} from "react";
import { useAuth } from "../../ContextApi/AuthContext";
import { useNavigate } from "react-router-dom";
import "../Registration/Signup.css"
const LoginWithEmail = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const userDatabase = {
            "user@example.com": { password: "user123", role: "user" },
            "agent@example.com": { password: "agent123", role: "agent" },
            "admin@example.com": { password: "admin123", role: "admin" },
        };

        if (userDatabase[email] && userDatabase[email].password === password) {
            const role = userDatabase[email].role;
            login("fake-token", role); // Store token and role

            // 🔹 Redirect based on role
            if (role === "admin") navigate("/admin");
            if (role === "user") navigate("/");
            if (role === "agent") navigate("/agent");
        } else {
            alert("Invalid credentials. Please try again.");
        }
    };
    return (
        <>
            <h3 className="text-center">Login with Email</h3>

            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" value={email}
                        onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" autoComplete="current-password" placeholder="Enter your password" value={password}
                        onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login </button>

            </form>
        </>
    )
}
export default LoginWithEmail;