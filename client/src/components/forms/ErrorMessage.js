// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"

// Styles
const ErrorMessage = styled(Font.P)`
    border: 1px solid ${Variables.Colors.Danger};
    border-radius: ${Variables.Radiuses.M};
    padding: ${Variables.Margins.M};
    background-color: ${Variables.Colors.Danger10};
`

export default ErrorMessage