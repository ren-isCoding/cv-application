import React from "react"
import { StyledCvPreview } from "../styles/CvPreview.styled"
import Header from "./Header"
import MainInfo from "./MainInfo"
import SideInfo from "./SideInfo"

export default function CvPreview({ cv }) {
    return (
        <StyledCvPreview>
            <Header cv={cv} />
            <MainInfo cv={cv} />
            <SideInfo cv={cv} />
        </StyledCvPreview>
    )
}
