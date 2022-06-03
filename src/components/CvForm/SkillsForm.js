import React, { useState } from "react"

export default function SkillsForm({ skills, addSkill, deleteSkill }) {
    const [value, setValue] = useState("")
    const updateValue = (e) => {
        const value = e.target.value.trim()
        setValue(value)
    }
    const skillsState = skills.map((skill) => {
        return (
            <li key={skill.id} className="skill-li">
                {skill.name} <button onClick={(e) => deleteSkill(skill.id)}>✖</button>
            </li>
        )
    })
    return (
        <>
            <form onSubmit={(e) => addSkill(e, value)}>
                <h3>Skills</h3>
                <div className="skills-form">
                    <input
                        type="text"
                        placeholder="What is your specialty?"
                        name="skill"
                        required
                        minLength={3}
                        onChange={(e) => updateValue(e)}
                    />
                    <button type="submit" className="add-skill-btn">
                        Add to skills
                    </button>
                </div>
                {skillsState}
            </form>
        </>
    )
}
