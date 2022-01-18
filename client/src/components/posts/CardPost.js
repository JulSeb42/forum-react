// Packages
import React, { useContext, useState } from "react"
import styled from "styled-components"
import axios from "axios"

// Components
import { AuthContext } from "../../context/auth"
import * as Variables from "../styles/Variables"
import PostHeader from "./PostHeader"
import Button from "../ui/Button"
import Form from "../forms/Form"
import MarkdownEditor from "../forms/MarkdownEditor"
import ErrorMessage from "../forms/ErrorMessage"
import MarkdownContainer from "./MarkdownContainer"
import ModalDanger from "../forms/ModalDanger"
import ButtonsContainer from "../forms/ButtonsContainer"

// Utils
import getToday from "../utils/getToday"
import getTimeNow from "../utils/getTimeNow"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.M};
`

function CardPost({ post, ...props }) {
    const { isLoggedIn, user } = useContext(AuthContext)

    // Edit
    const [editMode, setEditMode] = useState(false)
    const [body, setBody] = useState(post.body)
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleReset = () => {
        setEditMode(false)
        setBody(post.body)
    }

    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = {
            body,
            dateEdited: getToday(),
            timeEdited: getTimeNow(),
        }

        axios
            .put(`/posts/edit-post/${post._id}`, requestBody)
            .then(() => {
                window.location.reload(false)
            })
            .catch(err => {
                const errorDescription = err.response.data.message
                setErrorMessage(errorDescription)
            })
    }

    // Delete
    const handleDelete = () => {
        axios
            .delete(`/posts/delete-post/${post._id}`)
            .then(() => window.location.reload(false))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <PostHeader post={post} />

            {editMode ? (
                <>
                    <Form
                        btnprimary="Edit your post"
                        btnreset="Cancel"
                        onClickReset={handleReset}
                        onSubmit={handleSubmit}
                    >
                        <MarkdownEditor onChange={setBody} value={body} />
                    </Form>

                    {errorMessage && (
                        <ErrorMessage>{errorMessage}</ErrorMessage>
                    )}
                </>
            ) : (
                <>
                    <MarkdownContainer body={body} />

                    {isLoggedIn && post.poster._id === user._id && (
                        <ButtonsContainer align="flex-end">
                            {/* <Button btnstyle="danger-secondary">Delete</Button> */}
                            <ModalDanger
                                btnopen="Delete"
                                text="Are you sure you want to delete your answer?"
                                textbtnprimary="Yes, delete this answer"
                                onClickPrimary={handleDelete}
                                topicId={props.topicId}
                            />

                            <Button
                                btnstyle="secondary"
                                onClick={() => setEditMode(true)}
                            >
                                Edit
                            </Button>
                        </ButtonsContainer>
                    )}
                </>
            )}
        </Container>
    )
}

export default CardPost
