import React from "react"

export default function EducationForm() {
    return (
        <section>
            <h3 id="education">Education</h3>

            <div className="inputs">
                <input placeholder="School" name="school" />
                <input placeholder="City" name="schoolCity" />
                <input placeholder="Degree" name="degree" />
                <input placeholder="Start date (year)" name="schoolStart" />
                <input placeholder="End date (year)" name="schoolEnd" />
                <button className="remove-btn">Remove</button>
            </div>

            <button className="add-btn">Add new section</button>
        </section>
    )
}
