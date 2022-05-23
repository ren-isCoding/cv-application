import React, { useState } from "react"
import { StyledCvCreator } from "../styles/CvForm.styled"
import EducationForm from "./EducationForm"
import ExperienceForm from "./ExperienceForm"
import PersonalForm from "./PersonalForm"

const CvForm = ({ cv, onChangePersonal }) => {
    return (
        <StyledCvCreator>
            <PersonalForm onChange={onChangePersonal} />
            <section>
                <h3 id="education">Education</h3>
                <EducationForm />
                <button className="add-btn">Add new section</button>
            </section>

            <section>
                <h3 id="experience">Experience</h3>
                <ExperienceForm />
                <button className="add-btn">Add new section</button>
            </section>

            <section>
                <h3>Skills</h3>
                <div className="inputs">
                    <input
                        type="text"
                        placeholder="What is your specialty?"
                        name="skill"
                    />
                    <button className="add-btn">Add to skills</button>
                </div>
            </section>
        </StyledCvCreator>
    )
}

export default CvForm
