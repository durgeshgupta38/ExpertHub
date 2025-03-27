import React from "react";
import { Spinner } from "react-bootstrap";
import "./loader.css"
const CommonSpinner=({size,dontShowtext,centre})=>{
    return (
        <div className={`${centre && "spinner-container"}`}>
        <div className="text-center">
          <Spinner animation="border" variant="warning" as="span" size={size ? "sm" : ""} />
          <span className={`${dontShowtext ? "ms-0" : "ms-2"} ${size ? "spin" : "load"}`}>
            {!dontShowtext && "Loading..."}
          </span>
        </div>
      </div>
        // <div className="text-center spinner">
        //       <Spinner animation="border" variant="warning"  as="span" size={size?"sm":""}/>
        //       <span className={`${dontShowtext ?"ms-0":"ms-2"} ${size?"spin":"load"}`}>{!dontShowtext&&"Loading..."}</span>
        //     </div>
    )
}
export default CommonSpinner