// Imports
import React, { useState, useContext } from "react"
import { Grid, Font, Icon, Flexbox } from "tsx-library-julseb"
import { getToday } from "js-utils-julseb"
import getTimeSeconds from "../../../utils/getTimeSeconds"

import { AuthContext } from "../../../context/auth"
import topicsService from "../../../api/topics.service"
import usersService from "../../../api/users.service"

import { Container, Label } from "./styles"

const Vote = ({ topic, edited, setEdited, topicCard }) => {
    const { user, setUser, setToken, isLoggedIn } = useContext(AuthContext)

    const [likes, setLikes] = useState(topic.likes <= 0 ? 0 : topic.likes)
    const [isChecked, setIsChecked] = useState(
        isLoggedIn ? topic.likedBy.includes(user._id) : false
    )

    const handleLike = e => {
        e.preventDefault()

        if (e.target.checked) {
            setIsChecked(true)
            setLikes(likes + 1)

            const requestBody = {
                likes: topic.likes + 1,
                user: user._id,
                likedBy: user._id,
            }

            const notificationBody = {
                receiver: topic.createdBy,
                topic,
                type: "like",
                date: getToday(),
                time: getTimeSeconds(),
                sender: user,
            }

            if (user._id !== topic.createdBy._id) {
                usersService
                    .newNotification(notificationBody)
                    .then()
                    .catch(err => console.log(err))
            }

            topicsService
                .likeTopic(topic._id, requestBody)
                .then(res => {
                    setUser(res.data.user)
                    setToken(res.data.authToken)
                    setEdited(!edited)
                    window.location.reload(false)
                })
                .catch(err => console.log(err))
        } else {
            setIsChecked(false)
            setLikes(likes <= 0 ? 0 : likes - 1)

            const requestBody = {
                likes: topic.likes <= 0 ? 0 : topic.likes - 1,
                user: user._id,
                likedBy: user._id,
            }

            topicsService
                .dislikeTopic(topic._id, requestBody)
                .then(res => {
                    setUser(res.data.user)
                    setToken(res.data.authToken)
                    setEdited(!edited)
                    window.location.reload(false)
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <Grid
            as={topicCard && Flexbox}
            alignItems={topicCard ? "center" : "start"}
            gap="xs"
            justifyItems="center"
        >
            <Container>
                <input
                    type="checkbox"
                    id={`likes-${topic._id}`}
                    disabled={
                        (!isLoggedIn || user._id === topic.createdBy._id) &&
                        true
                    }
                    defaultChecked={isLoggedIn && isChecked}
                    onChange={handleLike}
                />

                <Label htmlFor={`likes-${topic._id}`} aria-label="Like button">
                    <Icon src={isChecked ? "heart-full" : "heart"} size={24} />
                </Label>
            </Container>

            <Font.P>{likes}</Font.P>
        </Grid>
    )
}

export default Vote
