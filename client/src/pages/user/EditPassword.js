// Packages
import React, { useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

// Components
import { AuthContext } from "../../context/auth"
import * as Font from "../../components/styles/Font"
import Page from "../../components/layouts/Page"
import Form from "../../components/forms/Form"
import Input from "../../components/forms/Input"
import ErrorMessage from "../../components/forms/ErrorMessage"

function EditPassword({ edited, setEdited }) {
    const { user, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handlePassword = e => setPassword(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = { id: user._id, password }

        axios
            .put("/users/edit-password", requestBody)
            .then(res => {
                const { user } = res.data
                updateUser(user)
                setEdited(!edited)
                navigate("/my-account")
            })
            .catch(err => {
                const errorDescription = err.response.data.errorMessage
                setErrorMessage(errorDescription)
            })
    }

    return (
        <Page title="Edit your password">
            <Font.H1>Edit your password</Font.H1>

            <Form
                btnprimary="Save changes"
                btncancel="/my-account"
                onSubmit={handleSubmit}
            >
                <Input
                    label="New password"
                    inputtype="password"
                    id="password"
                    onChange={handlePassword}
                    value={password}
                />
            </Form>

            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Page>
    )
}

export default EditPassword
