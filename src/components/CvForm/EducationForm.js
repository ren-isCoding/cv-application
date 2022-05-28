import React from "react"

export default function EducationForm({
    education,
    changeEducation,
    addEducation,
    deleteEducation,
}) {
    const educationState = education.map((educationObj) => {
        const { id } = educationObj
        return (
            <div className="inputs" key={id} onChange={(e) => changeEducation(e, id)}>
                <input placeholder="School" name="school" />
                <input placeholder="City" name="schoolCity" />
                <input placeholder="Degree" name="degree" />
                <input placeholder="Start date (year)" name="schoolStart" />
                <input placeholder="End date (year)" name="schoolEnd" />
                <button className="remove-btn" onClick={(e) => deleteEducation(id)}>
                    Remove
                </button>
            </div>
        )
    })
    return (
        <section>
            <h3 id="education">Education</h3>
            {educationState}
            <button className="add-btn" onClick={addEducation}>
                Add new section
            </button>
        </section>
    )
}
