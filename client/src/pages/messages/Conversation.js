// Imports
import React, { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { Font } from "tsx-library-julseb"

import { AuthContext } from "../../context/auth"
import conversationsService from "../../api/conversations.service"

import Page from "../../components/layouts/Page"
import ConversationContainer from "../../components/messages/ConversationContainer"

const Conversation = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams()

    const [conversation, setConversation] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        conversationsService
            .getConversation(id)
            .then(res => {
                setConversation(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [id])

    const title = isLoading
        ? "Conversation"
        : !isLoading && conversation.user1._id === user._id
        ? `Conversation with ${conversation.user2.username}`
        : !isLoading &&
          conversation.user2._id === user._id &&
          `Conversation with ${conversation.user1.username}`

    return (
        <Page title={title} mainWidth={800}>
            <Font.H1>{title}</Font.H1>
            
            <ConversationContainer
                conversation={conversation}
                isLoading={isLoading}
                id={id}
                user={user}
            />
        </Page>
    )
}

export default Conversation
