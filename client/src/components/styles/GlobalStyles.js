// Packages
import { createGlobalStyle } from "styled-components"

// Variables
import * as Variables from "./Variables"

// Styles
const GlobalStyles = createGlobalStyle`
    html,
    body {
        font-family: ${Variables.FontFamilies.Body};
        line-height: ${Variables.LineHeight};
        background-color: ${Variables.Colors.Background};

        &.stop-scrolling {
            height: 100vh;
            overflow: hidden !important;
        }
    }

    hr {
        width: 100%;
        height: 1px;
        border: none;
        background-color: ${Variables.Colors.LightGray};
        margin: 0;
    }
`

export default GlobalStyles
