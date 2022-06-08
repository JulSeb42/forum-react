// Imports
import styled, { css } from "styled-components"
import { Grid, Variables } from "tsx-library-julseb"

const Container = styled(Grid)`
    height: 100%;
    overflow-y: scroll;
    gap: ${({ small }) =>
        small ? Variables.Spacers.XXS : Variables.Spacers.S};
    align-content: start;

    ${({ small }) =>
        small &&
        css`
            @media ${Variables.Breakpoints.Mobile} {
                display: none;
            }
        `}
`

export { Container }