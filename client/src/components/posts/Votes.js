// Packages
import React, { useState, useContext } from "react"
import styled, { css } from "styled-components"
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

    ${props =>
        props.post &&
        css`
            display: flex;
            align-items: center;
        `}
`

const InputContainer = styled.span`
    input {
        display: none;

        &:disabled ~ label {
            color: ${Variables.Colors.Gray};
            cursor: not-allowed;

            &:hover {
                background-color: transparent;
            }
        }
    }
`

const Label = styled.label`
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
    cursor: pointer;

    &:hover {
        background-color: ${Variables.Colors.LighterGray};
    }
`

function Votes({ topic, edited, setEdited, ...props }) {
    const { user, updateUser, isLoggedIn } = useContext(AuthContext)

    const [likes, setLikes] = useState(topic.likes)
    const [checked, setChecked] = useState(
        isLoggedIn ? topic.likesBy.includes(user._id) : false
    )

    const handleLike = e => {
        e.preventDefault()

        if (isLoggedIn) {
            if (e.target.checked) {
                setLikes(likes + 1)
                setChecked(true)
                axios
                    .put(`/topics/like/${topic._id}`, {
                        likes: topic.likes + 1,
                        user: user._id,
                        likesBy: user._id,
                    })
                    .then(res => {
                        const { user } = res.data
                        updateUser(user)
                        setEdited(!edited)
                    })
                    .catch(err => console.log(err))
            } else {
                setLikes(likes - 1)
                setChecked(false)
                axios
                    .put(`/topics/dislike/${topic._id}`, {
                        likes: topic.likes === 1 ? 0 : topic.likes - 1,
                        user: user._id,
                        likesBy: user._id,
                    })
                    .then(res => {
                        const { user } = res.data
                        updateUser(user)
                        setEdited(!edited)
                    })
                    .catch(err => console.log(err))
            }
        }
    }

    return (
        <Container {...props}>
            <InputContainer>
                <input
                    type="checkbox"
                    id={`likes-${topic._id}`}
                    disabled={
                        !isLoggedIn ||
                        (user._id === topic.createdBy._id && "disabled")
                    }
                    defaultChecked={
                        isLoggedIn && topic.likesBy.includes(user._id) && true
                    }
                    onChange={handleLike}
                />

                <Label htmlFor={`likes-${topic._id}`}>
                    <Icon name={checked ? "heart-full" : "heart"} size={24} />
                </Label>
            </InputContainer>

            <Font.P>{likes}</Font.P>
        </Container>
    )
}

export default Votes
