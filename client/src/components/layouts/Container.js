// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: ${Variables.Container.Template};
    padding: ${Variables.Container.Padding};

    @media ${Variables.Breakpoints.Tablet} {
        grid-template-columns: ${Variables.Container.TemplateTablet};
    }
`

const Main = styled.main`
    grid-column: 2;
`

function Container(props) {
    return (
        <Wrapper>
            <Main>{props.children}</Main>
        </Wrapper>
    )
}

export default Container
