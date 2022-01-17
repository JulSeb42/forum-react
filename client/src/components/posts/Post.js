// Packages
import React from "react"
import styled from "styled-components"
import Markdown from "markdown-to-jsx"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import ProfilePicture from "../user/ProfilePicture"
import Link from "../utils/LinkScroll"

// Utils
import getToday from "../utils/getToday"
import convertDateShort from "../utils/convertDateShort"

// Styles
const Container = styled.div``

const Poster = styled.div``

const Title = styled.span``

const Text = styled(Markdown)``

// Markdown options
const options = {
    forceBlock: true,

    overrides: {
        h2: {
            component: Font.P,
        },

        h3: {
            component: Font.P,
        },

        h4: {
            component: Font.P,
        },

        h5: {
            component: Font.P,
        },

        h6: {
            component: Font.P,
        },

        p: {
            component: Font.P,
        },

        strong: {
            component: Font.Strong,
        },

        em: {
            component: Font.Em,
        },

        ul: {
            component: Font.List,
        },

        small: {
            component: Font.Small,
        },

        Link: {
            component: Link,
        },
    },
}

function Post({ post, ...props }) {
    return (
        <Container>
            <Poster>
                <ProfilePicture
                    src={post.poster.imageUrl}
                    alt={post.poster.username}
                    size={48}
                />

                <Title>
                    <Font.H4>
                        <Link to={`/users/${post.poster.username}`}>
                            {post.poster.username}
                        </Link>
                    </Font.H4>

                    <Font.Small>
                        {post.dateCreated !== getToday() &&
                            `${convertDateShort(post.dateCreated)} at `}
                        {post.timeCreated}
                    </Font.Small>
                </Title>
            </Poster>
        </Container>
    )
}

export default Post
