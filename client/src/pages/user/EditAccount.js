// Packages
import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

// Components
import { AuthContext } from "../../context/auth"
import * as Font from "../../components/styles/Font"
import Page from "../../components/layouts/Page"
import Form from "../../components/forms/Form"
import Input from "../../components/forms/Input"
import DangerZone from "../../components/forms/DangerZone"
import Link from "../../components/utils/LinkScroll"
import ErrorMessage from "../../components/forms/ErrorMessage"

function EditAccount({ edited, setEdited }) {
    const { user, updateUser, logoutUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const [fullName, setFullName] = useState(user.fullName)
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleFullName = e => setFullName(e.target.value)

    // Edit account
    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = { id: user._id, fullName }

        axios
            .put("/users/edit", requestBody)
            .then(res => {
                const { user } = res.data
                updateUser(user)
                setEdited(!edited)
                navigate("/my-account")
            })
            .catch(err => {
                const errorDescription = err.response.data.message
                setErrorMessage(errorDescription)
            })
    }

    // Delete account
    const handleDelete = () => {
        axios
            .delete(`/users/delete-user/${user._id}`)
            .then(() => {
                logoutUser()
                navigate("/goodbye")
            })
            .catch(err => console.log(err))
    }

    return (
        <Page title="Edit your account">
            <Font.H1>Edit your account</Font.H1>

            <Form
                btnprimary="Save changes"
                btncancel="/my-account"
                onSubmit={handleSubmit}
            >
                <Input
                    label="Full name"
                    id="fullName"
                    onChange={handleFullName}
                    value={fullName}
                />

                <Input
                    label="Email"
                    type="email"
                    id="email"
                    value={user.email}
                    disabled
                />
            </Form>

            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

            <Font.P>
                <Link to="/my-account/edit-password">Edit your password.</Link>
            </Font.P>

            <DangerZone onClick={handleDelete} />
        </Page>
    )
}

export default EditAccount
