// Imports
import styled from "styled-components"
import {
    Variables,
    Mixins,
    MarkdownContainer,
    Font,
    Grid,
} from "tsx-library-julseb"

import CardContainer from "../../ui/CardContainer"

const Container = styled(CardContainer)`
    ${Mixins.Grid({
        col: "auto 1fr",
        gap: "l",
        alignItems: "start",
    })};

    small {
        color: ${Variables.Colors.Gray800};
    }

    @media ${Variables.Breakpoints.Mobile} {
        ${Mixins.Flexbox({
            direction: "column-reverse",
            gap: "s"
        })};
    }
`

const Title = styled(Font.H4)`
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${Variables.Colors.Primary500};
`

const Body = styled(MarkdownContainer)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* number of lines to show */
    line-clamp: 5;
    -webkit-box-orient: vertical;
`

const Footer = styled(Grid)`
    @media ${Variables.Breakpoints.Mobile} {
        grid-template-columns: repeat(3, 1fr);
    }
`

export { Container, Title, Body, Footer }
