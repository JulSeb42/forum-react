// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Font from "../styles/Font"
import * as Variables from "../styles/Variables"
import ProfilePicture from "./ProfilePicture"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: ${props => `${props.size}px`} 1fr;
    gap: ${Variables.Margins.XS};

    img {
        margin-top: 10px;
    }
`

function TitlePicture({ user, ...props }) {
    return (
        <Container size={props.size || 32}>
            <ProfilePicture
                src={user.imageUrl}
                alt={user.username}
                size={props.size || 32}
            />

            <Font.H1>
                {props.dashboard && "Hello "}
                {user.username}
            </Font.H1>
        </Container>
    )
}

export default TitlePicture
