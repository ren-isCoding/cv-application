import React from "react"

export default function SideInfo({ cv }) {
    const { phoneNum, email, photo } = cv.personalInfo
    const skills = cv.skills.map((skill) => {
        return <li key={skill.id}>{skill.name}</li>
    })
    return (
        <div className="side-info-section">
            <div>
                <img src={photo} className="profile-img"></img>
            </div>
            <section>
                <h3>Personal Details</h3>
                <div className="info-details">
                    <span className="info-bold">Email:</span>
                    <span>{email}</span>
                </div>
                <div className="info-details">
                    <span className="info-bold">Phone Number:</span>
                    <span>{phoneNum}</span>
                </div>
            </section>
            <section>
                <h3>Skills</h3>
                <ul className="skills-list">
                    {skills.length ? skills : "No information."}
                </ul>
            </section>
        </div>
    )
}
