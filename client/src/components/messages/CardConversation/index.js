// Imports
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Flexbox, Avatar, Font, Variables, Badge, Hr } from "tsx-library-julseb"

import { Container, SmallContainer, Body } from "./styles"

const CardConversation = ({ conversation, user, small, separator, active }) => {
    const navigate = useNavigate()

    const lastMessage = conversation.messages[conversation.messages.length - 1]

    const otherUser =
        conversation.user1._id === user._id
            ? conversation.user2
            : conversation.user1

    const name =
        lastMessage.sender._id === user._id ? (
            <Font.Strong>You: </Font.Strong>
        ) : (
            ""
        )

    const read =
        user._id === conversation.user1._id
            ? conversation.readUser1
            : conversation.readUser2
    
    const goToConversation = () => {
        navigate(`/messages/${conversation._id}`)
        window.location.reload(false)
    } 

    const Content = () => {
        return (
            <>
                <Avatar
                    src={otherUser.imageUrl}
                    alt={otherUser.username}
                    size={32}
                />

                <Flexbox direction="column" style={{ flexGrow: 1 }}>
                    <Font.Strong>{otherUser.username}</Font.Strong>

                    <Body>
                        {name}
                        {lastMessage.message}
                    </Body>
                </Flexbox>

                {!read && <Badge size={8} color="danger" />}
            </>
        )
    }

    return (
        <>
            {small ? (
                <SmallContainer
                    as={Link}
                    to={`/messages/${conversation._id}`}
                    alignItems="center"
                    gap={Variables.Spacers.XS}
                    active={active}
                    onClick={goToConversation}
                >
                    <Content />
                </SmallContainer>
            ) : (
                <Container
                    as={Link}
                    to={`/messages/${conversation._id}`}
                    alignItems="center"
                    gap={Variables.Spacers.XS}
                    onClick={goToConversation}
                >
                    <Content />
                </Container>
            )}

            {separator && <Hr />}
        </>
    )
}

export default CardConversation
