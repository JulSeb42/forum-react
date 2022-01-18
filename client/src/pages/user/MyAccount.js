// Packages
import React, { useContext, useState, useEffect } from "react"
import axios from "axios"

// Components
import { AuthContext } from "../../context/auth"
import * as Font from "../../components/styles/Font"
import Page from "../../components/layouts/Page"
import Link from "../../components/utils/LinkScroll"
import Item from "../../components/layouts/Item"
import ListTopics from "../../components/posts/ListTopics"
import CardTopic from "../../components/posts/CardTopic"
import UserCard from "../../components/user/UserCard"

function MyAccount() {
    const { user } = useContext(AuthContext)

    // Get and filter all topics
    const [allTopics, setAllTopics] = useState([])

    useEffect(() => {
        axios
            .get("/topics/topics")
            .then(res => setAllTopics(res.data))
            .catch(err => console.log(err))
    }, [])

    const filteredTopics = allTopics
        .filter(topic => topic.createdBy._id === user._id)
        .sort((a, b) => {
            return (
                new Date(b.posts[b.posts.length - 1].dateCreated) -
                new Date(a.posts[a.posts.length - 1].dateCreated)
            )
        }).slice(0, 3)

    return (
        <Page title={user.username}>
            <UserCard user={user} dashboard />

            {!user.verified && <Font.P>Your account is not verified.</Font.P>}

            <Item>
                <Font.H2>Your topics</Font.H2>

                {user.topics.length > 0 ? (
                    <ListTopics>
                        {filteredTopics.map(topic => (
                            <CardTopic topic={topic} key={topic._id} />
                        ))}

                        {filteredTopics.length >= 3 && (
                            <Font.P style={{ textAlign: "center" }}>
                                <Link to={`/users/${user.username}`}>
                                    See all your topics
                                </Link>
                            </Font.P>
                        )}
                    </ListTopics>
                ) : (
                    <Font.P>You did not create any topic yet.</Font.P>
                )}
            </Item>
        </Page>
    )
}

export default MyAccount
