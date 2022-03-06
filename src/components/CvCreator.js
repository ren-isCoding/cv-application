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
                    <input placeholder="Email" />
                    <input placeholder="Phone Number" />
                    <input placeholder="Description" />
                    <button className="add-btn">Upload Photo</button>
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
                    <button className="remove-btn">Remove</button>
                    <button className="add-btn">Add</button>
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
                    <button className="remove-btn">Remove</button>
                    <button className="add-btn">Add</button>
                </div>
            </section>

            <section>
                <h3>Skills</h3>
                <div className="inputs">
                    <input type="text" placeholder="What is your specialty?" />
                    <button className="add-btn">Add</button>
                </div>
            </section>
        </StyledCvCreator>
    )
}
