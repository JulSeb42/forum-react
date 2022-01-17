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

const Title = styled.div``

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

function CardPost({ post, ...props }) {
    return (
        <Container>
            <Title>
                <Font.P as="h4">
                    
                </Font.P>
            </Title>
        </Container>
    )
}

export default CardPost
