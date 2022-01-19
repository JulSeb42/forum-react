// Packages
import React, { useContext } from "react"
import styled from "styled-components"

// Components
import { AuthContext } from "../../context/auth"
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import ProfilePicture from "../user/ProfilePicture"
import MarkdownContainer from "../posts/MarkdownContainer"
import Link from "../utils/LinkScroll"

// Styles
const Container = styled(Link)``

const Content = styled.span``

const Text = styled.span``

const Message = styled(MarkdownContainer)``

const Badge = styled.span``

function CardMessage({ conversation }) {
    const { user } = useContext(AuthContext)

    return (
        <Container to={`/messages/${conversation._id}`}>
            <ProfilePicture
                src={
                    user._id === conversation.user1._id
                        ? conversation.user2.imageUrl
                        : conversation.user1.imageUrl
                }
                alt={
                    user._id === conversation.user1._id
                        ? conversation.user2.username
                        : conversation.user1.username
                }
            />

            <Content>
                <Text>
                    <Font.Strong>
                        {user._id === conversation.user1._id
                            ? conversation.user2.username
                            : conversation.user1.username}
                    </Font.Strong>

                    <Message
                        card
                        body={
                            conversation.messages[
                                conversation.messages.length - 1
                            ].message
                        }
                    />
                </Text>

                {!conversation.read && <Badge />}
            </Content>
        </Container>
    )
}

export default CardMessage
