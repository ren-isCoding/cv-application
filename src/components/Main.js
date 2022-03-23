import React, { useState } from "react"
import CvCreator from "./CvCreator"
import CvDisplay from "./CvDisplay"
import { StyledMain } from "./styles/Main.styled"

export default function Main() {
    const [state, setState] = useState({})

    return (
        <StyledMain>
            <CvCreator setState={setState} />
            <CvDisplay state={state} />
        </StyledMain>
    )
}
