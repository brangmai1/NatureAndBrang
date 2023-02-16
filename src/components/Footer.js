import React from "react";
import github from "../images/icons/GitHub.png"
import linkedin from "../images/icons/Linkedin-Logo.png"

export default function Footer() {
    return (
        <div className="footer-container">
            <p>&copy; 2022 Brang Mai</p>
            <div className="social-media">
                <a href="https://github.com/brangmai1" target="_blank" rel="noreferrer">
                    <img src={github} alt="github link"></img>
                </a>
                <a href="https://linkedin.com/in/brangmai" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkedin link"></img>
                </a>
            </div>
        </div>
    )
}