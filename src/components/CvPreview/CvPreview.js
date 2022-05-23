import React, { Component } from "react"
import { StyledCvPreview } from "../styles/CvPreview.styled"
import Header from "./Header"
import MainInfo from "./MainInfo"
import SideInfo from "./SideInfo"

export default function CvPreview({ cv }) {
    return (
        <StyledCvPreview>
            <Header personal={cv.personalInfo} />
            <MainInfo personal={cv.personalInfo} />
            <SideInfo />
        </StyledCvPreview>
    )
}
