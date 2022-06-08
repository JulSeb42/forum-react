// Imports
import React, { useState } from "react"
import {
    Form,
    Input,
    Flexbox,
    Button,
    Alert,
    Font,
    Modal,
    Grid,
} from "tsx-library-julseb"
import { getToday, slugify } from "js-utils-julseb"

import topicsService from "../../api/topics.service"
import postsService from "../../api/posts.service"

import CardContainer from "../ui/CardContainer"

import { commandsMarkdown } from "../../config/markdown.config"
import getTimeSeconds from "../../utils/getTimeSeconds"

const EditTopic = ({ topic, post, editMode, setEditMode, first }) => {
    const [inputs, setInputs] = useState({
        title: topic && topic.title,
        category: topic && slugify(topic.category),
    })
    const [body, setBody] = useState(post.body)
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleChange = e =>
        setInputs({ ...inputs, [e.target.id]: e.target.value })

    const handleCancel = () => {
        setInputs({
            title: topic && topic.title,
            category: topic && topic.category,
        })
        setBody(post.body)
        setErrorMessage(undefined)
        setEditMode(false)
    }

    const handleSubmitTopic = e => {
        e.preventDefault()

        const requestBody = {
            title: inputs.title,
            category: inputs.category,
            dateEdited: getToday(),
            timeEdited: getTimeSeconds(),
            postId: post._id,
            body,
        }

        topicsService
            .editTopic(topic._id, requestBody)
            .then(() => window.location.reload(false))
            .catch(err => setErrorMessage(err.response.data.message))
    }

    const handleSubmitPost = e => {
        e.preventDefault()

        const requestBody = {
            body,
            dateEdited: getToday(),
            timeEdited: getTimeSeconds(),
        }

        postsService
            .editPost(post._id, requestBody)
            .then(() => window.location.reload(false))
            .catch(err => setErrorMessage(err.response.data.message))
    }

    return (
        <Modal isOpen={editMode}>
            <CardContainer as={Grid} gap="xs" edit>
                <Font.H4>Edit {first ? "topic" : "post"}</Font.H4>

                <Form onSubmit={first ? handleSubmitTopic : handleSubmitPost}>
                    {first && (
                        <>
                            <Input
                                label="Title"
                                id="title"
                                onChange={handleChange}
                                value={inputs.title}
                            />

                            <Input
                                label="Category"
                                id="category"
                                onChange={handleChange}
                                value={inputs.category}
                            />
                        </>
                    )}

                    <Input
                        label="Body"
                        id="body"
                        type="markdown"
                        onChange={setBody}
                        value={body}
                        commands={commandsMarkdown}
                    />

                    <Flexbox alignItems="center">
                        <Button type="submit">Save changes</Button>

                        <Button btnStyle="text" onClick={handleCancel}>
                            Cancel
                        </Button>
                    </Flexbox>
                </Form>

                {errorMessage && (
                    <Alert as={Font.P} color="danger">
                        {errorMessage}
                    </Alert>
                )}
            </CardContainer>
        </Modal>
    )
}

export default EditTopic
