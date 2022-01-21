// Packages
import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import { NavLink, useNavigate } from "react-router-dom"
import axios from "axios"

// Components
import * as Variables from "../styles/Variables"
import { AuthContext } from "../../context/auth"
import Link from "../utils/LinkScroll"
import ProfilePicture from "../user/ProfilePicture"
import Icon from "../ui/Icon"
import Button from "../ui/Button"
import Input from "../forms/Input"

// Data
import SiteData from "../data/SiteData"

// Styles
const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${Variables.Margins.L} 5vw;
    background-color: ${Variables.Colors.White};
    box-shadow: ${Variables.Effects.Shadow};
    position: relative;
`

const Burger = styled.button`
    display: none;

    @media ${Variables.Breakpoints.Mobile} {
        display: inline;
        position: relative;
        background: none;
        border: none;
        padding: 0;
        width: 30px;
        height: 20px;

        span {
            width: 100%;
            background-color: ${Variables.Colors.Primary};
            height: 2px;
            position: absolute;
            left: 0;
            transition: ${Variables.Transitions.Short};

            &:first-child {
                top: 0;
            }

            &:nth-child(2) {
                top: calc(50% - 2px / 2);
            }

            &:last-child {
                bottom: 0;
            }
        }

        &.open span {
            &:first-child {
                transform: rotate(45deg);
                top: 45%;
            }

            &:nth-child(2) {
                width: 0;
            }

            &:last-child {
                transform: rotate(-45deg);
                bottom: 45%;
            }
        }
    }
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & > *:not(:last-child) {
        margin-right: ${Variables.Margins.M};
    }

    .signup {
        margin-right: ${Variables.Margins.M};
    }

    @media ${Variables.Breakpoints.Mobile} {
        position: absolute;
        width: 100%;
        background-color: white;
        left: 0;
        top: -200px;
        padding: 0 5vw ${Variables.Margins.S} 5vw;
        flex-direction: column;
        align-items: flex-start;
        transition: ${Variables.Transitions.Short};

        &.open {
            top: 72px;
        }
    }
`

const StyledLink = styled(Link)`
    color: ${Variables.Colors.Primary};
    text-decoration: none;
    font-weight: ${Variables.FontWeights.Bold};
    transition: ${Variables.Transitions.Short};

    &:hover {
        color: ${Variables.Colors.Primary70};
    }
`

const ButtonIcon = styled(NavLink)`
    --size: 32px;
    width: var(--size);
    height: var(--size);
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Variables.Colors.Primary};
    transition: ${Variables.Transitions.Short};
    border-radius: 50%;
    position: relative;

    .icon {
        position: relative;
        z-index: 0;
    }

    &:hover {
        background-color: ${Variables.Colors.LighterGray};
    }

    &.active {
        background-color: ${Variables.Colors.Primary};
        color: ${Variables.Colors.White};

        &:hover {
            background-color: ${Variables.Colors.Primary70};
        }
    }
`

const ButtonDrawer = styled.button`
    padding: 0;
    border: none;
    background: none;
    margin-right: 0 !important;
`

const Drawer = styled.div`
    background-color: ${Variables.Colors.White};
    position: absolute;
    right: 5vw;
    top: 56px;
    box-shadow: ${Variables.Effects.Shadow};
    border-radius: ${Variables.Radiuses.M};
    overflow: hidden;
    max-height: 0;
    transition: ${Variables.Transitions.Long};

    hr {
        border: none;
        height: 1px;
        width: calc(100% - ${Variables.Margins.S} * 2);
        background-color: ${Variables.Colors.LightGray};
    }

    &.open {
        max-height: 300px;
    }
`

const LinkDrawer = styled(Link)`
    display: flex;
    align-items: center;
    padding: ${Variables.Margins.S};
    color: ${Variables.Colors.Primary};
    text-decoration: none;
    width: 100%;
    background: none;
    border: none;
    transition: ${Variables.Transitions.Short};

    & > span {
        margin-right: ${Variables.Margins.XXS};
    }

    &:hover {
        background-color: ${Variables.Colors.Primary};
        color: ${Variables.Colors.White};
    }
