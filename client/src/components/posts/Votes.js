// Packages
import React, { useState, useContext } from "react"
import styled from "styled-components"
import axios from "axios"

// Components
import { AuthContext } from "../../context/auth"
import * as Font from "../styles/Font"
import * as Variables from "../styles/Variables"
import Icon from "../ui/Icon"

// Styles
const Container = styled.span`
    display: grid;
    grid-template-columns: 1fr;
    align-content: start;
    justify-items: center;
    gap: ${Variables.Margins.XS};
`

const Button = styled.button`
    padding: 0;
    border: none;
    background: none;
    color: ${Variables.Colors.Primary};
    transition: ${Variables.Transitions.Short};
    border-radius: 50%;
    --size: 32px;
    width: var(--size);
    height: var(--size);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${Variables.Colors.LighterGray};
    }
`

function Votes({ topic, edited, setEdited }) {
    const { user, updateUser, isLoggedIn } = useContext(AuthContext)

    const [likes, setLikes] = useState(topic.likes)

    const like = e => {
        setLikes(topic.likes + 1)

        axios
            .put(`/topics/like/${topic._id}`, {
                likes: topic.likes + 1,
                user: user._id,
            })
            .then(res => {
                const { user } = res.data
                updateUser(user)
                setEdited(!edited)
            })
            .catch(err => console.log(err))
    }

    const dislike = e => {
        setLikes(topic.likes === 1 ? 0 : topic.likes - 1)

        axios
            .put(`/topics/dislike/${topic._id}`, {
                likes: topic.likes === 1 ? 0 : topic.likes - 1,
                user: user._id,
            })
            .then(res => {
                const { user } = res.data
                updateUser(user)
                setEdited(!edited)
            })
            .catch(err => console.log(err))
    }

    // Components
    const VoteButton = props => {
        return (
            <Button onClick={props.onClick}>
                <Icon name={props.icon} size={24} color="currentColor" />
            </Button>
        )
    }

    return (
        <Container>
            {isLoggedIn && (
                <VoteButton
                    onClick={like}
                    icon="arrow-up"
                />
            )}

            <Font.P>{likes}</Font.P>

            {isLoggedIn && <VoteButton onClick={dislike} icon="arrow-down" />}
        </Container>
    )
}

export default Votes
