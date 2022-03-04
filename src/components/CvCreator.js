import React from "react"
import { StyledCvCreator } from "./styles/CvCreator.styled"

export default function CvCreator() {
    return (
        <StyledCvCreator>
            <section>
                <h3>Personal Information</h3>
                <div className="inputs">
                    <input placeholder="First name" />
                    <input placeholder="Last Name" />
                    <input placeholder="Current Role" />
                    <input placeholder="Phone Number" />
                    <input placeholder="Email" />
                    <input placeholder="Further description" />
                    <button>Upload Photo</button>
                </div>
            </section>

            <section>
                <h3>Education</h3>
                <div className="inputs">
                    <input placeholder="School" />
                    <input placeholder="Degree" />
                    <input placeholder="Location" />
                    <input placeholder="Start date" />
                    <input placeholder="End date" />
                </div>
            </section>

            <section>
                <h3>Experience</h3>
                <div className="inputs">
                    <input placeholder="Company name" />
                    <input placeholder="Your position" />
                    <input placeholder="Job description" />
                    <input placeholder="Start date" />
                    <input placeholder="End date" />
                </div>
            </section>
        </StyledCvCreator>
    )
}
