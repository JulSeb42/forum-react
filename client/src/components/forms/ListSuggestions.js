// Packages
import React, { useState } from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import Input from "./Input"

// Styles
const Container = styled.div`
    position: relative;
    z-index: 10;

    & > div {
        position: relative;
        z-index: 1;
    }
`

const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    position: absolute;
    z-index: 0;
    background-color: ${Variables.Colors.White};
    width: 100%;
    top: 28px;
    border-radius: ${Variables.Radiuses.S};
    border: 1px solid ${Variables.Colors.Primary};
    max-height: 0;
    transition: ${Variables.Transitions.Long};
    overflow: hidden;
    padding-top: 0;
    opacity: 0;
    overflow-y: scroll;

    &.open {
        padding-top: 28px;
        max-height: 200px;
        opacity: 1;
    }

    li {
        padding: ${Variables.Margins.XS};
        transition: ${Variables.Transitions.Short};

        &:hover {
            background-color: ${Variables.Colors.Primary};
            color: ${Variables.Colors.White};
            cursor: pointer;
        }
    }
`

function ListSuggestions(props) {
    const [isOpen, setIsOpen] = useState(false)
    const open = isOpen ? "open" : ""

    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setTimeout(setIsOpen(false), 500)

    return (
        <Container>
            <Input
                label={props.label}
                id={props.id}
                onFocus={handleOpen}
                onBlur={handleClose}
                {...props}
            />

            <List className={open}>
                {props.items.slice(0, 20).map((item, i) => (
                    <li onMouseDown={props.onMouseDown} key={i}>
                        {item}
                    </li>
                ))}
            </List>
        </Container>
    )
}

export default ListSuggestions
