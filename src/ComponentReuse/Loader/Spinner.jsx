import React from "react";
import { Spinner } from "react-bootstrap";
import "./loader.css"
const CommonSpinner=({size})=>{
    return (
        <div className="text-center spinner">
              <Spinner animation="border" variant="warning"  as="span" size={size?"sm":""}/>
              <span className={`ms-2 ${size?"spin":"load"}`}>Loading...</span>
            </div>
    )
}
export default CommonSpinner