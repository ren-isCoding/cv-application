import React from "react"

export default function EducationForm({
    education,
    changeEducation,
    addEducation,
    deleteEducation,
}) {
    const educationState = education.map((educationObj) => {
        const { id, schoolStart, schoolEnd, school, schoolCity, degree } = educationObj
        const currentYear = new Date().getFullYear()

        return (
            <div className="inputs" key={id} onChange={(e) => changeEducation(e, id)}>
                <input
                    type="number"
                    min="2000"
                    max={currentYear}
                    placeholder="From (year)"
                    name="schoolStart"
                    maxLength={10}
                    defaultValue={schoolStart}
                />
                <input
                    type="number"
                    min="2000"
                    max={currentYear}
                    placeholder="To (year)"
                    name="schoolEnd"
                    maxLength={10}
                    defaultValue={schoolEnd}
                />
                <input placeholder="School" name="school" defaultValue={school} />
                <input placeholder="City" name="schoolCity" defaultValue={schoolCity} />
                <input placeholder="Degree" name="degree" defaultValue={degree} />
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
            <button className="add-btn" onClick={(e) => addEducation()}>
                Add new section
            </button>
        </section>
    )
}
