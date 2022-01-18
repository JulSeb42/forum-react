// Packages
import React, { useState, useContext } from "react"
import axios from "axios"

// Components
import { AuthContext } from "../../context/auth"
import * as Font from "../styles/Font"
import Form from "../forms/Form"
import MarkdownEditor from "../forms/MarkdownEditor"
import Item from "../layouts/Item"
import ErrorMessage from "../forms/ErrorMessage"

// Utils
import getToday from "../utils/getToday"
import getTimeNow from "../utils/getTimeNow"

function Answer({ topic, ...props }) {
    const { user } = useContext(AuthContext)

    const [body, setBody] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = {
            body,
            poster: user._id,
            dateCreated: getToday(),
            timeCreated: getTimeNow(),
            topicId: topic._id,
        }

        axios
            .put("/posts/new-post", requestBody)
            .then(() => {
                window.location.reload(false)
            })
            .catch(err => {
                const errorDescription = err.response.data.message
                setErrorMessage(errorDescription)
            })
    }

    return (
        <Item>
            <Font.H4>Your answer</Font.H4>

            <Form btnprimary="Post" onSubmit={handleSubmit}>
                <MarkdownEditor onChange={setBody} value={body} />
            </Form>

            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Item>
    )
}

export default Answer