`

const Badge = styled.span`
    --size: 8px;
    width: var(--size);
    height: var(--size);
    background-color: ${Variables.Colors.Danger};
    position: absolute;
    top: ${Variables.Margins.XXS};
    right: ${Variables.Margins.XXS};
    border-radius: 50%;
`

function Header() {
    const { isLoggedIn, user, logoutUser } = useContext(AuthContext)
    const navigate = useNavigate()

    // Burger
    const [isOpen, setIsOpen] = useState(false)
    const open = isOpen ? "open" : ""

    // Account button
    const [isAccountOpen, setIsAccountOpen] = useState(false)
    const accountOpen = isAccountOpen ? "open" : ""

    // Check if user has any unread conversation
    const [allConversations, setAllConversations] = useState([])
    const [hasRead, setHasRead] = useState(false)

    useEffect(() => {
        axios
            .get("/conversations/conversations")
            .then(res => setAllConversations(res.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (isLoggedIn) {
            let filteredConversations = allConversations.filter(
                conversation =>
                    conversation.user1._id === user._id ||
                    conversation.user2._id === user._id
            )

            let unread = filteredConversations.filter(conversation => conversation.read === false)

            if (unread.length > 0) {
                setHasRead(true)
            }
        }
    })

    // Search
    const [query, setQuery] = useState("")
    const handleQuery = e => setQuery(e.target.value)

    const handleSearch = e => {
        e.preventDefault()

        axios
            .put(`/search/search/${query}`)
            .then(() => {
                navigate(`/search/${query}`)
                window.location.reload(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <StyledLink to="/">{SiteData.Name}</StyledLink>

            <Burger className={open} onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Burger>

            <Nav className={open}>
                <form onSubmit={handleSearch}>
                    <Input type="search" placeholder="Search topics or users" id="search" onChange={handleQuery} value={query} />
                </form>

                <ButtonIcon to="/" aria-label="Home">
                    <Icon name="home" size={24} />
                </ButtonIcon>

                {isLoggedIn ? (
                    <>
                        <ButtonIcon
                            to="/notifications"
                            aria-label="Notifications"
                        >
                            <Icon name="bell" size={24} className="icon" />

                            {user.unreadNotification && <Badge />}
                        </ButtonIcon>

                        <ButtonIcon to="/messages" aria-label="Messages">
                            <Icon name="chat" size={24} />

                            {hasRead && <Badge />}
                        </ButtonIcon>

                        <Button
                            to="/topics/new-topic"
                            btnstyle="primary"
                            icon="plus-circle"
                        >
                            New topic
                        </Button>

                        <ButtonDrawer
                            onClick={() => setIsAccountOpen(!isAccountOpen)}
                        >
                            <ProfilePicture
                                src={user.imageUrl}
                                alt={user.username}
                                size={32}
                            />
                        </ButtonDrawer>

                        <Drawer className={accountOpen}>
                            <LinkDrawer to="/my-account">
                                <Icon name="user" size={16} />
                                My account
                            </LinkDrawer>

                            <LinkDrawer to="/my-account/edit">
                                <Icon name="edit" size={16} />
                                Edit your account
                            </LinkDrawer>

                            <hr />

                            <LinkDrawer as="button" onClick={logoutUser}>
                                <Icon name="quit" size={16} />
                                Log out
                            </LinkDrawer>
                        </Drawer>
                    </>
                ) : (
                    <>
                        <Button
                            to="/signup"
                            className="signup"
                            btnstyle="primary"
                        >
                            Sign up
                        </Button>

                        <StyledLink to="/login">Log in</StyledLink>
                    </>
                )}
            </Nav>
        </Container>
    )
}

export default Header
