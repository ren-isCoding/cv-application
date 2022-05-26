import React from "react"

export default function EducationForm(onChange) {
    return (
        <div className="inputs" onChange={(e) => console.log(e)}>
            <input placeholder="School" name="school" />
            <input placeholder="City" name="schoolCity" />
            <input placeholder="Degree" name="degree" />
            <input placeholder="Start date (year)" name="schoolStart" />
            <input placeholder="End date (year)" name="schoolEnd" />
            <button className="remove-btn">Remove</button>
        </div>
    )
}
