// Packages
import React, { useState, useEffect } from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import Button from "../ui/Button"
import ButtonsContainer from "./ButtonsContainer"

// Styles
const Container = styled.div`
    display: none;

    &.open {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
    }
`

const Content = styled.div`
    width: 100%;
    max-width: 400px;
    border: 1px solid ${Variables.Colors.Danger};
    border-radius: ${Variables.Radiuses.M};
    padding: ${Variables.Margins.M};
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.S};
    background-color: ${Variables.Colors.Danger10};
`

function ModalDanger(props) {
    const [isOpen, setIsOpen] = useState(false)
    const open = isOpen ? "open" : ""

    useEffect(() => {
        isOpen
            ? document.body.classList.add("stop-scrolling")
            : document.body.classList.remove("stop-scrolling")
    }, [isOpen])

    return (
        <>
            <Button btnstyle="danger-secondary" onClick={() => setIsOpen(true)}>
                {props.btnopen}
            </Button>

            <Container className={open}>
                <Content>
                    <Font.P>{props.text}</Font.P>

                    <ButtonsContainer>
                        <Button
                            btnstyle="danger"
                            onClick={props.onClickPrimary}
                        >
                            {props.textbtnprimary}
                        </Button>

                        <Button
                            btnstyle="secondary"
                            onClick={() => setIsOpen(false)}
                        >
                            Cancel
                        </Button>
                    </ButtonsContainer>
                </Content>
            </Container>
        </>
    )
}

export default ModalDanger
