import React from "react"

export default function ExperiencePreview({ experience }) {
  const experienceState = experience.map((experienceObj) => {
    const { id, job, company, jobCity, jobStart, jobEnd } = experienceObj
    return (
      <div className="info-wrapper" key={id}>
        <span className="info-date">
          {jobStart ? jobStart + " -" : ""} {jobEnd}
        </span>
        <div className="info-details">
          <span className="info-bold">{job}</span>
          <span>
            {company ? company + "," : ""} {jobCity}
          </span>
        </div>
      </div>
    )
  })
  return (
    <section>
      <h3>Experience</h3>
      {experience.length ? experienceState : "No information."}
    </section>
  )
}
