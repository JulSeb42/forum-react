// Imports
import styled, { css } from "styled-components"
import { Variables } from "tsx-library-julseb"

const CardContainer = styled.div`
    padding: ${Variables.Spacers.M} !important;
    background-color: ${Variables.Colors.White};
    border-radius: ${Variables.Radiuses.L};
    box-shadow: ${Variables.Shadows.M};
    width: ${({ edit }) => edit && "100%"};
    max-width: ${({ edit }) => edit && "600px"};

    ${({ edit }) =>
        edit &&
        css`
            @media ${Variables.Breakpoints.Mobile} {
                max-width: 90%;
            }
        `}
`

export default CardContainer
