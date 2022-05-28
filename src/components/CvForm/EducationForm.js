import React from "react"

export default function EducationForm({
    education,
    changeEducation,
    addEducation,
    deleteEducation,
}) {
    const educationState = education.map((educationObj) => {
        const { id } = educationObj
        const currentYear = new Date().getFullYear()
        const preventLetters = (e) => {
            if (e.which < 48 || e.which > 57 || e.target.value.length > 3) {
                e.preventDefault()
            }
        }
        return (
            <div className="inputs" key={id} onChange={(e) => changeEducation(e, id)}>
                <input
                    type="number"
                    min="2000"
                    max={currentYear}
                    placeholder="From (year)"
                    name="schoolStart"
                    onKeyPress={(e) => preventLetters(e)}
                />
                <input
                    type="number"
                    min="2000"
                    max={currentYear}
                    placeholder="To (year)"
                    name="schoolEnd"
                    onKeyPress={(e) => preventLetters(e)}
                />
                <input placeholder="School" name="school" />
                <input placeholder="City" name="schoolCity" />
                <input placeholder="Degree" name="degree" />
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
