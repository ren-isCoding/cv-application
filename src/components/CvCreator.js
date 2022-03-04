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
                    <input placeholder="Profession" />
                    <input placeholder="Phone Number" />
                    <input placeholder="Email" />
                    <input placeholder="Description" />
                    <button>Upload Photo</button>
                </div>
            </section>

            <section>
                <h3>Education</h3>
                <div className="inputs">
                    <input placeholder="School" />
                    <input placeholder="City" />
                    <input placeholder="Degree" />
                    <input placeholder="Start date" />
                    <input placeholder="End date" />
                </div>
            </section>

            <section>
                <h3>Experience</h3>
                <div className="inputs">
                    <input placeholder="Job" />
                    <input placeholder="Company name" />
                    <input placeholder="City" />
                    <input placeholder="Start date" />
                    <input placeholder="End date" />
                </div>
            </section>
        </StyledCvCreator>
    )
}
