// Imports
import React from "react"
import styled from "styled-components"
import { Flexbox, Loader } from "tsx-library-julseb"

const Container = styled(Flexbox)`
    height: 200px;
`

const LoadContainer = () => {
    return (
        <Container justifyContent="center" alignItems="center">
            <Loader border={8} background="var(--background-color)" />
        </Container>
    )
}

export default LoadContainer
