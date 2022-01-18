// Packages
import React, { useState, useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"

// Components
import { AuthContext } from "../../context/auth"
import * as Font from "../../components/styles/Font"
import Page from "../../components/layouts/Page"
import Form from "../../components/forms/Form"
import Input from "../../components/forms/Input"
import MarkdownEditor from "../../components/forms/MarkdownEditor"
import ErrorMessage from "../../components/forms/ErrorMessage"

// Utils
import getToday from "../../components/utils/getToday"
import getTimeNow from "../../components/utils/getTimeNow"

function EditTopic({ topic, post, ...props }) {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const [title, setTitle] = useState(topic.title)
    const [category, setCategory] = useState(topic.category)
    const [body, setBody] = useState(topic.posts[0].body)
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleTitle = e => setTitle(e.target.value)
    const handleCategory = e => setCategory(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = {
            title,
            category,
            body,
            dateEdited: getToday(),
            timeEdited: getTimeNow(),
            postId: topic.posts[0]._id,
        }

        axios
            .put(`/topics/edit-topic/${topic._id}`, requestBody)
            .then(() => {
                navigate(`/topics/${topic._id}`)
                window.location.reload(false)
            })
            .catch(err => {
                const errorDescription = err.response.data.message
                setErrorMessage(errorDescription)
            })
    }

    return user._id !== topic.createdBy._id ? (
        <Navigate to={`/topics/${topic._id}`} />
    ) : (
        <Page title={`Edit ${topic.title}`}>
            <Font.H1>Edit {topic.title}</Font.H1>

            <Form
                btnprimary="Save changes"
                btncancel={`/topics/${topic._id}`}
                onSubmit={handleSubmit}
            >
                <Input
                    label="Title"
                    id="title"
                    onChange={handleTitle}
                    value={title}
                />

                <Input
                    label="Category"
                    id="category"
                    onChange={handleCategory}
                    value={category}
                />

                <MarkdownEditor
                    label="Body"
                    id="body"
                    onChange={setBody}
                    value={body}
                />
            </Form>

            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Page>
    )
}

export default EditTopic
