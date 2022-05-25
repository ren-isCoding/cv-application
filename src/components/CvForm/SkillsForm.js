import React from "react"

export default function SkillsForm() {
    return (
        <section>
            <h3>Skills</h3>
            <div className="inputs">
                <input type="text" placeholder="What is your specialty?" name="skill" />
                <button className="add-btn">Add to skills</button>
            </div>
        </section>
    )
}
