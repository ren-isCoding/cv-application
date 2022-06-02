import React from "react"
import { StyledCvCreator } from "../styles/CvForm.styled"
import PersonalForm from "./PersonalForm"
import EducationForm from "./EducationForm"
import ExperienceForm from "./ExperienceForm"
import SkillsForm from "./SkillsForm"
import OtherOptions from "./OtherOptions"

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
    deleteSkill,
    printCv,
    loadExample,
    resetCv,
}) => {
    return (
        <StyledCvCreator>
            <PersonalForm
                personal={cv.personalInfo}
                changePersonal={changePersonal}
                changePhoto={changePhoto}
            />
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
            <SkillsForm
                skills={cv.skills}
                addSkill={addSkill}
                deleteSkill={deleteSkill}
            />
            <OtherOptions loadExample={loadExample} resetCv={resetCv} printCv={printCv} />
        </StyledCvCreator>
    )
}

export default CvForm
