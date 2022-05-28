import React, { useState, useRef } from "react"
import CvForm from "./CvForm/CvForm"
import CvPreview from "./CvPreview/CvPreview"
import { StyledMain } from "./styles/Main.styled"
import CvEmpty from "./utils/CvEmpty"
import CvExample from "./utils/CvExample"
import { v4 as uuidv4 } from "uuid"

const Main = () => {
    const [cv, setCv] = useState(CvEmpty)

    const handleChangePersonal = (e) => {
        const { name, value, type } = e.target

        setCv((prevState) => ({
            ...prevState,
            personalInfo: {
                ...prevState.personalInfo,
                [name]: value,
            },
        }))
    }

    const handleChangeEducation = (e, id) => {
        const { name, value } = e.target

        setCv((prevState) => {
            const newEducation = prevState.education.map((educationObj) => {
                if (educationObj.id === id) {
                    return { ...educationObj, [name]: value }
                }
                return educationObj
            })
            return { ...prevState, education: [...newEducation] }
        })
    }

    const handleAddEducation = () => {
        setCv((prevState) => ({
            ...prevState,
            education: [
                ...prevState.education,
                {
                    id: uuidv4(),
                    school: "",
                    schoolCity: "",
                    degree: "",
                    schoolStart: "",
                    schoolEnd: "",
                },
            ],
        }))
    }

    const handleDeleteEducation = (id) => {
        setCv((prevState) => {
            const newEducation = prevState.education.filter(
                (educationObj) => educationObj.id !== id
            )
            return { ...prevState, education: [...newEducation] }
        })
    }

    const handleChangeExperience = (e, id) => {
        const { name, value } = e.target

        setCv((prevState) => {
            const newExperience = prevState.experience.map((experienceObj) => {
                if (experienceObj.id === id) {
                    return { ...experienceObj, [name]: value }
                }
                return experienceObj
            })
            return { ...prevState, experience: [...newExperience] }
        })
    }

    return (
        <StyledMain>
            <CvForm
                cv={cv}
                changePersonal={handleChangePersonal}
                addEducation={handleAddEducation}
                changeEducation={handleChangeEducation}
                deleteEducation={handleDeleteEducation}
                changeExperience={handleChangeExperience}
            />
            <CvPreview cv={cv} />
        </StyledMain>
    )
}

export default Main
