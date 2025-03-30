import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SidePanel from './SidePanel';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalAgents: 0,
        totalBookings: 0,
        totalRevenue: 0,
        pendingApprovals: 0,
        activeUsers: 0
    });

    const [recentActivities, setRecentActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch dashboard data
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            // TODO: Replace with actual API calls
            // Simulated data for now
            setStats({
                totalUsers: 150,
                totalAgents: 45,
                totalBookings: 320,
                totalRevenue: 25000,
                pendingApprovals: 12,
                activeUsers: 89
            });

            setRecentActivities([
                {
                    id: 1,
                    type: 'user_registration',
                    message: 'New user registration: John Doe',
                    timestamp: '2024-03-30T10:30:00'
                },
                {
                    id: 2,
                    type: 'booking',
                    message: 'New booking created: #12345',
                    timestamp: '2024-03-30T09:15:00'
                },
                {
                    id: 3,
                    type: 'agent_approval',
                    message: 'Agent approval pending: ABC Company',
                    timestamp: '2024-03-30T08:45:00'
                }
            ]);

            setLoading(false);
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
            setLoading(false);
        }
    };

    const StatCard = ({ title, value, icon, color }) => (
        <div className="stat-card" style={{ borderLeft: `4px solid ${color}` }}>
            <div className="stat-icon" style={{ backgroundColor: color }}>
                <i className={icon}></i>
            </div>
            <div className="stat-content">
                <h3>{title}</h3>
                <p>{value}</p>
            </div>
        </div>
    );

    const QuickAction = ({ title, icon, link, color }) => (
        <Link to={link} className="quick-action" style={{ backgroundColor: color }}>
            <i className={icon}></i>
            <span>{title}</span>
        </Link>
    );

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="admin-layout">
            <div className="admin-content">
                <div className="admin-dashboard">
                    <div className="dashboard-header">
                        <h1>Admin Dashboard</h1>
                        <div className="date-filter">
                            <select defaultValue="today">
                                <option value="today">Today</option>
                                <option value="week">This Week</option>
                                <option value="month">This Month</option>
                                <option value="year">This Year</option>
                            </select>
                        </div>
                    </div>

                    <div className="stats-grid">
                        <StatCard
                            title="Total Users"
                            value={stats.totalUsers}
                            icon="fas fa-users"
                            color="#4CAF50"
                        />
                        <StatCard
                            title="Total Agents"
                            value={stats.totalAgents}
                            icon="fas fa-user-tie"
                            color="#2196F3"
                        />
                        <StatCard
                            title="Total Bookings"
                            value={stats.totalBookings}
                            icon="fas fa-calendar-check"
                            color="#FF9800"
                        />
                        <StatCard
                            title="Total Revenue"
                            value={`$${stats.totalRevenue.toLocaleString()}`}
                            icon="fas fa-dollar-sign"
                            color="#9C27B0"
                        />
                        <StatCard
                            title="Pending Approvals"
                            value={stats.pendingApprovals}
                            icon="fas fa-clock"
                            color="#F44336"
                        />
                        <StatCard
                            title="Active Users"
                            value={stats.activeUsers}
                            icon="fas fa-user-check"
                            color="#00BCD4"
                        />
                    </div>

                    <div className="dashboard-content">
                        <div className="quick-actions">
                            <h2>Quick Actions</h2>
                            <div className="quick-actions-grid">
                                <QuickAction
                                    title="Manage Users"
                                    icon="fas fa-users-cog"
                                    link="/admin/users"
                                    color="#4CAF50"
                                />
                                <QuickAction
                                    title="Manage Agents"
                                    icon="fas fa-user-tie"
                                    link="/admin/agents"
                                    color="#2196F3"
                                />
                                <QuickAction
                                    title="View Bookings"
                                    icon="fas fa-calendar-alt"
                                    link="/admin/bookings"
                                    color="#FF9800"
                                />
                                <QuickAction
                                    title="Reports"
                                    icon="fas fa-chart-bar"
                                    link="/admin/reports"
                                    color="#9C27B0"
                                />
                                <QuickAction
                                    title="Settings"
                                    icon="fas fa-cog"
                                    link="/admin/settings"
                                    color="#607D8B"
                                />
                                <QuickAction
                                    title="Notifications"
                                    icon="fas fa-bell"
                                    link="/admin/notifications"
                                    color="#F44336"
                                />
                            </div>
                        </div>

                        <div className="recent-activities">
                            <h2>Recent Activities</h2>
                            <div className="activities-list">
                                {recentActivities.map(activity => (
                                    <div key={activity.id} className="activity-item">
                                        <div className="activity-icon">
                                            <i className={`fas ${
                                                activity.type === 'user_registration' ? 'fa-user-plus' :
                                                activity.type === 'booking' ? 'fa-calendar-plus' :
                                                'fa-user-check'
                                            }`}></i>
                                        </div>
                                        <div className="activity-content">
                                            <p>{activity.message}</p>
                                            <span>{new Date(activity.timestamp).toLocaleString()}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard; 