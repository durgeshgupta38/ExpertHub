import React, { useState } from "react"
import { Link } from "react-router-dom";

import LoginWithOTP from "./LoginWithOTP";
import LoginWithEmail from "./LoginWithEmail";
import LoginWithGoogle from "./LoginWithGoogle";
const Login = () => {
    const [{ otp, google }, setLoginMethods] = useState({ otp: false, google: false });

    const handleLoginMethod = (method) => {
        if (method === "otp") {
            setLoginMethods({ otp: true, google: false });
        } else if (method === "google") {
            setLoginMethods({ otp: false, google: true });
        } else {
            setLoginMethods({ otp: false, google: false });
        }
    }

    return (
        <>
            <div className="container">
                <div className="login-container">
                    {otp && <LoginWithOTP />}
                    {!otp && !google && <LoginWithEmail />}

                    <p className="text-center mt-3"> OR </p>
                    {otp && (
                        <>
                        <LoginWithGoogle />
                            <button type="button" onClick={() => handleLoginMethod("email")} className="btn btn-primary w-100 mt-1">
                                Login with Email
                            </button>
                        </>
                    )}

                    {google && (
                        <>
                            <button type="button" onClick={() => handleLoginMethod("otp")} className="btn btn-success w-100">
                                Login with OTP
                            </button>
                            <button type="button" onClick={() => handleLoginMethod("email")} className="btn btn-primary w-100 mt-1">
                                Login with Email
                            </button>
                        </>
                    )}

                    {!otp && !google && (
                        <>
                        <LoginWithGoogle />
                            <button type="button" onClick={() => handleLoginMethod("otp")} className="btn btn-success w-100 mt-1">
                                Login with OTP
                            </button>
                        </>
                    )}

                    <p className="text-center mt-3 mb-1">Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    <p className="text-center">Forgot Password? <Link to="/forgetPassword">Forgot Password</Link></p>

                </div>
            </div>

        </>
    )
}
export default Login