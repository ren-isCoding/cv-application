import React, { useState } from "react"
import { StyledCvCreator } from "../styles/CvForm.styled"
import PersonalForm from "./PersonalForm"
import Education from "./Education"
import Experience from "./Experience"
import SkillsForm from "./SkillsForm"

const CvForm = ({ cv, onChangePersonal, addEducation, onChangeEducation }) => {
    return (
        <StyledCvCreator>
            <PersonalForm onChangePersonal={onChangePersonal} />
            <Education
                education={cv.education}
                onChange={onChangeEducation}
                addEducation={addEducation}
            />
            <Experience />
            <SkillsForm />
        </StyledCvCreator>
    )
}

export default CvForm
