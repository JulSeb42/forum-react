// Packages
import styled from "styled-components"
import ScrollToBottom from "react-scroll-to-bottom"

// Components
import * as Variables from "../styles/Variables"

// Styles
const ListBubbles = styled(ScrollToBottom)`
    flex-grow: 1;
    margin-bottom: ${Variables.Margins.S};

    & > div {
        display: grid;
        grid-template-columns: 1fr;
        gap: ${Variables.Margins.S};
        align-content: start;
    }
`

export default ListBubbles