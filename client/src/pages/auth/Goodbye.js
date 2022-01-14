// Packages
import React from "react"

// Components
import * as Font from "../../components/styles/Font"
import Page from "../../components/layouts/Page"

function Goodbye() {
    return (
        <Page title="Goodbye!">
            <Font.H1>We're sorry to see you go!</Font.H1>

            <Font.P>Your account was deleted successfully.</Font.P>
        </Page>
    )
}

export default Goodbye
