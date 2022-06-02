import React, { Component } from "react"
import { StyledCvPreview } from "../styles/CvPreview.styled"
import Header from "./Header"
import MainInfo from "./MainInfo"
import SideInfo from "./SideInfo"

//react-to-print only works with classes

export default class CvPreview extends Component {
    render() {
        const { cv } = this.props
        return (
            <StyledCvPreview>
                <Header cv={cv} />
                <MainInfo cv={cv} />
                <SideInfo cv={cv} />
            </StyledCvPreview>
        )
    }
}
