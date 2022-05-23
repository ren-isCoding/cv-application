import React from "react"
import exampleImg from "../assets/boris.png"

export default function SideInfo() {
    return (
        <div className="side-info-section">
            <div>
                <img src={exampleImg} className="profile-img"></img>
            </div>
            <section>
                <h3>Personal Details</h3>
                <div className="info-details">
                    <span className="info-bold">Email</span>
                    <span></span>
                </div>
                <div className="info-details">
                    <span className="info-bold">Phone Number</span>
                    <span></span>
                </div>
            </section>
            <section>
                <h3>Skills</h3>
                <ul className="skills-list">
                    <li>Programming</li>
                    <li>Photoshop</li>
                    <li>Teamwork</li>
                    <li>Design</li>
                </ul>
            </section>
        </div>
    )
}
