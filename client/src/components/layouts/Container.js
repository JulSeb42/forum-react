// Packages
import React from "react"
import styled, { css } from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import NavAside from "./NavAside"
import Aside from "./Aside"

// Styles
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: ${Variables.Container.Template};
    padding: ${Variables.Container.Padding};
    gap: ${Variables.Margins.L};
    align-content: start;

    @media ${Variables.Breakpoints.Tablet} {
        grid-template-columns: ${Variables.Container.TemplateTablet};
    }
`

const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.L};
    align-content: start;

    ${props => props.noAside && css`
        grid-column: 3;
    `}
`

function Container(props) {
    return (
        <Wrapper>
            {!props.noAside && <NavAside />}

            <Main noAside={props.noAside}>{props.children}</Main>

            {!props.noAside && <Aside />}
        </Wrapper>
    )
}

export default Container