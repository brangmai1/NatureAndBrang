import React from "react";
//import Header from "../components/Header"
import Profilepic from "../images/IMG-1140.JPG";
import Footer from "../components/Footer"
import ReLogo from "../images/icons/react-logo.png"
import Git from "../images/icons/git-logo.png"
import GitHub from "../images/icons/GitHub.png"
import Vscode from "../images/icons/vscode.png"
import Xcode from "../images/icons/xcode.png"
import Jupyter from "../images/icons/jupyter-logo.png"

export default function About() {
    return (
        <div className="aboutme-page">
            <div className="aboutme-container">
                <img className="profile-pic" src={Profilepic} alt="Profile"/>
                <h3>Brang Mai</h3>
                <h5>Software Engineer</h5>
                <p className="profile-highlight">
                    Software developer with a passion for developing innovative and efficient software solutions. 
                    Proficient in multiple programming languages, including Javascript, Python and C++.
                    A dedicated team player with excellent communication and collaboration skills. 
                    Always looking to expand my knowledge and stay up-to-date with 
                    the latest technologies and industry trends.
                </p>
                <div className="skills">
                    <h5>Programming Languages Levels of Proficiency</h5>
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
                    <h5>Tools</h5>
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
            <Footer />
        </div>
    )
}