// Packages
import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import Link from "../../components/utils/LinkScroll"
import Linkify from "react-linkify"

// Components
import { AuthContext } from "../../context/auth"
import * as Font from "../../components/styles/Font"
import Page from "../../components/layouts/Page"
import ContainerConversation from "../../components/messages/ContainerConversation"
import ListBubbles from "../../components/messages/ListBubbles"
import PostMessage from "../../components/messages/PostMessage"
import EmptyContainer from "../../components/messages/EmptyContainer"
import BubbleMessage from "../../components/messages/BubbleMessage"

// Utils
import getToday from "../../components/utils/getToday"
import getTimeNow from "../../components/utils/getTimeNow"

function Conversation({ conversation }) {
    const { user } = useContext(AuthContext)

    const [message, setMessage] = useState("")

    const handleMessage = e => setMessage(e.target.value)

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

    // Set message as read
    useEffect(() => {
        if (conversation.messages.length > 0) {
            if (
                conversation.messages[conversation.messages.length - 1].sender
                    ._id !== user._id
            ) {
                axios
                    .put(`/conversations/read/${conversation._id}`)
                    .then()
                    .catch(err => console.log(err))
            }
        }
        
    })

    return (
        <Page title="Conversation">
            <Font.H1>
                Conversation with{" "}
                <Link
                    to={`/users/${
                        user._id === conversation.user1._id
                            ? conversation.user2.username
                            : conversation.user1.username
                    }`}
                >
                    {user._id === conversation.user1._id
                        ? conversation.user2.username
                        : conversation.user1.username}
                </Link>
            </Font.H1>

            <ContainerConversation>
                {conversation.messages.length > 0 ? (
                    <ListBubbles>
                        {conversation.messages.map(message => (
                            <BubbleMessage
                                key={message._id}
                                type={
                                    message.sender._id === user._id
                                        ? "sent"
                                        : "received"
                                }
                            >
                                <Font.P>
                                    <Linkify>{message.message}</Linkify>
                                </Font.P>
                            </BubbleMessage>
                        ))}
                    </ListBubbles>
                ) : (
                    <EmptyContainer>
                        <Font.P>No message yet.</Font.P>
                    </EmptyContainer>
                )}

                <hr />

                <PostMessage
                    onSubmit={handleSubmit}
                    onChange={handleMessage}
                    value={message}
                />
            </ContainerConversation>
        </Page>
    )
}

export default Conversation
