import React from "react";
import X from "../images/twitter.svg"
import Insta from "../images/insta.svg"
import Git from "../images/github.svg"

export default function Footer() {
    return (
        <div id="footer">
            <ul>
                <li>
                    <img src={X}></img>
                </li>
                <li>
                    <img src={Insta}></img>
                </li>
                <li>
                    <img src={Git}></img>
                </li>
            </ul>
        </div>
    )
}