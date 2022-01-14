// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"

// Styles
const ErrorMessage = styled(Font.P)`
    border: 1px solid black;
    border-radius: ${Variables.Radiuses.M};
    padding: ${Variables.Margins.M};
`

export default ErrorMessage