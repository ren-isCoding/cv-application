import React, { useState } from "react"
import { StyledCvCreator } from "../styles/CvForm.styled"
import PersonalForm from "./PersonalForm"
import Education from "./Education"
import Experience from "./Experience"
import SkillsForm from "./SkillsForm"

const CvForm = ({
    cv,
    onChangePersonal,
    onChangeEducation,
    addEducation,
    deleteEducation,
    changeExperience,
}) => {
    return (
        <StyledCvCreator>
            <PersonalForm onChangePersonal={onChangePersonal} />
            <Education
                education={cv.education}
                onChangeEducation={onChangeEducation}
                addEducation={addEducation}
                deleteEducation={deleteEducation}
            />
            <Experience experience={cv.experience} changeExperience={changeExperience} />
            <SkillsForm />
        </StyledCvCreator>
    )
}

export default CvForm
