// Packages
import React, { useContext } from "react"
import styled from "styled-components"

// Components
import { AuthContext } from "../../context/auth"
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import ProfilePicture from "../user/ProfilePicture"
import Link from "../utils/LinkScroll"

// Styles
const Container = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${Variables.Colors.Black};
    width: 100%;

    img {
        margin-right: ${Variables.Margins.XS};
    }
`

const Content = styled.span`
    display: flex;
    align-items: center;
    flex-grow: 1;
`

const Text = styled.span`
    flex-grow: 1;
    width: 100%;
`

const Message = styled(Font.P)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
`

const Badge = styled.span`
    --size: 8px;
    width: var(--size);
    height: var(--size);
    display: inline-block;
    border-radius: 50%;
    background-color: ${Variables.Colors.Danger};
`

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
                size={48}
            />

            <Content>
                <Text>
                    <Font.Strong>
                        {user._id === conversation.user1._id
                            ? conversation.user2.username
                            : conversation.user1.username}
                    </Font.Strong>

                    <Message>
                        {
                            conversation.messages[
                                conversation.messages.length - 1
                            ].message
                        }
                    </Message>
                </Text>

                {!conversation.read && <Badge />}
            </Content>
        </Container>
    )
}

export default CardMessage
