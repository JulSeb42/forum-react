// Packages
import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { useNavigate } from "react-router-dom"

// Components
import { AuthContext } from "../../context/auth"
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import TitlePicture from "./TitlePicture"
import Icon from "../ui/Icon"
import Toggle from "../forms/Toggle"
import TitleFlex from "../ui/TitleFlex"
import Button from "../ui/Button"

// Utils
import getToday from "../utils/getToday"
import getTimeNow from "../utils/getTimeNow"

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
    const navigate = useNavigate()

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

    const conditionToggle =
        isLoggedIn && user.admin === true && user._id !== props.user._id

    // Check if there is already a conversation
    const [allConversations, setAllConversations] = useState([])
    const [hasContacted, setHasContacted] = useState(false)
    const [foundConversation, setFoundConversation] = useState(undefined)

    useEffect(() => {
        axios
            .get("/conversations/conversations")
            .then(res => setAllConversations(res.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (isLoggedIn) {
            let contacted = allConversations.find(
                conversation =>
                    (user._id === conversation.user1._id &&
                        props.user._id === conversation.user2._id) ||
                    (user._id === conversation.user2._id &&
                        props.user._id === conversation.user1._id)
            )

            if (contacted !== undefined) {
                setHasContacted(true)
                setFoundConversation(contacted)
            }
        }
    })

    const createConversation = e => {
        e.preventDefault()

        const requestBody = {
            user1: user,
            user2: props.user,
            createdDay: getToday(),
            createdTime: getTimeNow(),
        }

        axios.put("/conversations/new-conversation", requestBody).then(res => {
            navigate(`/messages/${res.data.createdConversation._id}`)
            window.location.reload(false)
        })
    }

    return (
        <Container>
            <TitleFlex>
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

                {isLoggedIn && !hasContacted && user._id !== props.user._id ? (
                    <Button btnstyle="primary" onClick={createConversation}>
                        Contact {props.user.username}
                    </Button>
                ) : isLoggedIn && hasContacted && user._id !== props.user._id ? (
                    <Button
                        btnstyle="primary"
                        to={`/messages/${foundConversation._id}`}
                    >
                        Contact {props.user.username}
                    </Button>
                ) : (
                    ""
                )}
            </TitleFlex>

            <Font.P>{props.user.bio}</Font.P>

            {conditionToggle && (
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
