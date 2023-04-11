import React from "react";
import Footer from "../components/Footer";
import github from "../images/icons/GitHub.png";
import linkedin from "../images/icons/Linkedin-Logo.png";
import ContactImage from "../images/dinosaur-nm.JPG";

export default function Contact() {
    return (
        <div className="contact-container">
            <img className="contact-image" src={ContactImage} alt="ContactImage" />
            <h3>Contact</h3>
            <a className="email" href="mailto:brang@brangmai.com">Send Email</a>
            <div className="social-media">
                <a href="https://github.com/brangmai1" target="_blank" rel="noreferrer">
                    <img src={github} alt="github link"></img>
                </a>
                <a href="https://linkedin.com/in/brangmai" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkedin link"></img>
                </a>
            </div>
            <Footer />
        </div>
    )
}