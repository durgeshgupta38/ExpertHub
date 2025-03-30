import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './SidePanel.css';

const SidePanel = () => {
    const location = useLocation();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { user } = useSelector((state) => state.user);

    const menuItems = [
        {
            title: 'Dashboard',
            icon: 'fas fa-home',
            path: '/admin/dashboard',
            badge: null
        },
        {
            title: 'Users',
            icon: 'fas fa-users',
            path: '/admin/users',
            badge: null
        },
        {
            title: 'Agents',
            icon: 'fas fa-user-tie',
            path: '/admin/agents',
            badge: '12'
        },
        {
            title: 'Bookings',
            icon: 'fas fa-calendar-check',
            path: '/admin/bookings',
            badge: '5'
        },
        {
            title: 'Reports',
            icon: 'fas fa-chart-bar',
            path: '/admin/reports',
            badge: null
        },
        {
            title: 'Settings',
            icon: 'fas fa-cog',
            path: '/admin/settings',
            badge: null
        },
        {
            title: 'Notifications',
            icon: 'fas fa-bell',
            path: '/admin/notifications',
            badge: '3'
        }
    ];

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`side-panel ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="panel-header">
                <div className="logo-container">
                    <img src="/logo.png" alt="Logo" className="logo" />
                    <span className="logo-text">Admin Panel</span>
                </div>
                <button className="collapse-btn" onClick={toggleCollapse}>
                    <i className={`fas ${isCollapsed ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
                </button>
            </div>

            <div className="user-profile">
                <div className="profile-image">
                    <img src={user?.avatar || '/default-avatar.png'} alt="Profile" />
                </div>
                <div className="profile-info">
                    <h3>{user?.name || 'Admin User'}</h3>
                    <p>{user?.role || 'Administrator'}</p>
                </div>
            </div>

            <nav className="panel-nav">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                    >
                        <i className={item.icon}></i>
                        <span className="nav-text">{item.title}</span>
                        {item.badge && (
                            <span className="nav-badge">{item.badge}</span>
                        )}
                    </Link>
                ))}
            </nav>

            <div className="panel-footer">
                <Link to="/admin/profile" className="footer-item">
                    <i className="fas fa-user"></i>
                    <span className="nav-text">My Profile</span>
                </Link>
                <Link to="/logout" className="footer-item">
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="nav-text">Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default SidePanel; 