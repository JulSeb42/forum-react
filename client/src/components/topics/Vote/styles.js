// Imports
import styled from "styled-components"

import { Variables, Mixins, Grid } from "tsx-library-julseb"

const Container = styled(Grid)`
    @media ${Variables.Breakpoints.Mobile} {
        justify-content: center;
        width: 100%;
        gap: 0;
    }
`

const Content = styled.span`
    input {
        display: none;

        &:disabled ~ label {
            color: ${Variables.Colors.Gray500};
            cursor: not-allowed;

            &:hover {
                background-color: transparent;
            }
        }
    }
`

const labelSize = 32

const Label = styled.label`
    padding: 0;
    border: none;
    background: none;
    color: ${Variables.Colors.Primary500};
    transition: ${Variables.Transitions.Short};
    border-radius: 50%;
    width: ${labelSize}px;
    height: ${labelSize}px;
    ${Mixins.Flexbox({
        alignItems: "center",
        justifyContent: "center",
    })};
    cursor: pointer;

    &:hover {
        background-color: ${Variables.Colors.Gray50};
    }
`

export { Content, Label, Container }
