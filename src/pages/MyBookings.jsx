import React, { useState } from "react";
import { Table, Button, Card, Modal } from "react-bootstrap";
import productImg01 from "../Images/double-sofa-01.png";

const BookingTable = () => {
    const [hoveredRow, setHoveredRow] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);

    const [bookings, setBookings] = useState([
        { id: 1, date: "2025-03-15", category: "Delivery", agent: "John Doe", details: "Package delivery from NYC to LA." ,status:"Pending"},
        { id: 2, date: "2025-03-16", category: "Medical Help", agent: "Alice Smith", details: "Home visit for health check-up.",status:"Accepted" },
        { id: 3, date: "2025-03-17", category: "Shopping", agent: "Bob Williams", details: "Grocery shopping assistance.",status:"Rejected" },
    ]);

    // Handle View Details Click
    const handleViewDetails = (booking) => {
        setSelectedBooking(booking);
        setShowModal(true);
    };

    return (
        <>
            {/* Table for Bookings */}
            <Table striped bordered hover responsive className="mt-3">
                <thead className="table-dark">
                    <tr>
                        <th>Date of Bookings</th>
                        <th>Category</th>
                        <th>Agent</th>
                        <th>View Details</th>
                        <th>status</th>

                    </tr>
                </thead>
                <tbody>
                    {bookings.length > 0 ? (
                        bookings.map((booking, index) => (
                            <tr key={index}
                                onMouseEnter={() => setHoveredRow(index)}
                                onMouseLeave={() => setHoveredRow(null)}
                                style={{
                                    backgroundColor: hoveredRow === index ? "#cce5ff" : "transparent",
                                    transition: "background-color 0.3s ease",
                                }}>
                                <td>{booking.date}</td>
                                <td>{booking.category}</td>
                                <td>
                                    <Card.Img
                                        variant="left"
                                        src={productImg01}
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            objectFit: "cover",
                                            marginRight: "10px",
                                            border: "2px solid #ddd",
                                        }}
                                        className="rounded-circle"
                                    />
                                    {booking.agent}
                                </td>
                                <td>
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        onClick={() => handleViewDetails(booking)}
                                    >
                                        View Details
                                    </Button>
                                </td>
                                <td style={{color:booking.status=="Pending"?"orange":booking.status=="Accepted"?"green":"red"}}>{booking.status}</td>

                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">
                                No bookings available!! <a href="/user">Book Now</a>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* Scrollable Modal for Viewing Details */}
            <Modal show={showModal} onHide={() => setShowModal(false)} size="md" scrollable>
                <Modal.Header closeButton>
                    <Modal.Title>Booking Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedBooking ? (
                        <>
                            <p><strong>Date:</strong> {selectedBooking.date}</p>
                            <p><strong>Category:</strong> {selectedBooking.category}</p>
                            <p><strong>Agent:</strong> {selectedBooking.agent}</p>
                            <p><strong>Details:</strong> {selectedBooking.details}</p>

                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default BookingTable;