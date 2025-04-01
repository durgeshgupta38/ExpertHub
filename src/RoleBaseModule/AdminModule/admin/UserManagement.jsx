import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommonToast } from '../../../ComponentReuse/Loader/commonToast';
import CommonSpinner from '../../../ComponentReuse/Loader/Spinner';
import './UserManagement.css';
import SidePanel from './SidePanel';

const UserManagement = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.user);
    
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        status: 'all',
        dateRange: 'all'
    });
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(''); // 'edit', 'delete', 'view'

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        filterUsers();
    }, [users, searchTerm, filters]);

    const fetchUsers = async () => {
        try {
            // Mock data for 20 users
            const mockUsers = [
                {
                    id: 1,
                    name: 'John Doe',
                    profilePic: 'https://i.pravatar.cc/150?img=1',
                    bookingDate: '2024-03-30',
                    status: 'success',
                    email: 'john@example.com',
                    phone: '1234567890'
                },
                {
                    id: 2,
                    name: 'Jane Smith',
                    profilePic: 'https://i.pravatar.cc/150?img=2',
                    bookingDate: '2024-03-29',
                    status: 'pending',
                    email: 'jane@example.com',
                    phone: '2345678901'
                },
                {
                    id: 3,
                    name: 'Mike Johnson',
                    profilePic: 'https://i.pravatar.cc/150?img=3',
                    bookingDate: '2024-03-28',
                    status: 'rejected',
                    email: 'mike@example.com',
                    phone: '3456789012'
                },
                // Add more mock users...
                {
                    id: 4,
                    name: 'Sarah Williams',
                    profilePic: 'https://i.pravatar.cc/150?img=4',
                    bookingDate: '2024-03-27',
                    status: 'success',
                    email: 'sarah@example.com',
                    phone: '4567890123'
                },
                {
                    id: 5,
                    name: 'David Brown',
                    profilePic: 'https://i.pravatar.cc/150?img=5',
                    bookingDate: '2024-03-26',
                    status: 'pending',
                    email: 'david@example.com',
                    phone: '5678901234'
                },
                // Add more users to reach 20...
            ];
            setUsers(mockUsers);
        } catch (error) {
            CommonToast('error', 'Failed to fetch users');
        }
    };

    const filterUsers = () => {
        let filtered = [...users];

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(user =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.phone.includes(searchTerm)
            );
        }

        // Status filter
        if (filters.status !== 'all') {
            filtered = filtered.filter(user => user.status === filters.status);
        }

        setFilteredUsers(filtered);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleUserAction = (user, action) => {
        setSelectedUser(user);
        setModalType(action);
        setShowModal(true);
    };

    const handleDelete = async () => {
        try {
            // TODO: Replace with actual API call
            const updatedUsers = users.filter(user => user.id !== selectedUser.id);
            setUsers(updatedUsers);
            CommonToast('success', 'User deleted successfully');
            setShowModal(false);
        } catch (error) {
            CommonToast('error', 'Failed to delete user');
        }
    };

    return (
        <div className="admin-layout">
              <SidePanel />
        <div className="admin-content">
        <div className="user-management">
            <div className="page-header">
                <h1>User Management</h1>
                <div className="header-actions">
                    <div className="search-box">
                        <i className="fas fa-search"></i>
                        <input
                            type="text"
                            placeholder="Search users..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <select
                        name="status"
                        value={filters.status}
                        onChange={handleFilterChange}
                        className="status-filter"
                    >
                        <option value="all">All Status</option>
                        <option value="success">Success</option>
                        <option value="pending">Pending</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </div>
            </div>

            <div className="users-table-container">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Booking Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map(user => (
                            <tr key={user.id}>
                                <td>
                                    <div className="profile-cell">
                                        <img 
                                            src={user.profilePic} 
                                            alt={user.name} 
                                            className="profile-pic"
                                        />
                                    </div>
                                </td>
                                <td>{user.name}</td>
                                <td>{new Date(user.bookingDate).toLocaleDateString()}</td>
                                <td>
                                    <span className={`status-badge ${user.status}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="action-buttons">
                                        <button
                                            onClick={() => handleUserAction(user, 'view')}
                                            className="view-btn"
                                            title="View Details"
                                        >
                                            <i className="fas fa-eye"></i>
                                        </button>
                                        <button
                                            onClick={() => handleUserAction(user, 'edit')}
                                            className="editfa-btn"
                                            title="Edit User"
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button
                                            onClick={() => handleUserAction(user, 'delete')}
                                            className="deletefa-btn"
                                            title="Delete User"
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>
                                {modalType === 'view' ? 'User Details' :
                                 modalType === 'edit' ? 'Edit User' :
                                 'Delete User'}
                            </h2>
                            <button
                                className="close-modal"
                                onClick={() => setShowModal(false)}
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>

                        {modalType === 'delete' ? (
                            <div className="delete-confirmation">
                                <p>Are you sure you want to delete this user?</p>
                                <div className="modal-actions">
                                    <button
                                        className="cancel-btn"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="delete-btn"
                                        onClick={handleDelete}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ) : modalType === 'view' ? (
                            <div className="user-details">
                                <div className="detail-row">
                                    <label>Profile Picture</label>
                                    <img 
                                        src={selectedUser.profilePic} 
                                        alt={selectedUser.name} 
                                        className="detail-profile-pic"
                                    />
                                </div>
                                <div className="detail-row">
                                    <label>Name</label>
                                    <span>{selectedUser.name}</span>
                                </div>
                                <div className="detail-row">
                                    <label>Email</label>
                                    <span>{selectedUser.email}</span>
                                </div>
                                <div className="detail-row">
                                    <label>Phone</label>
                                    <span>{selectedUser.phone}</span>
                                </div>
                                <div className="detail-row">
                                    <label>Booking Date</label>
                                    <span>{new Date(selectedUser.bookingDate).toLocaleDateString()}</span>
                                </div>
                                <div className="detail-row">
                                    <label>Status</label>
                                    <span className={`status-badge ${selectedUser.status}`}>
                                        {selectedUser.status}
                                    </span>
                                </div>
                                <div className="modal-actions">
                                    <button
                                        className="cancel-btn"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                // Handle edit form submission
                                setShowModal(false);
                            }}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        defaultValue={selectedUser.name}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        defaultValue={selectedUser.email}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input
                                        type="tel"
                                        defaultValue={selectedUser.phone}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Status</label>
                                    <select defaultValue={selectedUser.status}>
                                        <option value="success">Success</option>
                                        <option value="pending">Pending</option>
                                        <option value="rejected">Rejected</option>
                                    </select>
                                </div>
                                <div className="modal-actions">
                                    <button
                                        type="button"
                                        className="cancel-btn"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="submit-btn"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
        </div>
        </div>
    );
};

export default UserManagement; 