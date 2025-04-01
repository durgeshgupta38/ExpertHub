import React from "react";
import { useNavigate } from "react-router-dom";
import useWindowScrollToTop from "../../../CustomHook/useWindowScrollToTop";
import "./booking.css"
const ReviewAndComplete=()=>{
  useWindowScrollToTop()

      const navigate = useNavigate();
    
    const handleComplete=()=>{
        navigate(`/user/paymentoptions`);
    }
    return(
        <div className="container d-flex justify-content-center mt-4 mb-4">
        <div className="card p-4 reviewDetails">
          <h3 className="text-center mb-3">Please review your details</h3>
        <h6 className="mt-3 fw-bold">Name: </h6>Durgesh Gupta
        <h6 className="mt-3 fw-bold">PickUp Address: </h6>Delhi
        <h6 className="mt-3 fw-bold">Delivery Address:</h6> Noida
        <h6 className="mt-3 fw-bold">Contact: </h6>1234556678
        <h6 className="mt-3 fw-bold">Pickup time:</h6>8:00 AM
        <h6 className="mt-3 fw-bold">Delivery time:</h6>9:00 PM
        <h6 className="mt-3 fw-bold">Delivery Date: </h6>20/02/1992
        <h6 className="mt-3 fw-bold">Pickup Date:</h6>23/01/2025
        <h6 className="mt-3 fw-bold">Mode:</h6> Online
        <h6 className="mt-3 fw-bold">Price:</h6> Rs 100
        <h6 className="mt-3 fw-bold">Category: </h6>Mechanic
        <h6 className="mt-3 fw-bold">Agent:</h6> john Dey
        <h6 className="mt-3 fw-bold">Service:</h6> Car review by experts
              <button
                className="btn btn-outline-primary"
                onClick={() => handleComplete()}
              >
                Proceed to Payment
              </button>
          </div>
        </div>
    )
}
export default ReviewAndComplete