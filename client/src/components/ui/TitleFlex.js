// Imports
import styled from "styled-components"
import { Variables, Flexbox } from "tsx-library-julseb"

const TitleFlex = styled(Flexbox)`
    align-items: center;
    justify-content: space-between;
    gap: ${Variables.Spacers.XS};

    @media ${Variables.Breakpoints.Mobile} {
        flex-direction: column;
        align-items: flex-start;

        a,
        button {
            width: 100%;
        }
    }
`

export default TitleFlex
