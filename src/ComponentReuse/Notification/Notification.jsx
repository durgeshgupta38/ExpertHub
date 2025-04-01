import React from "react";
import "./notification.css";
import { Link, useNavigate } from "react-router-dom";

const NotificationIcon = ({ count }) => {
    const navigate = useNavigate();
    return (
        <>
            <button className="nav-link notification-container" onClick={() => navigate("/user/profile?tab=notification")}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -2 24 24"
                    fill="black"
                    className="notification-icon"
                >
                    <path
                        fillRule="evenodd"
                        d="M12 2a6 6 0 00-6 6v4c0 .56-.186 1.107-.526 1.553L4 16h16l-1.474-2.447A2.5 2.5 0 0118 12V8a6 6 0 00-6-6zm-1 18a2 2 0 104 0h-4z"
                        clipRule="evenodd"
                    />
                </svg>
                {count > 0 && <span className="notification-badge">{count}</span>}
            </button>
        </>
    );
};

export default NotificationIcon;
