import React from "react";
import EmailIcon from "../images/email.svg"
import LinkedinIcon from "../images/linkedin.svg"

export default function JobConnect(){
    return(
        <div className="btn-wrapper">
            <div className="connect-btn" id="email-btn">
                <img src={EmailIcon}></img>
                <div>Email</div>
            </div>
            <div className="connect-btn" id="linkedin-btn">
                <img src={LinkedinIcon}></img>
                <div>LinkedIn</div>
            </div>
        </div>
    )
}