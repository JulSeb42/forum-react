// Packages
import React, { useState, useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

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

function NewTopic() {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [body, setBody] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleTitle = e => setTitle(e.target.value)
    const handleCategory = e => setCategory(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = {
            title,
            createdBy: user,
            body,
            dateCreated: getToday(),
            timeCreated: getTimeNow(),
            category,
        }

        axios
            .put("/topics/new-topic", requestBody)
            .then(() => {
                navigate("/")
            })
            .catch(err => {
                const errorDescription = err.response.data.message
                setErrorMessage(errorDescription)
            })
    }

    return (
        <Page title="Add a new topic" noAside>
            <Font.H1>Create a new topic</Font.H1>

            <Form
                btnprimary="Create a new topic"
                btncancel="/"
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

export default NewTopic
