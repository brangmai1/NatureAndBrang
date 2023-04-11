import React from "react";
//import Header from "../components/Header"
import Profilepic from "../images/IMG-1140.JPG";
import Footer from "../components/Footer"
import ReLogo from "../images/icons/react.png"
import Git from "../images/icons/git-logo.png"
import GitHub from "../images/icons/GitHub.png"
import Vscode from "../images/icons/vscode.png"
import Xcode from "../images/icons/xcode.png"
import Jupyter from "../images/icons/jupyter-logo.png"

export default function About() {
    return (
        <div className="aboutme-page">
            <div className="aboutme-profile">
                <img className="profile-pic" src={Profilepic} alt="Profile"/>
                <div>
                    <h2>Brang Mai</h2>
                    <h5>Software Engineer</h5>
                </div>
            </div>
            <div className="aboutme-container">
                <div className="aboutme-left-section">
                    <h4>About Me</h4><br />
                    <div className="profile-highlight">
                        <p >
                            I am a proud graduate of Hunter College, the City University of New York, and hold a Bachelor's degree in Computer Science.
                            I have a very strong passion for developing innovative and efficient software solutions. 
                            I am proficient in multiple programming languages, including Javascript, Python and C++.
                            Additionally, I am also a dedicated team player with excellent communication and collaboration skills. 
                            I am always looking to expand my knowledge and stay up-to-date with 
                            the latest technologies and industry trends.
                        </p><br />
                        <p>
                            Besides my interest in technology, I also like travelling and photography. 
                            I have travelled to many famous national parks, the nature wonders of our planet earth and cities around the world.
                            Some of my favorites places that I have visited include Yellow Stone, Grand Canyon, Bryce Canyon National Parks and the Muir Woods National Monument.
                            My favorite cities are New York City, which I call home for the past eight years, Bangkok, Denver and Chicago.
                            These favorite parks and cities are packed with nature and man-made beauties. 
                        </p><br />
                        <p>
                            I developed this website to share my passion and work with everyone.
                            All the pictures on this website were taken by me from places I have visited. 
                            I hope you enjoy them as much as I did taking them.
                        </p>
                    </div>
                </div>
                <div className="aboutme-right-section">
                    <div className="skills">
                        <h4>Programming Languages Levels of Proficiency</h4>
                        <ul>
                            <div className="language">
                                <li>Javascript</li>
                                <div className="knowledge">
                                    <div className="javascript"></div>
                                </div>
                            </div>
                            <div className="language">
                                <li>Python</li>
                                <div className="knowledge">
                                    <div className="python"></div>
                                </div>
                            </div>
                            <div className="language">
                                <li>C++</li>
                                <div className="knowledge">
                                    <div className="cplusplus"></div>
                                </div>
                            </div>
                            <div className="language">
                                <li>HTML</li>
                                <div className="knowledge">
                                    <div className="html"></div>
                                </div>
                            </div>
                            <div className="language">
                                <li>CSS</li>
                                <div className="knowledge">
                                    <div className="css"></div>
                                </div>
                            </div>
                            <div className="language">
                                <li>Swift</li>
                                <div className="knowledge">
                                    <div className="swift"></div>
                                </div>
                            </div>
                            <div className="language">
                            <li>SQL</li>
                                <div className="knowledge">
                                    <div className="sql"></div>
                                </div>
                            </div>                    
                        </ul>
                    </div>
                <div className="tools">
                    <h4>Tools</h4>
                    <div className="tools-icons">
                        <img className="icon" src={ReLogo} alt="React" />
                        <img className="icon" src={Git} alt="Git"/>
                        <img className="icon" src={GitHub} alt="GitHub"/>
                        <img className="icon" src={Vscode} alt="VS Code"/>
                        <img className="icon" src={Xcode} alt="Xcode"/>
                        <img className="icon" src={Jupyter} alt="Jupyter"/>
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}