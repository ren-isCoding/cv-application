import React from "react"
import EducationForm from "./EducationForm"

export default function Education() {
    return (
        <section>
            <h3 id="education">Education</h3>
            <EducationForm />
            <button className="add-btn">Add new section</button>
        </section>
    )
}
