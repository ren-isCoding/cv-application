import React, { Component } from "react"
import { StyledCvDisplay } from "../styles/CvPreview.styled"
import profileImg from "../assets/defaultPp.png"
import exampleImg from "../assets/boris.png"

export default function CvPreview({ value }) {
    const { fName, lName, profession, email, phoneNum, description } = value
    const { school, schoolCity, degree, schoolStart, schoolEnd } = value
    const { job, company, jobCity, jobStart, jobEnd } = value
    const { skill } = value

    return (
        <StyledCvDisplay>
            <header>
                <h1>
                    {fName ? fName : "Name"} {lName ? lName : "Surname"}
                </h1>
                <span>{profession ? profession : "Profession"}</span>
            </header>
            <div className="main-info-section">
                <section>
                    <h3>Description</h3>
                    <div className="info-desc">{description ? description : "Add a short description about yourself"}</div>
                </section>

                <section>
                    <h3>Education</h3>
                    <div className="info-wrapper">
                        <span className="info-date">
                            {schoolStart ? schoolStart : "From"} - {schoolEnd ? schoolEnd : "To"}
                        </span>
                        <div className="info-details">
                            <span className="info-bold">
                                {school ? school : "School"}, {schoolCity ? schoolCity : "City"}
                            </span>
                            <span>{degree ? degree : "Degree"}</span>
                        </div>
                    </div>
                    <div className="info-wrapper">
                        <span className="info-date">2015 - 2020</span>
                        <div className="info-details">
                            <span className="info-bold">Computer Science University, City</span>
                            <span>Master in CS</span>
                        </div>
                    </div>
                </section>

                <section>
                    <h3>Experience</h3>
                    <div className="info-wrapper">
                        <span className="info-date">
                            {jobStart ? jobStart : "From"} - {jobEnd ? jobEnd : "To"}
                        </span>
                        <div className="info-details">
                            <span className="info-bold">{job ? job : "Job profession"}</span>
                            <span>
                                {company ? company : "Company name"}, {jobCity ? jobCity : "City"}
                            </span>
                        </div>
                    </div>
                    <div className="info-wrapper">
                        <span className="info-date">2015 - Present</span>
                        <div className="info-details">
                            <span className="info-bold">Junior Web Developer</span>
                            <span>Facebook, City</span>
                        </div>
                    </div>
                </section>
            </div>

            <div className="side-info-section">
                <div>
                    <img src={exampleImg} className="profile-img"></img>
                </div>
                <section>
                    <h3>Personal Details</h3>
                    <div className="info-details">
                        <span className="info-bold">Email</span>
                        <span>{email}</span>
                    </div>
                    <div className="info-details">
                        <span className="info-bold">Phone Number</span>
                        <span>{phoneNum}</span>
                    </div>
                </section>
                <section>
                    <h3>Skills</h3>
                    <ul className="skills-list">
                        <li>{skill}</li>
                        <li>Programming</li>
                        <li>Photoshop</li>
                        <li>Teamwork</li>
                        <li>Design</li>
                    </ul>
                </section>
            </div>
        </StyledCvDisplay>
    )
}
