// Imports
import React from "react"
import { Grid, Font } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import CardUserSmall from "../user/CardUserSmall"
import LoadContainer from "../ui/LoadContainer"

const ListConversations = ({ conversations, isLoading, user }) => {
    const sortedConversations = conversations.sort((a, b) => {
        const dateA = a.messages[a.messages.length - 1].date
        const dateB = b.messages[b.messages.length - 1].date
        const timeA = b.messages[b.messages.length - 1].time
        const timeB = a.messages[a.messages.length - 1].time

        return dateA === dateB
            ? timeA.localeCompare(timeB)
            : dateB.localeCompare(dateA)
    })

    return isLoading ? (
        <LoadContainer />
    ) : conversations.length > 0 ? (
        <Grid col={4} gap="l">
            {sortedConversations.map(conversation => (
                <CardUserSmall
                    user={
                        conversation.user1._id === user._id
                            ? conversation.user2
                            : conversation.user1
                    }
                    conversation={conversation}
                    read={
                        conversation.user1._id === user._id &&
                        conversation.readUser1
                            ? true
                            : conversation.user2._id === user._id &&
                              conversation.readUser2
                            ? true
                            : false
                    }
                    key={uuid()}
                />
            ))}
        </Grid>
    ) : (
        <Font.P>You do not have any conversation yet.</Font.P>
    )
}

export default ListConversations
