// Imports
import React from "react"
import { Icon } from "tsx-library-julseb"

import { Container } from "./styles"

const LinkDropdown = ({ icon, to, onClick, text }) => {
    return (
        <Container to={to} onClick={onClick} as={onClick && "button"}>
            <Icon src={icon} size={16} />

            {text}
        </Container>
    )
}

export default LinkDropdown
