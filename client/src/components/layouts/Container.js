// Packages
import React from "react"
import styled from "styled-components"
import { useLocation } from "react-router-dom"

// Components
import * as Variables from "../styles/Variables"
import SearchContainer from "../posts/SearchContainer"

// Styles
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: ${props =>
        props.search
            ? Variables.Container.TemplateSearch
            : Variables.Container.Template};
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
    grid-column: ${props => (props.search ? 3 : 2)};
`

function Container(props) {
    const location = useLocation().pathname

    return (
        <Wrapper search={location === "/search" && true}>
            {location === "/search" && (
                <SearchContainer
                    onChangeSearch={props.onChangeSearch}
                    valueSearch={props.valueSearch}
                    onChangeCategory={props.onChangeCategory}
                    valueCategory={props.valueCategory}
                />
            )}

            <Main search={location === "/search" && true}>
                {props.children}
            </Main>
        </Wrapper>
    )
}

export default Container
