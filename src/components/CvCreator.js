import React from "react"
import { StyledCvCreator } from "./styles/CvCreator.styled"

export default function CvCreator({ setState }) {
    let handleChange = (e) => {
        let { name, value } = e.target
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }
    return (
        <StyledCvCreator onChange={(e) => handleChange(e)}>
            <section>
                <h3>Personal Information</h3>
                <div className="inputs">
                    <input placeholder="First name" name="fName" />
                    <input placeholder="Last Name" name="lName" />
                    <input placeholder="Profession" name="profession" />
                    <input placeholder="Email" name="email" />
                    <input placeholder="Phone Number" name="phoneNum" />
                    <input placeholder="Description" name="description" />
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
