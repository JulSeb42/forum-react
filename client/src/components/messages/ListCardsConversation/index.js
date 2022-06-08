// Imports
import React, { useState, useEffect, useContext } from "react"
import { v4 as uuid } from "uuid"
import { Grid,  Font } from "tsx-library-julseb"

import { AuthContext } from "../../../context/auth"
import conversationsService from "../../../api/conversations.service"

import LoadContainer from "../../ui/LoadContainer"
import CardConversation from "../CardConversation"

import convertTimeShort from "../../../utils/convertTimeShort"

const ListCardsConversation = ({ small, id }) => {
    const { user } = useContext(AuthContext)

    const [conversations, setConversations] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        conversationsService
            .allConversations()
            .then(res => {
                setConversations(
                    res.data
                        .filter(
                            conversation =>
                                conversation.user1._id === user._id ||
                                conversation.user2._id === user._id
                        )
                        .filter(
                            conversation => conversation.messages.length > 0
                        )
                )
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [user._id])

    const sortedConversations = conversations.sort((a, b) => {
        const dateA = a.messages[a.messages.length - 1].date
        const dateB = b.messages[b.messages.length - 1].date
        const timeA = convertTimeShort(b.messages[b.messages.length - 1].time)
        const timeB = convertTimeShort(a.messages[a.messages.length - 1].time)

        return dateA === dateB
            ? timeA.localeCompare(timeB)
            : new Date(dateB) - new Date(dateA)
    })

    return isLoading ? (
        <LoadContainer />
    ) : (
        <Grid alignContent="start" gap={small ? "xxs" : "s"}>
            {sortedConversations.length > 0 ? (
                sortedConversations.map((conversation, i) => (
                    <CardConversation
                        conversation={conversation}
                        user={user}
                        small={small}
                        active={conversation._id === id}
                        separator={
                            small &&
                            i !== sortedConversations.length - 1 &&
                            true
                        }
                        key={uuid()}
                    />
                ))
            ) : (
                <Font.P>You don't have any conversation yet.</Font.P>
            )}
        </Grid>
    )
}

export default ListCardsConversation
