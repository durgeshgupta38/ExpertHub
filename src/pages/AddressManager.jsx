import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AddressManagerDrop = () => {
    const [showForm, setShowForm] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [selectedAddress, setSelectedAddress] = useState({ pickupIndex: null, deliveryIndex: null });
    const [formMode, setFormMode] = useState({ mode: null, index: null, type: null });
    const [formData, setFormData] = useState({
        id: null,
        name: "",
        phone: "",
        pincode: "",
        locality: "",
        address: "",
        city: "",
        state: "",
        landmark: "",
        altPhone: "",
        workOrHome: "home",
    });
    const [addresses, setAddresses] = useState({
        pickup: [
            {
                id: 1,
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
                id: 2,
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
        ],
        delivery: [
            {
                id: 1,
                name: "Rani Gupta",
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
                id: 2,
                name: "Soni Gupta",
                phone: "8787882984",
                pincode: "201301",
                address: "mina bazar",
                landmark: "near burj khalifa",
                altPhone: "0987654321",
                locality: "H. No. 5, Ravi Yadav building Near Narmadeshwar mandir, Nawada rassolpur",
                city: "Noida",
                state: "Uttar Pradesh",
            },
        ]
    });

    useEffect(() => {
        if (!activeAccordion) {
            setShowForm(false);
        }
    }, [activeAccordion]);

    const toggleAddressForm = () => {
        setShowForm(!showForm);
        setFormMode({ mode: "add", index: null, type: activeAccordion });
        resetFormData();
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

    const resetFormData = () => {
        setFormData({
            id: null,
            name: "",
            phone: "",
            pincode: "",
            locality: "",
            address: "",
            city: "",
            state: "",
            landmark: "",
            altPhone: "",
            workOrHome: "home",
        });
    };

    const cancelForm = () => {
        setShowForm(false);
        resetFormData();
        setFormMode({ mode: null, index: null, type: null });
    };

    const saveAddress = (e) => {
        e.preventDefault();
        const { mode, index, type } = formMode;
        if (mode === "add") {
            setAddresses(prev => ({ ...prev, [type]: [...prev[type], formData] }));
        } else if (mode === "edit") {
            setAddresses(prev => {
                const updatedAddresses = [...prev[type]];
                updatedAddresses[index] = formData;
                return { ...prev, [type]: updatedAddresses };
            });
        }
        cancelForm();
    };

    const handleEdit = (address, type, index) => {
        setFormData(address);
        setShowForm(true);
        setFormMode({ mode: "edit", index, type });
    };

    const handleAccordionToggle = (type) => {
        setActiveAccordion(prev => (prev === type ? null : type));
    };

    return (
        <>
            <div className="container mt-4">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwo"
                                onClick={() => handleAccordionToggle("pickup")}
                            >
                                Select Pickup Address
                            </button>
                        </h2>
                        <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                {addresses.pickup.map((addr, index) => (
                                    <React.Fragment key={index}>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="radio" name="address" checked={selectedAddress.pickupIndex === index}
                                                onChange={() => setSelectedAddress({ pickupIndex: index, deliveryIndex: null })}
                                            />
                                            <label className="form-check-label">
                                                <strong>{addr.name}</strong> {addr.phone} <br />
                                                {addr.locality}, {addr.city}, {addr.state} - <strong>{addr.pincode}</strong>
                                            </label>
                                            {selectedAddress.pickupIndex === index && <button className="btn btn-link float-end text-primary" onClick={() => handleEdit(addr, "pickup", index)}>Edit</button>}
                                        </div>
                                        {addresses.pickup.length - 1 !== index && <hr />}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne"
                                onClick={() => handleAccordionToggle("delivery")}
                            >
                                Select Delivery Address
                            </button>
                        </h2>
                        <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                {addresses.delivery.map((addr, index) => (
                                    <React.Fragment key={index}>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="radio" name="address" checked={selectedAddress.deliveryIndex === index}
                                                onChange={() => setSelectedAddress({ deliveryIndex: index, pickupIndex: null })}
                                            />
                                            <label className="form-check-label">
                                                <strong>{addr.name}</strong> {addr.phone} <br />
                                                {addr.locality}, {addr.city}, {addr.state} - <strong>{addr.pincode}</strong>
                                            </label>
                                            {selectedAddress.deliveryIndex === index && <button className="btn btn-link float-end text-primary" onClick={() => handleEdit(addr, "delivery", index)}>Edit</button>}
                                        </div>
                                        {addresses.delivery.length - 1 !== index && <hr />}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                {activeAccordion && (
                    <button className="btn btn-primary mt-0 pt-0" onClick={toggleAddressForm}>
                        {`+ Add a new ${activeAccordion} Address`}
                    </button>
                )}

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
                                <div className="row mb-2">
                                    <div className="col-md-6">
                                        <input type="text" id="landmark" className="form-control" placeholder="Landmark (Optional)" value={formData.landmark} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" id="altPhone" className="form-control" placeholder="Alternate Phone (Optional)" value={formData.altPhone} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label>Address Type:</label>
                                    <div>
                                        <input type="radio" name="workOrHome" id="home" className="form-check-input" value="home" checked={formData.workOrHome === "home"} onChange={handleChange} /> Home
                                        <input type="radio" name="workOrHome" id="work" className="form-check-input ms-2" value="work" checked={formData.workOrHome === "work"} onChange={handleChange} /> Work
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary">Save Address</button>
                                    <button type="button" className="btn btn-secondary ms-2" onClick={cancelForm}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default AddressManagerDrop;
