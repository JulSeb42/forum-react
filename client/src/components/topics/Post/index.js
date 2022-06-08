// Imports
import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    MarkdownContainer,
    Grid,
    Flexbox,
    Button,
    Hr,
    Font,
} from "tsx-library-julseb"
import { getToday, convertDateShort } from "js-utils-julseb"

import { AuthContext } from "../../../context/auth"
import topicsService from "../../../api/topics.service"
import postsService from "../../../api/posts.service"

import TopicIntro from "../TopicIntro"
import PostHeader from "../../user/PostHeader"
import Vote from "../Vote"
import DangerZone from "../../DangerZone"
import EditTopic from "../EditTopic"

import convertTimeShort from "../../../utils/convertTimeShort"

const Post = ({ post, topic, first }) => {
    const { isLoggedIn, user } = useContext(AuthContext)
    const navigate = useNavigate()

    const [editMode, setEditMode] = useState(false)

    const handleDeleteTopic = e => {
        e.preventDefault()

        postsService
            .deletePost(post._id)
            .then(() => {
                topicsService.deleteTopic(topic._id).then(() => {
                    navigate("/")
                    window.location.reload(false)
                })
            })
            .catch(err => console.log(err))
    }
    const handleDeletePost = e => {
        e.preventDefault()

        postsService
            .deletePost(post._id)
            .then(() => window.location.reload(false))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Grid gap="s">
                {first && <TopicIntro topic={topic} />}

                <PostHeader post={post} />

                <MarkdownContainer>{post.body}</MarkdownContainer>

                {post.dateEdited && (
                    <Font.Small color="gray">
                        Last edited{" "}
                        {post.dateEdited === getToday()
                            ? "today"
                            : convertDateShort(post.dateEdited)}{" "}
                        at {convertTimeShort(post.timeEdited)}
                    </Font.Small>
                )}

                {(first ||
                    (isLoggedIn && user._id === post.poster._id) ||
                    (isLoggedIn && user.admin)) && (
                    <Flexbox
                        justifyContent={first ? "space-between" : "flex-end"}
                    >
                        {first && <Vote topic={topic} topicCard />}

                        {((isLoggedIn && user._id === post.poster._id) ||
                            (isLoggedIn && user.admin)) && (
                            <Flexbox alignItems="center" gap="xs">
                                <DangerZone
                                    textBtnOpen={`Delete ${
                                        first ? "topic" : "post"
                                    }`}
                                    text={`Are you sure you want to delete this ${
                                        first ? "topic" : "post"
                                    }?`}
                                    textBtnPrimary={`Yes, delete this ${
                                        first ? "topic" : "post"
                                    }`}
                                    onClickPrimary={
                                        first
                                            ? handleDeleteTopic
                                            : handleDeletePost
                                    }
                                    topic
                                />

                                <Button
                                    btnStyle="text"
                                    onClick={() => setEditMode(true)}
                                >
                                    Edit
                                </Button>

                                <EditTopic
                                    topic={topic}
                                    post={post}
                                    setEditMode={setEditMode}
                                    editMode={editMode}
                                    first={first}
                                />
                            </Flexbox>
                        )}
                    </Flexbox>
                )}
            </Grid>

            {first && (
                <>
                    <Font.P>
                        {topic.posts.length - 1} answer
                        {topic.posts.length - 1 > 1 ? "s" : ""}
                    </Font.P>

                    <Hr />
                </>
            )}
        </>
    )
}

export default Post
