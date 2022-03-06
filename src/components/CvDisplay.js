import React from "react"
import { StyledCvDisplay } from "./styles/CvDisplay.styled"
import profileImg from "../img/defaultPp.png"
import exampleImg from "../img/boris.png"

export default function CvDisplay() {
    return (
        <StyledCvDisplay>
            <header>
                <h1>Name Surname</h1>
                <span>Web Developer</span>
            </header>
            <div className="main-info-section">
                <section>
                    <h3>Description</h3>
                    <div className="info-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus
                        imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum,
                        mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque
                        fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec
                        gravida. Integer quis porta turpis. Aenean et metus.
                    </div>
                </section>

                <section>
                    <h3>Education</h3>
                    <div className="info-wrapper">
                        <span className="info-date">2015 - 2020</span>
                        <div className="info-details">
                            <span className="info-bold">Computer Science University, City</span>
                            <span>Master in CS</span>
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
                        <span className="info-date">2015 - Present</span>
                        <div className="info-details">
                            <span className="info-bold">Junior Web Developer</span>
                            <span>Facebook, City</span>
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
                        <span>example123@gmail.com</span>
                    </div>
                    <div className="info-details">
                        <span className="info-bold">Phone Number</span>
                        <span>1234567890</span>
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
        </StyledCvDisplay>
    )
}
