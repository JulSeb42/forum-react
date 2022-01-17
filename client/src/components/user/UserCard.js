// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import TitlePicture from "./TitlePicture"
import Icon from "../ui/Icon"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.S};
    background-color: ${Variables.Colors.White};
    border-radius: ${Variables.Radiuses.M};
    box-shadow: ${Variables.Effects.Shadow};
    padding: ${Variables.Margins.M};
`

const TitleContainer = styled.span`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XS};
`

const TextIcon = styled(Font.P)`
    color: ${Variables.Colors.Gray};
    display: flex;
    align-items: center;
    
    & > span {
        margin-right: ${Variables.Margins.XXS};
    }
`

function UserCard({ user, ...props }) {
    return (
        <Container>
            <TitleContainer>
                <TitlePicture user={user} size={32} dashboard={props.dashboard} />

                <TextIcon>
                    <Icon name="map" size={16} />
                    {user.location}
                </TextIcon>
            </TitleContainer>

            <Font.P>{user.bio}</Font.P>
        </Container>
    )
}

export default UserCard
