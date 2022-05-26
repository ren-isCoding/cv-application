import React from "react"
import ExperienceForm from "./ExperienceForm"

export default function Experience() {
    return (
        <section>
            <h3 id="experience">Experience</h3>
            <ExperienceForm />
            <button className="add-btn">Add new section</button>
        </section>
    )
}
