import React from "react"

export default function ExperienceForm({
    experience,
    changeExperience,
    addExperience,
    deleteExperience,
}) {
    const experienceState = experience.map((experienceObj) => {
        const { id, jobStart, jobEnd, job, company, jobCity } = experienceObj
        const currentYear = new Date().getFullYear()
        const preventLetters = (e) => {
            if (e.which < 48 || e.which > 57 || e.target.value.length > 3) {
                e.preventDefault()
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
                    defaultValue={jobStart}
                    onKeyPress={(e) => preventLetters(e)}
                />
                <input
                    type="number"
                    min="2000"
                    max={currentYear}
                    placeholder="To (year)"
                    name="jobEnd"
                    defaultValue={jobEnd}
                    onKeyPress={(e) => preventLetters(e)}
                />
                <input placeholder="Job profession" name="job" defaultValue={job} />
                <input placeholder="Company name" name="company" defaultValue={company} />
                <input placeholder="City" name="jobCity" defaultValue={jobCity} />
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
