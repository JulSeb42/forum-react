// Imports
import styled from "styled-components"
import { Wrapper as Container, Variables } from "tsx-library-julseb"

const Wrapper = styled(Container)`
    padding-top: calc(74px + ${Variables.Spacers.XXL});

    @media ${Variables.Breakpoints.Mobile} {
        padding-top: calc(24px + ${Variables.Spacers.XXL});
    }
`

export default Wrapper
