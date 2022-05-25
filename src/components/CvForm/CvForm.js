import React, { useState } from "react"
import { StyledCvCreator } from "../styles/CvForm.styled"
import PersonalForm from "./PersonalForm"
import EducationForm from "./EducationForm"
import ExperienceForm from "./ExperienceForm"
import SkillsForm from "./SkillsForm"

const CvForm = ({ cv, onChangePersonal }) => {
    return (
        <StyledCvCreator>
            <PersonalForm onChange={onChangePersonal} />
            <EducationForm />
            <ExperienceForm />
            <SkillsForm />
        </StyledCvCreator>
    )
}

export default CvForm
