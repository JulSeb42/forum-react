// Imports
import styled from "styled-components"
import { Variables, Flexbox, Mixins } from "tsx-library-julseb"

import CardContainer from "../../ui/CardContainer"

const Container = styled(CardContainer)`
    ${Mixins.Grid({
        col: "32px 1fr",
        gap: "xs",
        alignItems: "center",
    })};
`

const Text = styled(Flexbox)`
    align-items: center;

    small {
        min-width: 100px;
    }

    @media ${Variables.Breakpoints.Mobile} {
        flex-direction: column;
        align-items: flex-start;

        small {
            min-width: inherit;
            width: 100%;
            text-align: left;

            br {
                display: none;
            }
        }
    }
`

export { Container, Text }
