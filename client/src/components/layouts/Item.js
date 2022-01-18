// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

const Item = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${props => props.gap || Variables.Margins.S};
`

export default Item