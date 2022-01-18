// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.align || "flex-start"};
    width: 100%;

    button:not(:last-child) {
        margin-right: ${Variables.Margins.M};
    }
`

export default ButtonsContainer
