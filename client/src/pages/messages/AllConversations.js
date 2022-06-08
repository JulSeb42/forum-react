// Imports
import React from "react"
import { Font } from "tsx-library-julseb"

import Page from "../../components/layouts/Page"
import ListCardsConversation from "../../components/messages/ListCardsConversation"

const AllConversations = () => {
    return (
        <Page title="All your conversations">
            <Font.H1>Your conversations</Font.H1>

            <ListCardsConversation />
        </Page>
    )
}

export default AllConversations
