// Packages
import React, { useState } from "react"
import styled from "styled-components"

// Components
import * as Font from "../styles/Font"
import * as Variables from "../styles/Variables"
import ButtonsContainer from "./ButtonsContainer"
import Button from "../ui/Button"

// Styles
const Container = styled.div`
    border: 1px solid black;
    border-radius: ${Variables.Radiuses.M};
    padding: ${Variables.Margins.M};
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.S};
`

function DangerZone(props) {
    const [isOpen, setIsOpen] = useState(false)
    const open = isOpen ? "block" : "none"
    const visible = isOpen ? "none" : "block"

    return (
        <>
            <Button
                onClick={() => setIsOpen(!isOpen)}
                style={{ display: visible }}
            >
                Delete your account
            </Button>

            <Container style={{ display: open }} {...props}>
                <Font.P>Are you sure you want to delete your account?</Font.P>

                <ButtonsContainer>
                    <Button onClick={props.onClick}>
                        Yes, delete my account
                    </Button>

                    <Button onClick={() => setIsOpen(!isOpen)}>
                        No, cancel
                    </Button>
                </ButtonsContainer>
            </Container>
        </>
    )
}

export default DangerZone
