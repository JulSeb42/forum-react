// Packages
import React from "react"
import { Link } from "react-router-dom"

// Components
import Page from "../components/layouts/Page"

function NotFound() {
    return (
        <Page title="Not found!">
            <h1>Page not found!</h1>

            <p>
                <Link to="/">Back to homepage.</Link>
            </p>
        </Page>
    )
}

export default NotFound
