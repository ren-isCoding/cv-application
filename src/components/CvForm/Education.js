import React from "react"
import EducationForm from "./EducationForm"

export default function Education({
    education,
    onChangeEducation,
    addEducation,
    deleteEducation,
}) {
    const educationArray = education.map((educationObj) => {
        return (
            <EducationForm
                key={educationObj.id}
                id={educationObj.id}
                educationObj={educationObj}
                onChangeEducation={onChangeEducation}
                deleteEducation={deleteEducation}
            />
        )
    })
    return (
        <section>
            <h3 id="education">Education</h3>
            {educationArray}
            <button className="add-btn" onClick={addEducation}>
                Add new section
            </button>
        </section>
    )
}
