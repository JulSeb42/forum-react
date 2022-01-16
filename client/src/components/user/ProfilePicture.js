// Packages
import React from "react"
import styled from "styled-components"

// Components
import AsyncImage from "../utils/AsyncImage"

const Picture = styled(AsyncImage)`
    width: ${props => `${props.size}px`};
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;
`

function ProfilePicture(props) {
    return (
        <Picture
            src={props.src}
            alt={props.alt}
            size={props.size || 100}
            {...props}
        />
    )
}

export default ProfilePicture
