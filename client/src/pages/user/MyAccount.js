// Packages
import React, { useContext } from "react"

// Components
import { AuthContext } from "../../context/auth"
import * as Font from "../../components/styles/Font"
import Page from "../../components/layouts/Page"
import Link from "../../components/utils/LinkScroll"

// Utils
import getFirstName from "../../components/utils/getFirstName"

function MyAccount() {
    const { user } = useContext(AuthContext)

    return (
        <Page title={user.fullName}>
            <Font.H1>Hello {getFirstName(user.fullName)}</Font.H1>

            {!user.verified && <Font.P>Your account is not verified.</Font.P>}

            <Font.P>
                <Link to="/my-account/edit">Edit your account.</Link>
            </Font.P>
        </Page>
    )
}

export default MyAccount
