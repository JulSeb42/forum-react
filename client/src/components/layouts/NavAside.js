// Packages
import React, { useContext } from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

// Components
import * as Variables from "../styles/Variables"
import { AuthContext } from "../../context/auth"
import Icon from "../ui/Icon"

// Styles
const Container = styled.nav`
    grid-column: 2;
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.S};
    align-content: start;
`

const Button = styled(NavLink)`
    display: flex;
    align-items: center;
    color: ${Variables.Colors.Black};
    text-decoration: none;
    font-weight: ${Variables.FontWeights.Bold};
    transition: ${Variables.Transitions.Short};

    & > span {
        margin-right: ${Variables.Margins.XXS};
    }

    &:hover {
        background-color: ${Variables.Colors.LighterGray};
    }

    &:before {
        content: "";
        width: 4px;
        height: 100%;
        background-color: transparent;
        display: inline-block;
        margin-right: ${Variables.Margins.XXS};
    }

    &.active {
        background-color: ${Variables.Colors.Primary10};
        color: ${Variables.Colors.Primary};

        &:before {
            background-color: ${Variables.Colors.Primary};
        }
    }
`

function NavAside() {
    const { user, isLoggedIn } = useContext(AuthContext)

    // Links
    const Links = [
        {
            text: "Explore topics",
            to: "/",
            icon: "compass",
        },
    ]

    // Components
    const ButtonNav = props => {
        return (
            <Button to={props.to}>
                <Icon name={props.icon} size={16} />
                {props.text}
            </Button>
        )
    }

    return (
        <Container>
            {Links.map((link, i) => (
                <ButtonNav text={link.text} to={link.to} icon={link.icon} key={i} />
            ))}

            {isLoggedIn && (
                <ButtonNav text="My topics" to={`/users/${user.username}`} icon="question-mark" />
            )}
        </Container>
    )
}

export default NavAside
