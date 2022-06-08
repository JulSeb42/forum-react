// Imports
import React from "react"
import { Badge, Font } from "tsx-library-julseb"

import { Container, Img, Content, Title } from "./styles"

const CardUserSmall = ({ user, conversation, read }) => {
    return (
        <Container
            to={
                conversation
                    ? `/messages/${conversation._id}`
                    : `/users/${user.username}`
            }
        >
            <Img
                src={user.imageUrl}
                alt={user.username}
                width="100%"
                height="100%"
                fit="cover"
            />

            <Content>
                <Title>
                    <Font.H6>{user.username}</Font.H6>

                    {conversation && !read && <Badge size={8} color="danger" />}
                </Title>
            </Content>
        </Container>
    )
}

export default CardUserSmall
