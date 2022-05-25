import React from "react"

export default function ExperienceForm() {
    return (
        <section>
            <h3 id="experience">Experience</h3>

            <div className="inputs">
                <input placeholder="Job profession" name="job" />
                <input placeholder="Company name" name="company" />
                <input placeholder="City" name="jobCity" />
                <input placeholder="Start date (year)" name="jobStart" />
                <input placeholder="End date (year)" name="jobEnd" />
                <button className="remove-btn">Remove</button>
            </div>

            <button className="add-btn">Add new section</button>
        </section>
    )
}
