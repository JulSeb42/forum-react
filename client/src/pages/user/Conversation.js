// Packages
import React, { useContext, useState } from "react"
import axios from "axios"

// Components
import { AuthContext } from "../../context/auth"
import * as Font from "../../components/styles/Font"
import Page from "../../components/layouts/Page"
import ContainerConversation from "../../components/messages/ContainerConversation"
import ListBubbles from "../../components/messages/ListBubbles"
import PostMessage from "../../components/messages/PostMessage"
import EmptyContainer from "../../components/messages/EmptyContainer"

// Utils
import getToday from "../../components/utils/getToday"
import getTimeNow from "../../components/utils/getTimeNow"

function Conversation({ conversation }) {
    const { user } = useContext(AuthContext)

    const [message, setMessage] = useState("")

    // id, sender, message, createdDay, createdTime

    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = {
            id: conversation._id,
            sender: user,
            message,
            createdDay: getToday(),
            createdTime: getTimeNow(),
        }

        axios
            .put("/conversations/new-message", requestBody)
            .then(() => window.location.reload(false))
            .catch(err => console.log(err))
    }

    return (
        <Page title="Conversation">
            <Font.H1>
                Conversation with{" "}
                {user._id === conversation.user1._id
                    ? conversation.user2.username
                    : conversation.user1.username}
            </Font.H1>

            <ContainerConversation>
                {conversation.messages.length > 0 ? (
                    <ListBubbles></ListBubbles>
                ) : (
                    <EmptyContainer>
                        <Font.P>No message yet.</Font.P>
                    </EmptyContainer>
                )}

                <PostMessage onSubmit={handleSubmit} onChange={setMessage} value={message} />
            </ContainerConversation>
        </Page>
    )
}

export default Conversation
