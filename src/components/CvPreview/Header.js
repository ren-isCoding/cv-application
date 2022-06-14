import React from "react"

export default function HeaderPreview({ cv }) {
  const { fName, lName, profession } = cv.personalInfo
  return (
    <header>
      <h1>
        {fName ? fName : "Name"} {lName ? lName : "Surname"}
      </h1>
      <span>{profession ? profession : "Profession"}</span>
    </header>
  )
}
