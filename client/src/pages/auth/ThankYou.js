// Packages
import React from "react"

// Components
import Page from "../../components/layouts/Page"

// Title
const title = "Thank you for creating your account!"

function ThankYou() {
    return (
        <Page title={title}>
            <h1>{title}</h1>

            <p>
                You are now logged in. We just sent you an email to verify your
                account, please click on the link to access all the
                functionalities.
            </p>
        </Page>
    )
}

export default ThankYou
