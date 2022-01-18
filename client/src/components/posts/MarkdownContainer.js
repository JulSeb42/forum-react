// Packages
import React from "react"
import styled, { css } from "styled-components"
import Markdown from "markdown-to-jsx"

// Components
import * as Font from "../styles/Font"
import * as Variables from "../styles/Variables"
import Link from "../utils/LinkScroll"

// Styles
const Container = styled(Markdown)`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XS};
    
    ${props =>
        props.card &&
        css`
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5; /* number of lines to show */
            line-clamp: 5;
            -webkit-box-orient: vertical;
        `}
`

function MarkdownContainer(props) {
    // Options markdown
    const options = {
        forceBlock: true,

        overrides: {
            h2: {
                component: props.card ? Font.P : Font.H2,
            },

            h3: {
                component: props.card ? Font.P : Font.H3,
            },

            h4: {
                component: props.card ? Font.P : Font.H4,
            },

            h5: {
                component: props.card ? Font.P : Font.H5,
            },

            h6: {
                component: props.card ? Font.P : Font.H6,
            },

            p: {
                component: Font.P,
            },

            strong: {
                component: props.card ? Font.P : Font.Strong,
            },

            em: {
                component: props.card ? Font.P : Font.Em,
            },

            ul: {
                component: props.card ? Font.P : Font.List,
            },

            small: {
                component: props.card ? Font.P : Font.Small,
            },

            Link: {
                component: props.card ? "span" : Link,
            },
        },
    }

    return (
        <Container options={options} {...props}>
            {props.body}
        </Container>
    )
}

export default MarkdownContainer
