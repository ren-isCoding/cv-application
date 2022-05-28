import React from "react"
import { StyledCvCreator } from "../styles/CvForm.styled"
import PersonalForm from "./PersonalForm"
import EducationForm from "./EducationForm"
import ExperienceForm from "./ExperienceForm"
import SkillsForm from "./SkillsForm"

const CvForm = ({
    cv,
    changePersonal,
    changeEducation,
    addEducation,
    deleteEducation,
    changeExperience,
}) => {
    return (
        <StyledCvCreator>
            <PersonalForm changePersonal={changePersonal} />
            <EducationForm
                education={cv.education}
                changeEducation={changeEducation}
                addEducation={addEducation}
                deleteEducation={deleteEducation}
            />
            <ExperienceForm
                experience={cv.experience}
                changeExperience={changeExperience}
            />
            <SkillsForm />
        </StyledCvCreator>
    )
}

export default CvForm
