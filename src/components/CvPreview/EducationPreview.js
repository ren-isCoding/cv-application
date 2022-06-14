import React from "react"

export default function EducationPreview({ education }) {
  const educationArray = education.map((educationObj) => {
    const { school, schoolCity, degree, schoolStart, schoolEnd, id } = educationObj
    return (
      <div className="info-wrapper" key={id}>
        <span className="info-date">
          {schoolStart ? schoolStart + " -" : ""} {schoolEnd}
        </span>
        <div className="info-details">
          <span className="info-bold">
            {school ? school + ", " : ""}
            {schoolCity}
          </span>
          <span>{degree}</span>
        </div>
      </div>
    )
  })
  return (
    <section>
      <h3>Education</h3>
      {education.length ? educationArray : "No information."}
    </section>
  )
}
