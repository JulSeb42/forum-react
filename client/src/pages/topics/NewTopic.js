// Imports
import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Font, Form, Input, Alert } from "tsx-library-julseb"
import { slugify, getToday } from "js-utils-julseb"

import { AuthContext } from "../../context/auth"
import topicsService from "../../api/topics.service"

import Page from "../../components/layouts/Page"

import { commandsMarkdown } from "../../config/markdown.config"
import getTimeSeconds from "../../utils/getTimeSeconds"

const NewTopic = ({ edited, setEdited }) => {
    const navigate = useNavigate()
    const { user, setUser, setToken } = useContext(AuthContext)

    const [inputs, setInputs] = useState({
        title: "",
        category: "",
    })
    const [body, setBody] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleChange = e =>
        setInputs({ ...inputs, [e.target.id]: e.target.value })

    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = {
            category: slugify(inputs.category),
            title: inputs.title,
            body,
            createdBy: user,
            dateCreated: getToday(),
            timeCreated: getTimeSeconds(),
        }

        topicsService
            .newTopic(requestBody)
            .then(res => {
                setUser(res.data.user)
                setToken(res.data.authToken)
                setEdited(!edited)
                navigate(`/topics/${res.data.createdTopic._id}`)
            })
            .catch(err => setErrorMessage(err.response.data.message))
    }

    return (
        <Page title="Create a new topic" mainWidth={400}>
            <Font.H1>Create a new topic</Font.H1>

            <Form
                btnPrimary="Create a new topic"
                btnCancel={-1}
                onSubmit={handleSubmit}
            >
                <Input
                    label="Title"
                    id="title"
                    onChange={handleChange}
                    value={inputs.title}
                    autoFocus
                />

                <Input
                    label="Category"
                    id="category"
                    onChange={handleChange}
                    value={inputs.category}
                />

                <Input
                    label="Body"
                    type="markdown"
                    id="body"
                    onChange={setBody}
                    value={body}
                    commands={commandsMarkdown}
                />
            </Form>

            {errorMessage && (
                <Alert as={Font.P} color="danger">
                    {errorMessage}
                </Alert>
            )}
        </Page>
    )
}

export default NewTopic
