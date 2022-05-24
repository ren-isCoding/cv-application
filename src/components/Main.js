import React, { useState, useRef } from "react"
import CvForm from "./CvForm/CvForm"
import CvPreview from "./CvPreview/CvPreview"
import { StyledMain } from "./styles/Main.styled"
import CvEmpty from "./utils/CvEmpty"
import CvExample from "./utils/CvExample"

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

    return (
        <StyledMain>
            <CvForm cv={cv} onChangePersonal={handleChangePersonal} />
            <CvPreview cv={cv} />
        </StyledMain>
    )
}

export default Main
