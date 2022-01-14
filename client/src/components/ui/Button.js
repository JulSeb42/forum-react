// Packages
import React from "react"
import styled from "styled-components"

// Components
import Link from "../utils/LinkScroll"

// Styles
const Container = styled.button``

function Button(props) {
    return (
        <Container as={props.to && Link} {...props}>
            {props.children}
        </Container>
    )
}

export default Button
