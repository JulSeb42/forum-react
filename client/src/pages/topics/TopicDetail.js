// Imports
import React, { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { Font, PageLoading, Alert, Form, Input, Grid } from "tsx-library-julseb"
import { getToday } from "js-utils-julseb"
import { v4 as uuid } from "uuid"

import { AuthContext } from "../../context/auth"
import topicsService from "../../api/topics.service"
import postsService from "../../api/posts.service"
import usersService from "../../api/users.service"

import Page from "../../components/layouts/Page"
import Post from "../../components/topics/Post"

import { commandsMarkdown } from "../../config/markdown.config"
import getTimeSeconds from "../../utils/getTimeSeconds"

const TopicDetail = ({ edited, setEdited }) => {
    const { isLoggedIn, user, setUser, setToken } = useContext(AuthContext)
    const { id } = useParams()

    const [topic, setTopic] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        topicsService
            .getTopic(id)
            .then(res => {
                setTopic(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [id])

    const [body, setBody] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleReset = () => setBody("")

    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = {
            body,
            poster: user,
            dateCreated: getToday(),
            timeCreated: getTimeSeconds(),
            topicId: id,
        }

        const notificationBody = {
            receiver: topic.createdBy,
            topic,
            type: "comment",
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

        postsService
            .newPost(requestBody)
            .then(res => {
                setUser(res.data.user)
                setToken(res.data.authToken)
                setEdited(!edited)
                window.location.reload(false)
            })
            .catch(err => setErrorMessage(err.response.data.message))
    }

    const title = isLoading ? "Topic" : topic.title

    return (
        <Page title={title}>
            {isLoading ? (
                <PageLoading />
            ) : (
                <>
                    {topic.posts.map((post, i) => (
                        <Post
                            topic={topic}
                            post={post}
                            first={i === 0 && true}
                            key={uuid()}
                        />
                    ))}

                    {isLoggedIn ? (
                        <>
                            <Grid
                                as={Form}
                                btnPrimary="Post"
                                btnReset="Cancel"
                                onClickReset={handleReset}
                                onSubmit={handleSubmit}
                            >
                                <Font.H4>Your answer</Font.H4>

                                <Input
                                    id="body"
                                    type="markdown"
                                    onChange={setBody}
                                    value={body}
                                    commands={commandsMarkdown}
                                />
                            </Grid>

                            {errorMessage && (
                                <Alert as={Font.P} color="danger">
                                    {errorMessage}
                                </Alert>
                            )}
                        </>
                    ) : (
                        <Grid gap="xs">
                            <Font.H4>Your answer</Font.H4>

                            <Font.P>
                                You must be logged in to post an anwser.
                            </Font.P>
                        </Grid>
                    )}
                </>
            )}
        </Page>
    )
}

export default TopicDetail
