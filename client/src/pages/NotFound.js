// Packages
import React from "react"

// Components
import * as Font from "../components/styles/Font"
import Page from "../components/layouts/Page"
import Link from "../components/utils/LinkScroll"

function NotFound() {
    return (
        <Page title="Not found!">
            <Font.H1>Page not found!</Font.H1>

            <Font.P>
                <Link to="/">Back to homepage.</Link>
            </Font.P>
        </Page>
    )
}

export default NotFound
