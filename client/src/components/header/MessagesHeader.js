// Imports
import React, { useContext, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import { AuthContext } from "../../context/auth"
import conversationsService from "../../api/conversations.service"

import ButtonHeader from "./ButtonHeader"

const MessagesHeader = () => {
    const location = useLocation().pathname
    const { user } = useContext(AuthContext)

    const [conversations, setConversations] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        conversationsService
            .allConversations()
            .then(res => {
                setConversations(
                    res.data.filter(
                        conversation =>
                            (conversation.user1._id === user._id &&
                                !conversation.readUser1) ||
                            (conversation.user2._id === user._id &&
                                !conversation.readUser2)
                    )
                )
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [user._id])

    return (
        <ButtonHeader
            icon="chat"
            aria-label="Messages"
            to="/messages"
            size={32}
            btnStyle={
                location.match(/^\/messages.*$/gim) ? "plain" : "transparent"
            }
            hoverBackground
            dot={!isLoading && conversations.length > 0}
        />
    )
}

export default MessagesHeader
