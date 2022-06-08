// Imports
import styled from "styled-components"
import { Link } from "react-router-dom"

import { Variables, Mixins } from "tsx-library-julseb"

const Container = styled(Link)`
    ${Mixins.Flexbox({
        alignItems: "center",
        gap: Variables.Spacers.XXS,
    })}
`

export { Container }
