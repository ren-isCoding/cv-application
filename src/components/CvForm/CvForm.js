import React from "react"
import { StyledCvCreator } from "../styles/CvForm.styled"
import PersonalForm from "./PersonalForm"
import EducationForm from "./EducationForm"
import ExperienceForm from "./ExperienceForm"
import SkillsForm from "./SkillsForm"

const CvForm = ({
    cv,
    changePersonal,
    changePhoto,
    changeEducation,
    addEducation,
    deleteEducation,
    changeExperience,
    addExperience,
    deleteExperience,
    addSkill,
}) => {
    return (
        <StyledCvCreator>
            <PersonalForm changePersonal={changePersonal} changePhoto={changePhoto} />
            <EducationForm
                education={cv.education}
                changeEducation={changeEducation}
                addEducation={addEducation}
                deleteEducation={deleteEducation}
            />
            <ExperienceForm
                experience={cv.experience}
                changeExperience={changeExperience}
                addExperience={addExperience}
                deleteExperience={deleteExperience}
            />
            <SkillsForm addSkill={addSkill} />
        </StyledCvCreator>
    )
}

export default CvForm
