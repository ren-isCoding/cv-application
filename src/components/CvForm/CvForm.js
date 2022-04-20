import React, { useState } from "react"
import { StyledCvCreator } from "../styles/CvForm.styled"
import EducationForm from "./EducationForm"
import ExperienceForm from "./ExperienceForm"

export default function CvForm({ setValue }) {
    function handleChange(e) {
        const { name, value } = e.target
        setValue((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const [education, setEducation] = useState([])
    const [experience, setExperience] = useState([])

    const addEducationForm = (e) => {
        setEducation(education.concat(<EducationForm key={education.length} />))
    }
    const addExperienceForm = (e) => {
        setExperience(experience.concat(<ExperienceForm key={experience.length} />))
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
                <h3 id="education">Education</h3>
                {education}
                <button className="add-btn" onClick={addEducationForm}>
                    Add new section
                </button>
            </section>

            <section>
                <h3 id="experience">Experience</h3>
                {experience}
                <button className="add-btn" onClick={addExperienceForm}>
                    Add new section
                </button>
            </section>

            <section>
                <h3>Skills</h3>
                <div className="inputs">
                    <input type="text" placeholder="What is your specialty?" name="skill" />
                    <button className="add-btn">Add to skills</button>
                </div>
            </section>
        </StyledCvCreator>
    )
}
