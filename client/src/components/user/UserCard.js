// Packages
import React, { useContext, useState } from "react"
import styled from "styled-components"
import axios from "axios"

// Components
import { AuthContext } from "../../context/auth"
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import TitlePicture from "./TitlePicture"
import Icon from "../ui/Icon"
import Toggle from "../forms/Toggle"

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

function UserCard(props) {
    const { isLoggedIn, user } = useContext(AuthContext)

    const [admin, setAdmin] = useState(props.user.admin)

    const handleAdmin = e => {
        e.preventDefault()

        if (e.target.checked) {
            setAdmin(true)

            axios
                .put(`/users/admin/${props.user._id}`, { admin: true })
                .then(() => window.location.reload(false))
                .catch(err => console.log(err))
        } else {
            setAdmin(false)

            axios
                .put(`/users/admin/${props.user._id}`, { admin: false })
                .then(() => window.location.reload(false))
                .catch(err => console.log(err))
        }
    }

    const conditionToggle = user.admin === true && user._id !== props.user._id

    return (
        <Container>
            <TitleContainer>
                <TitlePicture
                    user={props.user}
                    size={32}
                    dashboard={props.dashboard}
                />

                <TextIcon>
                    <Icon name="map" size={16} />
                    {props.user.location}
                </TextIcon>
            </TitleContainer>

            <Font.P>{props.user.bio}</Font.P>

            {isLoggedIn && conditionToggle  && (
                <Toggle
                    label="Set user as an admin"
                    id="admin"
                    defaultChecked={admin}
                    onChange={handleAdmin}
                />
            )}
        </Container>
    )
}

export default UserCard
