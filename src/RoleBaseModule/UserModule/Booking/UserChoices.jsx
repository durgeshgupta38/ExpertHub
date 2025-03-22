import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./booking.css"
const BookingForm = () => {
  const [formData, setFormData] = useState({
    pickupTime: "",
    dropTime: "",
    pickupDate: "",
    dropDate: "",
    mode: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="container mt-4">
      <div className="p-4 formClass">
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

          <button type="submit" className="btn btn-primary w-100">
            Search for available Agents
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
