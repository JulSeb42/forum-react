// Packages
import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"

// Components
import { AuthContext } from "../../context/auth"
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import Button from "../ui/Button"
import LinkScroll from "../utils/LinkScroll"
import ProfilePicture from "../user/ProfilePicture"

// Styles
const Container = styled.aside`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.L};
    align-content: start;
`

const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-content: start;
    background-color: ${Variables.Colors.White};
    box-shadow: ${Variables.Effects.Shadow};
    border-radius: ${Variables.Radiuses.M};

    h6 {
        padding: ${Variables.Margins.XS};
    }

    hr {
        border: none;
        height: 1px;
        background-color: ${Variables.Colors.LightGray};
        width: calc(100% - ${Variables.Margins.XS} * 2);
    }
`

const Link = styled(LinkScroll)`
    display: flex;
    align-items: center;
    color: ${Variables.Colors.Black};
    text-decoration: none;
    transition: ${Variables.Transitions.Short};
    padding: ${Variables.Margins.XS};

    &:hover {
        background-color: ${Variables.Colors.LighterGray};
    }

    & > img,
    .name {
        margin-right: ${Variables.Margins.XXS};
    }

    .name {
        flex-grow: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
    }
`

function Aside(props) {
    const { isLoggedIn, user } = useContext(AuthContext)

    // Get all users
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        axios
            .get("/users/user")
            .then(res => setAllUsers(res.data))
            .catch(err => console.log(err))
    }, [])

    let sortedUsers = allUsers
        // .filter(foundUser => foundUser._id !== user._id)
        .sort((a, b) => {
            if (a.topics.length === b.topics.length) {
                return a.username < b.username ? -1 : 1
            }

            return b.topics.length - a.topics.length
        })
        .slice(0, 6)

    if (isLoggedIn) {
        sortedUsers = sortedUsers.filter(
            foundUser => foundUser._id !== user._id
        )
    }

    const LinkUser = props => {
        return (
            <Link to={`/users/${props.to}`}>
                <ProfilePicture
                    src={props.imageUrl}
                    alt={
                        props.username === "You"
                            ? user.username
                            : props.username
                    }
                    size={24}
                />

                <span className="name">{props.username}</span>

                <span>
                    {props.topics.length} topic
                    {props.topics.length <= 1 ? "" : "s"}
                </span>
            </Link>
        )
    }

    return (
        <Container>
            {isLoggedIn && (
                <Button icon="plus-circle" btnstyle="primary" to="/topics/new-topic">
                    Start a new topic
                </Button>
            )}

            <Card>
                <Font.H6>Top users</Font.H6>

                {sortedUsers.map(user => (
                    <LinkUser
                        key={user._id}
                        username={user.username}
                        to={user.username}
                        imageUrl={user.imageUrl}
                        topics={user.topics}
                    />
                ))}

                {isLoggedIn && (
                    <>
                        <hr />
                        <LinkUser
                            username="You"
                            to={user.username}
                            imageUrl={user.imageUrl}
                            topics={user.topics}
                        />
                    </>
                )}
            </Card>
        </Container>
    )
}

export default Aside
