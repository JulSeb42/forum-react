// Imports
import React from "react"
import { Link } from "react-router-dom"
import { Font, Hr, Grid, Icon, Flexbox, Variables } from "tsx-library-julseb"
import { unslugify, convertDateShort, getToday } from "js-utils-julseb"

import Vote from "../Vote"

import { optionsMarkdownCard } from "../../../config/markdown.config"

import { Container, Body, Title } from "./styles"

const TopicCard = ({ topic, edited, setEdited }) => {
    const { title, _id, category, posts, createdBy } = topic

    const post = posts[0]
    const lastPost = posts[posts.length - 1]

    return (
        <Container>
            <Vote topic={topic} edited={edited} setEdited={setEdited} />

            <Grid gap={Variables.Spacers.XS}>
                <Title>
                    <Link to={`/topics/${_id}`}>{title}</Link>
                </Title>

                <Font.P color="gray">{unslugify(category)}</Font.P>

                <Body options={optionsMarkdownCard}>{post.body}</Body>

                <Hr />

                <Grid col={3}>
                    <Font.Small>
                        By{" "}
                        <Link to={`/users/${createdBy.username}`}>
                            {createdBy.username}
                        </Link>
                    </Font.Small>

                    <Font.Small align="center">
                        {lastPost.dateCreated === getToday()
                            ? "Today"
                            : convertDateShort(lastPost.dateCreated)}
                    </Font.Small>

                    <Flexbox
                        as={Font.Small}
                        alignItems="center"
                        gap={Variables.Spacers.XXS}
                        justifyContent="flex-end"
                    >
                        <Icon src="message" size={14} />
                        {posts.length - 1}
                    </Flexbox>
                </Grid>
            </Grid>
        </Container>
    )
}

export default TopicCard
