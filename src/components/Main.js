import React, { useState } from "react"
import CvForm from "./CvForm/CvForm"
import CvPreview from "./CvPreview/CvPreview"
import { StyledMain } from "./styles/Main.styled"

export default function Main() {
    const [value, setValue] = useState([])

    return (
        <StyledMain>
            <CvForm setValue={setValue} />
            <CvPreview value={value} />
        </StyledMain>
    )
}
