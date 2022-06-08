// Packages
import { Link } from "react-router-dom"
import { Font } from "tsx-library-julseb"
import { commands } from "@uiw/react-md-editor"

const optionsMarkdown = {
    forceBlock: true,

    overrides: {
        h2: {
            component: Font.H2,
        },

        h3: {
            component: Font.H3,
        },

        h4: {
            component: Font.H4,
        },

        h5: {
            component: Font.H5,
        },

        h6: {
            component: Font.H6,
        },

        p: {
            component: "span",
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

const optionsMarkdownCard = {
    forceBlock: true,
    wrapper: "div",

    overrides: {
        h2: {
            component: "span",
        },

        h3: {
            component: "span",
        },

        h4: {
            component: "span",
        },

        h5: {
            component: "span",
        },

        h6: {
            component: "span",
        },

        p: {
            component: "span",
        },

        strong: {
            component: "span",
        },

        em: {
            component: "span",
        },

        ul: {
            component: "span",
        },

        li: {
            component: "span",
        },

        small: {
            component: "span",
        },

        Link: {
            component: "span",
        },
    },
}

const commandsMarkdown = [
    commands.bold,
    commands.italic,
    commands.code,
    commands.strikethrough,
    commands.link,
    commands.quote,
    commands.unorderedListCommand,
]

export { optionsMarkdown, optionsMarkdownCard, commandsMarkdown }
