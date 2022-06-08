// Imports
import React from "react"
import { ButtonIcon } from "tsx-library-julseb"

import { Container, Dot } from "./styles"

const ButtonHeader = ({ dot, ...props }) => {
    return (
        <Container>
            {dot && <Dot size={8} color="danger" />}

            <ButtonIcon {...props} />
        </Container>
    )
}

export default ButtonHeader
