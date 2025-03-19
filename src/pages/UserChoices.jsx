import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "bootstrap";
const BookingForm = () => {
  const [formData, setFormData] = useState({
    pickupAddress: "",
    dropAddress: "",
    pickupTime: "",
    dropTime: "",
    pickupDate: "",
    dropDate: "",
    mode: "",
    price: 500,
    selectedrow:""
  });

  const [pickupAddresses, setPickupAddresses] = useState([]);

  const [dropAddresses, setDropAddresses] = useState([]);

  const [newAddress, setNewAddress] = useState([]);
  const [editingAddress, setEditingAddress] = useState(null);
  const [editType, setEditType] = useState(""); // "pickup" or "drop"
  const [showDropdown, setShowDropdown] = useState({ pickup: false, drop: false });

  const formatTime12Hour = (time) => {
    if (!time) return "";
    let [hours, minutes] = time.split(":");
    let period = "AM";

    hours = parseInt(hours);
    if (hours >= 12) {
      period = "PM";
      if (hours > 12) hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }

    return `${hours}:${minutes} ${period}`;
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const today = new Date();
  const formattedToday = today.toISOString().split("T")[0];
  // const handleChange = (type, value) => {
  //   setFormData({ ...formData, [type]: value });
  // };

  const handleAddAddress = (type) => {
    // if (newAddress.length !== 0) {
    if (type === "pickup") {
      setPickupAddresses([...pickupAddresses, ...newAddress]);
    } else {
      setDropAddresses([...dropAddresses, ...newAddress]);
    }
    setNewAddress([]);
    // }
  };
  console.log(dropAddresses)
  const handleDeleteAddress = (type, id) => {
    if (type === "pickup") {
      setPickupAddresses(pickupAddresses.filter((val, i) => val.id !== id));
    } else {
      setDropAddresses(dropAddresses.filter((val, i) => val.id !== id));
    }
  };

  //   const handleEditAddress = (type, index) => {
  //     setEditingAddress({ type, index, value: type === "pickup" ? pickupAddresses[index] : dropAddresses[index] });
  //     setEditType(type);
  //   };
  // console.log(editingAddress,'editingAddress')
  //   const handleUpdateAddress = () => {
  //     if (editingAddress) {
  //       if (editType === "pickup") {
  //         const updatedList = [...pickupAddresses];
  //         updatedList[editingAddress.index] = editingAddress.value;
  //         setPickupAddresses(updatedList);
  //       } else {
  //         const updatedList = [...dropAddresses];
  //         updatedList[editingAddress.index] = editingAddress.value;
  //         setDropAddresses(updatedList);
  //       }
  //       setEditingAddress(null);
  //     }
  //   };
  const handleEditAddress = (type, address) => {
    setEditingAddress(address);
    setEditType(type);
  };

  const handleUpdateAddress = () => {
    if (editingAddress) {
      if (editType === "pickup") {
        setPickupAddresses(
          pickupAddresses.map((addr) => (addr.id === editingAddress.id ? editingAddress : addr))
        );
      } else {
        setDropAddresses(
          dropAddresses.map((addr) => (addr.id === editingAddress.id ? editingAddress : addr))
        );
      }
      setEditingAddress(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  useEffect(() => {
    const modalElement = document.getElementById("editModal");
    if (modalElement) {
      new Modal(modalElement);
    }
  }, []);
  return (
    <div className="container mt-4">
      <div className="card p-4" style={{ maxWidth: "600px", margin: "auto" }}>
        <h3 className="text-center mb-3">Booking Form</h3>
        <form onSubmit={handleSubmit}>
          {/* Pickup Date & Time */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Pick Up Date</label>
              <input
                type="date"
                className="form-control"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                min={formattedToday}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Pick Up Time</label>
              <input
                type="time"
                className="form-control"
                name="pickupTime"
                value={formData.pickupTime}
                onChange={handleChange}
              />
              {formData.pickupTime && (
                <p className="text-info mb-0">
                  Selected Time: {formatTime12Hour(formData.pickupTime)}
                </p>
              )}
            </div>
          </div>
          {/* Drop Date & Time */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Drop Date</label>
              <input
                type="date"
                className="form-control"
                name="dropDate"
                value={formData.dropDate}
                onChange={handleChange}
                min={formData.pickupDate}
                disabled={!(formData.pickupDate && formData.pickupTime)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Drop Time</label>
              <input
                type="time"
                className="form-control"
                name="dropTime"
                value={formData.dropTime}
                onChange={handleChange}
                disabled={
                  !(formData.pickupDate && formData.pickupTime && formData.dropDate)
                }
              />
              {formData.dropTime && (
                <p className="text-info mb-0">
                  Selected Time: {formatTime12Hour(formData.dropTime)}
                </p>
              )}
            </div>
          </div>
          {/* Mode of Service */}
          <div className="mb-3">
            <label className="form-label">Select Mode of Service</label>
            <div className="d-flex gap-3">
              {["Online", "Offline"].map((mode) => (
                <div key={mode} className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="mode"
                    value={mode}
                    checked={formData.mode === mode}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">{mode}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="modal fade" id="editModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Address</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                  {editingAddress && (
                    <>
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Address 1"
                        value={editingAddress.address1}
                        onChange={(e) => setEditingAddress({ ...editingAddress, address1: e.target.value })}
                      />
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Address 2"
                        value={editingAddress.address2}
                        onChange={(e) => setEditingAddress({ ...editingAddress, address2: e.target.value })}
                      />
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="City"
                        value={editingAddress.city}
                        onChange={(e) => setEditingAddress({ ...editingAddress, city: e.target.value })}
                      />
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="State"
                        value={editingAddress.state}
                        onChange={(e) => setEditingAddress({ ...editingAddress, state: e.target.value })}
                      />
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Zip Code"
                        value={editingAddress.zipcode}
                        onChange={(e) => setEditingAddress({ ...editingAddress, zipcode: e.target.value })}
                      />
                    </>
                  )}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    ❌ Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    data-bs-dismiss="modal"
                    onClick={handleUpdateAddress}
                  >
                    ✅ Update
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
