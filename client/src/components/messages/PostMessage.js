// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import MarkdownEditor from "../forms/MarkdownEditor"
import Icon from "../ui/Icon"

// Styles
const Container = styled.form`
    display: flex;
    align-items: center;
`

const TextField = styled(MarkdownEditor)`
    height: auto !important;
    flex-grow: 1;
    margin-right: ${Variables.Margins.XS};

    & * {
        height: calc(
            ${Variables.FontSizes.Body} * ${Variables.LineHeight} * 2
        ) !important;
    }
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
            />

            <Button>
                <Icon name="send" size={24} />
            </Button>
        </Container>
    )
}

export default PostMessage
