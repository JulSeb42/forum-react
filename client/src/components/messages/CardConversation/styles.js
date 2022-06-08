// Imports
import styled from "styled-components"
import { Font, Variables, Mixins, Flexbox } from "tsx-library-julseb"

import CardContainer from "../../ui/CardContainer"

const Container = styled(CardContainer)`
    color: ${Variables.Colors.Black};
    text-decoration: none;
    ${Mixins.Flexbox({
        alignItems: "center",
        gap: "xs",
    })};
    transition: ${Variables.Transitions.Short};

    &:hover {
        transform: scale(1.01);
    }
`

const SmallContainer = styled(Flexbox)`
    color: ${Variables.Colors.Black};
    text-decoration: none;
    transition: ${Variables.Transitions.Short};
    padding: ${Variables.Spacers.XS};
    border-radius: ${Variables.Radiuses.M};
    background-color: ${({ active }) => active && Variables.Colors.Gray100};

    &:hover {
        background-color: ${Variables.Colors.Gray200};
    }
`

const Body = styled(Font.Small)`
    overflow: hidden;
    white-space: pre;
    text-overflow: ellipsis;
    max-width: ${({ small }) => (small ? 90 : 500)}px;

    @media ${Variables.Breakpoints.Mobile} {
        max-width: ${({ small }) => (small ? 90 : 200)}px;
    }
`

export { Container, SmallContainer, Body }
