import React from "react";
import JobConnect from "./JobConnect";
import AboutMe from "./AboutMe";
import Footer from "./footer";


export default function MainContent(){
    return (
        <div id="main">
            <div className="img"></div>
            <div className="personal-details">
                <h3>ABHILASH R</h3>
                <div className="role">FullStack Developer</div>
                <div className="sub"> soul-abhialsh.com </div>
            </div>
            <div id="job-connect">
                <JobConnect />
            </div>
            <div id="about-me">
                <AboutMe />
            </div>
            <Footer />
        </div>
    )
}