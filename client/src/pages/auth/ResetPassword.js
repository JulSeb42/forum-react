// Packages
import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

// Components
import Page from "../../components/layouts/Page"
import Form from "../../components/forms/Form"
import Input from "../../components/forms/Input"

function ResetPassword() {
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handlePassword = e => setPassword(e.target.value)

    const navigate = useNavigate()

    const data = window.location.href.split("/")
    const token = data[4]
    const id = data[5]

    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = { id, password }

        axios
            .put(`/auth/reset-password/${token}/${id}`, requestBody)
            .then(() => {
                navigate("/login")
            })
            .catch(err => {
                const errorDescription = err.response.data.message
                setErrorMessage(errorDescription)
            })
    }

    return (
        <Page title="Reset your password">
            <h1>Reset your password</h1>

            <Form btnprimary="Send" onSubmit={handleSubmit}>
                <Input
                    label="New password"
                    inputtype="password"
                    id="password"
                    onChange={handlePassword}
                    value={password}
                />
            </Form>

            {errorMessage && <p>{errorMessage}</p>}
        </Page>
    )
}

export default ResetPassword
