import React from "react"

export default function EducationForm({ id, onChangeEducation, deleteEducation }) {
    return (
        <div className="inputs" onChange={(e) => onChangeEducation(e, id)}>
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
}
