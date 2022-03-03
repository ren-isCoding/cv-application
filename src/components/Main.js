import React from "react"
import CvCreator from "./CvCreator"
import CvDisplay from "./CvDisplay"
import { StyledMain } from "./styles/Main.styled"

export default function Main() {
    return (
        <StyledMain>
            <CvCreator />
            <CvDisplay />
        </StyledMain>
    )
}
