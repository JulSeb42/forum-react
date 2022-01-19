// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const ListBubbles = styled.div`
    flex-grow: 1;
    margin-bottom: ${Variables.Margins.S};
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.S}
`

export default ListBubbles