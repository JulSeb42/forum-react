// Imports
import styled from "styled-components"
import { Mixins, Variables } from "tsx-library-julseb"

const Button = styled.button`
    ${Mixins.Flexbox({
        inline: true,
        alignItems: "center",
        gap: Variables.Spacers.XS,
    })};
    padding: 0;
    border: none;
    background-color: transparent;
    color: ${Variables.Colors.Primary500};
    font-weight: ${Variables.FontWeights.Black};
    font-size: ${Variables.FontSizes.Body};
    transition: ${Variables.Transitions.Short};

    &:hover {
        color: ${Variables.Colors.Primary300};
    }

    &:active {
        color: ${Variables.Colors.Primary600};
    }
`

export { Button }