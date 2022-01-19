// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const ContainerConversation = styled.div`
    width: 100%;
    height: 65vh;
    border: 1px solid ${Variables.Colors.LightGray};
    padding: ${Variables.Margins.M};
    display: flex;
    flex-direction: column;
    border-radius: ${Variables.Radiuses.M};

    hr {
        margin: ${Variables.Margins.S} 0;
    }
`

export default ContainerConversation