// Packages
import React from "react"

// Components
import * as Font from "../../components/styles/Font"
import Page from "../../components/layouts/Page"

function ForgotSent() {
    return (
        <Page title="Email sent successfully">
            <Font.H1>Email sent successfully</Font.H1>

            <Font.P>We just sent you an email with a link to reset your password.</Font.P>
        </Page>
    )
}

export default ForgotSent
