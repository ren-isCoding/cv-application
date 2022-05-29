import React from "react"

export default function SkillsForm({ addSkill }) {
    return (
        <form onSubmit={(e) => addSkill(e)}>
            <h3>Skills</h3>
            <div className="inputs">
                <input type="text" placeholder="What is your specialty?" name="skill" />
                <button type="submit" className="add-btn">
                    Add to skills
                </button>
            </div>
        </form>
    )
}
