import React from "react"

export default function ExperienceForm({
    experience,
    changeExperience,
    addExperience,
    deleteExperience,
}) {
    const experienceState = experience.map((experienceObj) => {
        const { id } = experienceObj
        return (
            <div className="inputs" key={id} onChange={(e) => changeExperience(e, id)}>
                <input placeholder="Job profession" name="job" />
                <input placeholder="Company name" name="company" />
                <input placeholder="City" name="jobCity" />
                <input placeholder="Start date (year)" name="jobStart" />
                <input placeholder="End date (year)" name="jobEnd" />
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
