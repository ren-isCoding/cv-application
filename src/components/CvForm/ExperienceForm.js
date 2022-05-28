import React from "react"

export default function ExperienceForm({ id, changeExperience }) {
    return (
        <div className="inputs" onChange={(e) => changeExperience(e, id)}>
            <input placeholder="Job profession" name="job" />
            <input placeholder="Company name" name="company" />
            <input placeholder="City" name="jobCity" />
            <input placeholder="Start date (year)" name="jobStart" />
            <input placeholder="End date (year)" name="jobEnd" />
            <button className="remove-btn">Remove</button>
        </div>
    )
}
