// Imports
import React, { useContext, useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Button, ButtonIcon } from "tsx-library-julseb"

import { AuthContext } from "../../../context/auth"

import Search from "../Search"
import DropdownHeader from "../DropdownHeader"
import MessagesHeader from "../MessagesHeader"
import NotificationsHeader from "../NotificationsHeader"

import siteData from "../../../data/siteData"

import { Container, MenuButton, Nav, MenuLinkStyled } from "./styles"

const Header = () => {
    const { isLoggedIn } = useContext(AuthContext)
    const location = useLocation().pathname
    const navigate = useNavigate()

    // Mobile menu
    const [isOpen, setIsOpen] = useState(false)

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () =>
            window.pageYOffset > 48 ? setIsScrolled(true) : setIsScrolled(false)
        )
    }, [])

    const backHome = () => {
        navigate("/")
        window.location.reload(false)
    }

    return (
        <Container isScrolled={isScrolled}>
            <MenuLinkStyled as={Link} to="/" logo={1}>
                {siteData.name}
            </MenuLinkStyled>

            <MenuButton
                width={28}
                height={20}
                onClick={() => setIsOpen(!isOpen)}
                color="currentColor"
                open={isOpen}
            />

            <Nav isOpen={isOpen}>
                <Search />

                <ButtonIcon
                    to="/"
                    icon="home"
                    btnStyle={location === "/" ? "plain" : "transparent"}
                    aria-label="Home"
                    size={32}
                    hoverBackground
                    onClick={backHome}
                />

                {isLoggedIn ? (
                    <>
                        <NotificationsHeader />
                        <MessagesHeader />

                        <Button to="/topics/new-topic" iconLeft="plus-circle">
                            New topic
                        </Button>

                        <DropdownHeader />
                    </>
                ) : (
                    <>
                        <MenuLinkStyled to="/login">Log in</MenuLinkStyled>
                        <Button to="/signup">Create an account</Button>
                    </>
                )}
            </Nav>
        </Container>
    )
}

export default Header
