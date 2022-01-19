// Packages
import styled, { css } from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const BubbleMessage = styled.div`
    display: flex;
    justify-content: ${props =>
        props.type === "sent" ? "flex-end" : "flex-start"};

    p {
        width: auto;
        display: inline;
        max-width: 70%;
        padding: ${Variables.Margins.XS} ${Variables.Margins.S};
        border-radius: ${Variables.Radiuses.S};

        a {
            text-decoration: underline;
            font-weight: ${Variables.FontWeights.Regular};
        }

        ${props =>
            props.type === "sent" &&
            css`
                background-color: ${Variables.Colors.Primary};
                color: ${Variables.Colors.White};

                a {
                    color: ${Variables.Colors.White};

                    &:hover {
                        color: ${Variables.Colors.LightGray};
                    }
                }
            `}

        ${props =>
            props.type === "received" &&
            css`
                background-color: ${Variables.Colors.LighterGray};
                color: ${Variables.Colors.Black};
            `}
    }
`

export default BubbleMessage
