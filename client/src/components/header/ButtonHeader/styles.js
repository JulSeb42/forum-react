// Imports
import styled from "styled-components"

import { Badge } from "tsx-library-julseb"

const Container = styled.div`
    position: relative;
`

const Dot = styled(Badge)`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
`

export { Container, Dot }
