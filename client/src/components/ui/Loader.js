// Packages
import React from "react"
import styled, { keyframes } from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const Container = styled.span`
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    border: ${props => `${props.border}px`} solid ${Variables.Colors.White};
    border-bottom-color: ${props => props.color};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${Rotation} 1s linear infinite;
    margin-right: ${Variables.Margins.XS};
`

function Loader(props) {
    return (
        <Container
            border={props.border || 2}
            color={props.color || Variables.Colors.DarkGray}
            size={props.size || 48}
        />
    )
}

export default Loader
