import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AddressManager = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        pincode: "",
        locality: "",
        address: "",
        city: "",
        state: "",
        landmark: "",
        altPhone: "",
        addressType: "home",
    });
    const [addresses, setAddresses] = useState([
        {
            name: "Vijay Gupta",
            phone: "9452386630",
            pincode: "277211",
            address: "chauhan market",
            landmark: "near burj khalifa",
            altPhone: "1234567890",
            locality: "Aditya Vasralay, new Market, Near Post office.",
            city: "Ballia",
            state: "Uttar Pradesh",
        },
        {
            name: "Durgesh Gupta",
            phone: "8787882984",
            pincode: "201301",
            address: "mina bazar",
            landmark: "near burj khalifa",
            altPhone: "0987654321",
            locality: "H. No. 5, Ravi Yadav building Near Narmadeshwar mandir, Nawada rassolpur",
            city: "Noida",
            state: "Uttar Pradesh",
        },
    ]);

    const toggleAddressForm = () => setShowForm(!showForm);
    const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });
    const cancelForm = () => {
        setShowForm(false);
        setFormData({
            name: "",
            phone: "",
            pincode: "",
            locality: "",
            address: "",
            city: "",
            state: "",
            landmark: "",
            altPhone: "",
            addressType: "home",
        });
    };
    const saveAddress = (e) => {
        e.preventDefault();
        setAddresses([...addresses, formData]);
        cancelForm();
    };

    return (
        <div className="container mt-4">
            <div className="accordion" id="addressAccordion">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                        >
                            Delivery Address
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#addressAccordion"
                    >
                        <div className="accordion-body">
                            {addresses.map((addr, index) => (
                                <>
                                <div key={index} className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="address" />
                                    <label className="form-check-label">
                                        <strong>{addr.name}</strong> {addr.phone} <br />
                                        {addr.locality}, {addr.city}, {addr.state} - <strong>{addr.pincode}</strong>
                                    </label>
                                </div>
                                 {addresses.length-1 !==index && <hr />} 
                               </> 
                            ))}
                        </div>
                        <hr />
                        <button className="btn btn-link" onClick={toggleAddressForm}>+ Add a new address</button>
                    </div>
                </div>
            </div>

            {showForm && (
                <div className="accordion-item mt-3">
                    <div className="accordion-body">
                        <form onSubmit={saveAddress}>
                            <div className="row mb-2">
                                <div className="col-md-6">
                                    <input type="text" id="name" className="form-control" placeholder="Name" value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" id="phone" className="form-control" placeholder="10-digit mobile number" value={formData.phone} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-md-6">
                                    <input type="text" id="pincode" className="form-control" placeholder="Pincode" value={formData.pincode} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" id="locality" className="form-control" placeholder="Locality" value={formData.locality} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="mb-2">
                                <input type="text" id="address" className="form-control" placeholder="Address (Area and Street)" value={formData.address} onChange={handleChange} />
                            </div>
                            <div className="row mb-2">
                                <div className="col-md-6">
                                    <input type="text" id="city" className="form-control" placeholder="City/District/Town" value={formData.city} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <select id="state" className="form-select" value={formData.state} onChange={handleChange}>
                                        <option value="">--Select State--</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-md-6">
                                    <input type="text" id="landmark" className="form-control" placeholder="Landmark (Optional)" value={formData.landmark} onChange={handleChange} />
                                </div>
                                <div class="col-md-6">
                                    <input type="text" id="altPhone" className="form-control" placeholder="Alternate Phone (Optional)" value={formData.altPhone} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="mb-2">
                                <label>Address Type:</label>
                                <div>
                                    <input type="radio" name="addressType" id="home" className="form-check-input" value="home" checked={formData.addressType === "home"} onChange={handleChange} /> Home
                                    <input type="radio" name="addressType" id="work" className="form-check-input ms-2" value="work" checked={formData.addressType === "work"} onChange={handleChange} /> Work
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Save and Deliver Here</button>
                            <button type="button" className="btn btn-secondary ms-2" onClick={cancelForm}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddressManager;
