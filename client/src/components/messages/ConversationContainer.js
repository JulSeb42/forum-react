// Imports
import React, { useState } from "react"
import {
    Grid,
    Font,
    MessagesContainer,
    EmptyContainer,
    ListMessages,
    Message,
    MessageInput,
    Alert,
} from "tsx-library-julseb"
import { v4 as uuid } from "uuid"
import { convertDateShort, getToday } from "js-utils-julseb"

import conversationsService from "../../api/conversations.service"

import ListCardsConversation from "./ListCardsConversation"
import LoadContainer from "../ui/LoadContainer"

import getTimeSeconds from "../../utils/getTimeSeconds"
import convertTimeShort from "../../utils/convertTimeShort"

const ConversationContainer = ({ conversation, isLoading, id, user }) => {
    // Messages
    const messages = conversation.messages

    const [message, setMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined)
    const handleMessage = e => setMessage(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = {
            message,
            sender: user,
            date: getToday(),
            time: getTimeSeconds(),
            readUser1: user._id === conversation.user1._id ? true : false,
            readUser2: user._id === conversation.user2._id ? true : false,
        }

        conversationsService
            .newMessage(id, requestBody)
            .then(() => window.location.reload(false))
            .catch(err => setErrorMessage(err.response.data.message))
    }

    // Set conversation as read
    setTimeout(() => {
        if (!isLoading) {
            const checkUser1 =
                user._id !==
                    conversation.messages[conversation.messages.length - 1]
                        .sender._id && !conversation.readUser1
            const checkUser2 =
                user._id !==
                    conversation.messages[conversation.messages.length - 1]
                        .sender._id && !conversation.readUser2
            const requestBody = {
                readUser1: checkUser1 ? true : conversation.readUser1,
                readUser2: checkUser2 ? true : conversation.readUser2,
            }

            conversationsService
                .readConversation(id, requestBody)
                .then()
                .catch(err => console.log(err))
        }
    }, 100)

    return (
        <Grid col="var(--template-conversation)" gap="s">
            <ListCardsConversation small id={id} />

            {isLoading ? (
                <LoadContainer />
            ) : (
                <MessagesContainer>
                    {messages.length === 0 ? (
                        <EmptyContainer>No message yet</EmptyContainer>
                    ) : (
                        <ListMessages>
                            {messages.map(message => (
                                <Message
                                    type={
                                        message.sender._id === user._id
                                            ? "sent"
                                            : "received"
                                    }
                                    date={
                                        message.date === getToday()
                                            ? "Today"
                                            : convertDateShort(message.date)
                                    }
                                    time={convertTimeShort(message.time)}
                                    key={uuid()}
                                >
                                    {message.message}
                                </Message>
                            ))}
                        </ListMessages>
                    )}

                    <MessageInput
                        placeholder="Type your message"
                        onChange={handleMessage}
                        value={message}
                        onSubmit={handleSubmit}
                    />
                </MessagesContainer>
            )}

            {errorMessage && (
                <Alert as={Font.P} color="danger">
                    {errorMessage}
                </Alert>
            )}
        </Grid>
    )
}

export default ConversationContainer
