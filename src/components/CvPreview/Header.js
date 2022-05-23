import React from "react"

export default function HeaderPreview({ personal }) {
    const { fName, lName, profession } = personal
    return (
        <header>
            <h1>
                {fName ? fName : "Name"} {lName ? lName : "Surname"}
            </h1>
            <span>{profession ? profession : "Profession"}</span>
        </header>
    )
}
