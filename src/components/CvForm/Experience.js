import React from "react"
import EducationForm from "./EducationForm"
import ExperienceForm from "./ExperienceForm"

export default function Experience({ experience, changeExperience }) {
    const experienceArray = experience.map((experienceObj) => {
        return (
            <ExperienceForm
                key={experienceObj.id}
                id={experienceObj.id}
                changeExperience={changeExperience}
            />
        )
    })
    return (
        <section>
            <h3 id="experience">Experience</h3>
            {experienceArray}
            <button className="add-btn">Add new section</button>
        </section>
    )
}
