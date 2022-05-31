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

        if (type === "file") {
            handleChangePhoto(e)
            return
        }

        setCv((prevState) => ({
            ...prevState,
            personalInfo: {
                ...prevState.personalInfo,
                [name]: value,
            },
        }))
    }

    const handleChangePhoto = (e) => {
        const { name } = e.target

        const file = e.target.files[0]
        if (!file) return
        const reader = new FileReader()
        reader.onload = () => {
            setCv((prevState) => ({
                ...prevState,
                personalInfo: {
                    ...prevState.personalInfo,
                    [name]: reader.result,
                },
            }))
        }
        reader.readAsDataURL(file)
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

    const handleAddExperience = () => {
        setCv((prevState) => ({
            ...prevState,
            experience: [
                ...prevState.experience,
                {
                    id: uuidv4(),
                    job: "",
                    company: "",
                    jobCity: "",
                    jobStart: "",
                    jobEnd: "",
                },
            ],
        }))
    }

    const handleDeleteExperience = (id) => {
        setCv((prevState) => {
            const newExperience = prevState.experience.filter(
                (experienceObj) => experienceObj.id !== id
            )
            return { ...prevState, experience: [...newExperience] }
        })
    }

    const handleAddSkill = (e, value) => {
        e.preventDefault()
        setCv((prevState) => ({
            ...prevState,
            skills: [...prevState.skills, { id: uuidv4(), name: value }],
        }))
    }

    const handleDeleteSkill = (id) => {
        setCv((prevState) => {
            const newSkills = prevState.skills.filter((skillObj) => skillObj.id !== id)
            return { ...prevState, skills: [...newSkills] }
        })
    }

    const handleLoadExample = () => {
        setCv(CvExample)
    }

    return (
        <StyledMain>
            <CvForm
                cv={cv}
                changePersonal={handleChangePersonal}
                changePhoto={handleChangePhoto}
                addEducation={handleAddEducation}
                changeEducation={handleChangeEducation}
                deleteEducation={handleDeleteEducation}
                changeExperience={handleChangeExperience}
                addExperience={handleAddExperience}
                deleteExperience={handleDeleteExperience}
                addSkill={handleAddSkill}
                deleteSkill={handleDeleteSkill}
                loadExample={handleLoadExample}
            />
            <CvPreview cv={cv} />
        </StyledMain>
    )
}

export default Main
