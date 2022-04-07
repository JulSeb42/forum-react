// Packages
import React, { useState, useEffect, useContext } from "react"
import axios from "axios"

// Components
import { AuthContext } from "../../context/auth"
import * as Font from "../../components/styles/Font"
import Page from "../../components/layouts/Page"
import ListNotifications from "../../components/user/ListNotifications"
import CardMessage from "../../components/messages/CardMessage"

function Messages(props) {
    const { user } = useContext(AuthContext)
    const [allConversations, setAllConversations] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get("/conversations/conversations")
            .then(res => {
                setAllConversations(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    const filteredConversations = allConversations
        .filter(
            conversation =>
                conversation.user1._id === user._id ||
                conversation.user2._id === user._id
        )
        .filter(conversation => conversation.messages.length > 0)

    return (
        <Page title="Messages">
            <Font.H1>All conversations</Font.H1>

            {!isLoading && filteredConversations.length > 0 ? (
                <ListNotifications>
                    {filteredConversations.map(conversation => (
                        <CardMessage conversation={conversation} key={conversation._id} />
                    ))}
                </ListNotifications>
            ) : (
                <Font.P>You don't have any conversation yet.</Font.P>
            )}
        </Page>
    )
}

export default Messages
