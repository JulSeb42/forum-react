// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import Icon from "../ui/Icon"

// Styles
const Container = styled.form`
    display: flex;
    align-items: center;
`

const TextField = styled.textarea`
    height: calc(${Variables.FontSizes.Body} * ${Variables.LineHeight} * 2) !important;
    flex-grow: 1;
    margin-right: ${Variables.Margins.XS};
    border: none;
    font-family: ${Variables.FontFamilies.Body};
    font-size: ${Variables.FontSizes.Body};
    resize: none;
`

const Button = styled.button`
    --size: 32px;
    width: var(--size);
    height: var(--size);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    border-radius: 50%;
    color: ${Variables.Colors.Primary};
    background: none;
    transition: ${Variables.Transitions.Short};

    &:hover {
        background-color: ${Variables.Colors.LighterGray};
    }
`

function PostMessage(props) {
    return (
        <Container onSubmit={props.onSubmit}>
            <TextField
                hideToolbar={true}
                visiableDragbar={false}
                onChange={props.onChange}
                value={props.value}
                placeholder="Type your message..."
            />

            <Button>
                <Icon name="send" size={24} />
            </Button>
        </Container>
    )
}

export default PostMessage
