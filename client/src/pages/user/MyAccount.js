// Packages
import React, { useContext } from "react"
import { Link } from "react-router-dom"

// Components
import { AuthContext } from "../../context/auth"
import Page from "../../components/layouts/Page"

// Utils
import getFirstName from "../../components/utils/getFirstName"

function MyAccount() {
    const { user } = useContext(AuthContext)

    return (
        <Page title={user.fullName}>
            <h1>Hello {getFirstName(user.fullName)}</h1>

            {!user.verified && <p>Your account is not verified.</p>}

            <p>
                <Link to="/my-account/edit">Edit your account.</Link>
            </p>
        </Page>
    )
}

export default MyAccount
