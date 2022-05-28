import React from "react"

export default function ExperienceForm({
    experience,
    changeExperience,
    addExperience,
    deleteExperience,
}) {
    const experienceState = experience.map((experienceObj) => {
        const { id } = experienceObj
        const currentYear = new Date().getFullYear()
        const preventLetters = (e) => {
            if (e.which < 48 || e.which > 57 || e.target.value.length > 3) {
                e.preventDefault()
                console.log(e)
            }
        }

        return (
            <div className="inputs" key={id} onChange={(e) => changeExperience(e, id)}>
                <input
                    type="number"
                    min="2000"
                    max={currentYear}
                    placeholder="From (year)"
                    name="jobStart"
                    onKeyPress={(e) => preventLetters(e)}
                />
                <input
                    type="number"
                    min="2000"
                    max={currentYear}
                    placeholder="To (year)"
                    name="jobEnd"
                    onKeyPress={(e) => preventLetters(e)}
                />
                <input placeholder="Job profession" name="job" />
                <input placeholder="Company name" name="company" />
                <input placeholder="City" name="jobCity" />
                <button className="remove-btn" onClick={(e) => deleteExperience(id)}>
                    Remove
                </button>
            </div>
        )
    })

    return (
        <section>
            <h3 id="experience">Experience</h3>
            {experienceState}
            <button className="add-btn" onClick={(e) => addExperience()}>
                Add new section
            </button>
        </section>
    )
}
