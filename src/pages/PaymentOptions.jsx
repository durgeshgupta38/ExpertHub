import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentOptions = () => {
  const [selectedMethod, setSelectedMethod] = useState("netbanking");
  const [selectedBank, setSelectedBank] = useState("");
  const [amount, setAmount] = useState(112575); // Example amount

  const popularBanks = [
    { name: "HDFC Bank", logo: "🏦" },
    { name: "ICICI Bank", logo: "💳" },
    { name: "State Bank of India", logo: "🔵" },
    { name: "Axis Bank", logo: "💰" },
    { name: "Kotak Mahindra Bank", logo: "🏦" },
  ];

  const otherBanks = ["Punjab National Bank", "Bank of Baroda", "Yes Bank"];

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: "50rem", backgroundColor: "#f8f9fa",border:"1px solid #d4d6d9" }}>
        <h3 className="text-center mb-3">Select Payment Method</h3>
        {/* Payment Selection Tabs */}
 <div className="w-100 mb-3 overflow-auto d-flex gap-2" style={{ whiteSpace: "nowrap" }}>
          {["netbanking", "card", "Cash on Delivery", "UPI"].map((method) => (
            <button
              key={method}
              className={`btn ${
                selectedMethod === method ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setSelectedMethod(method)}
            >
              {method}
            </button>
          ))}
        </div>

        {/* Net Banking UI */}
        {selectedMethod === "netbanking" && (
          <div>
            <h6 className="mt-3 fw-bold">Popular Banks</h6>
            <div className="d-flex flex-wrap gap-3">
              {popularBanks.map((bank) => (
                <label key={bank.name} className="btn btn-outline-secondary">
                  <input
                    type="radio"
                    name="bank"
                    value={bank.name}
                    className="me-2"
                    onChange={() => setSelectedBank(bank.name)}
                  />
                  {bank.logo} {bank.name}
                </label>
              ))}
            </div>

            <h6 className="mt-4 fw-bold">Other Banks</h6>
            <select
              className="form-select w-50"
              onChange={(e) => setSelectedBank(e.target.value)}
            >
              <option>---Select Bank---</option>
              {otherBanks.map((bank) => (
                <option key={bank}>{bank}</option>
              ))}
            </select>

            <button className="btn btn-dark w-50 mt-3">
              PAY ₹{amount.toLocaleString()}
            </button>
            <p className="text-muted mt-2 text-center">
              This instrument has low success, use UPI or cards for better experience.
            </p>
          </div>
        )}

        {/* Credit / Debit Card UI */}
        {selectedMethod === "card" && (
          <div>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Enter Card Number"
            />

            <div className="d-flex mt-3 gap-3">
              <select className="form-select w-25">
                <option>MM</option>
                {[...Array(12).keys()].map((m) => (
                  <option key={m + 1}>{m + 1}</option>
                ))}
              </select>

              <select className="form-select w-25">
                <option>YY</option>
                {[...Array(10).keys()].map((y) => (
                  <option key={y + 2024}>{y + 2024}</option>
                ))}
              </select>

              <input
                type="password"
                className="form-control w-25"
                placeholder="CVV"
              />
            </div>

            <button className="btn btn-warning w-50 mt-3">
              PAY ₹{amount.toLocaleString()}
            </button>
            <p className="text-muted mt-2 text-center">
              Add and secure cards as per RBI guidelines.
            </p>
          </div>
        )}
        {selectedMethod === "UPI" && (
          <div>

       <h4>UPI Payment</h4>
       <p>Enter your UPI ID to proceed with the payment.</p>
        <input type="text" className="form-control" placeholder="yourupi@bank" />
        <button className="btn btn-primary mt-3 w-50">Proceed</button>

          </div>
        )}
        {selectedMethod === "Cash on Delivery" && (
  <div className="p-4 w-100">
    <h4 className="text-center">Cash on Delivery</h4>
    <p className="text-center">You can pay in cash when your order is delivered.</p>

    <div className="d-flex flex-column align-items-center">
      <img
        src="https://dummyimage.com/100x50/ffffff/000000&text=874"
        alt="Captcha"
        className="captcha-img mb-2"
      />
       <i className="fas fa-sync-alt refresh-icon mb-1" onClick={()=>alert("kkk")}></i>
      <input
        type="text"
        className="form-control text-center"
        placeholder="Enter the characters"
        style={{ maxWidth: "200px" }}
      />
      <button className="btn btn-success w-50 mt-3">CONFIRM ORDER</button>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default PaymentOptions;
