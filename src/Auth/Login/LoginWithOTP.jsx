import React, { useState, useEffect } from "react";
import { apiRequest } from "../../ApiServices/CommonApi/api";

const LoginWithOTP = () => {
    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [timer, setTimer] = useState(60); // Countdown for resend OTP
    const [resendDisabled, setResendDisabled] = useState(true);

    // Start countdown when OTP is sent
    useEffect(() => {
        if (otpSent && timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else if (timer === 0) {
            setResendDisabled(false);
        }
    }, [otpSent, timer]);

    // Send OTP function
    const sendOTP = async () => {
        if (!/^[0-9]{10}$/.test(mobile)) {
            setError("Enter a valid 10-digit mobile number.");
            return;
        }
        setError("");
        setLoading(true);

        try {
            const response = await apiRequest("/send-otp", "POST", { mobile });
            if (response.success) {
                setOtpSent(true);
                setResendDisabled(true);
                setTimer(60); // Reset timer
                alert("OTP sent to your mobile!");
            } else {
                setError(response.message || "Failed to send OTP.");
            }
        } catch (err) {
            setError("Error sending OTP.");
        } finally {
            setLoading(false);
        }
    };

    // Resend OTP function
    const resendOTP = () => {
        sendOTP();
    };

    // Verify OTP function
    const verifyOTP = async () => {
        if (!otp) {
            setError("Please enter OTP.");
            return;
        }
        setError("");
        setLoading(true);

        try {
            const response = await apiRequest("/verify-otp", "POST", { mobile, otp });
            if (response.success) {
                alert("Login successful!");
                localStorage.setItem("token", response.data.token);
                window.location.href = "/dashboard"; // Redirect after login
            } else {
                setError(response.message || "Invalid OTP.");
            }
        } catch (err) {
            setError("Error verifying OTP.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
                <h3 className="text-center">Login with OTP</h3>
                {/* Mobile Number Input */}
                <div className="mb-3">
                    <label className="form-label">Mobile Number</label>
                    <input 
                        type="tel"
                        className="form-control"
                        placeholder="Enter mobile number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        disabled={otpSent}
                    />
                </div>

                {/* Send OTP Button */}
                {!otpSent && (
                    <button className="btn btn-primary w-100" onClick={sendOTP} disabled={loading}>
                        {loading ? "Sending..." : "Send OTP"}
                    </button>
                )}

                {/* OTP Input & Verify Button */}
                {otpSent && (
                    <>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Enter OTP</label>
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-success w-100" onClick={verifyOTP} disabled={loading}>
                            {loading ? "Verifying..." : "Verify OTP"}
                        </button>

                        {/* Resend OTP Button with Timer */}
                        <div className="text-center mt-3">
                            {resendDisabled ? (
                                <p className="text-muted">Resend OTP in {timer}s</p>
                            ) : (
                                <button className="btn btn-link" onClick={resendOTP}>
                                    Resend OTP
                                </button>
                            )}
                        </div>
                    </>
                )}

                {/* Error Message */}
                {error && <p className="text-danger text-center mt-2">{error}</p>}
    </>
    );
};

export default LoginWithOTP;
