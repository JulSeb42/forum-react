// Packages
import React, { useState, useEffect } from "react"
import axios from "axios"

// Components
import * as Font from "../../components/styles/Font"
import Page from "../../components/layouts/Page"
import Item from "../../components/layouts/Item"
import ListTopics from "../../components/posts/ListTopics"
import CardTopic from "../../components/posts/CardTopic"
import UserCard from "../../components/user/UserCard"

function PublicProfile({ user }) {
    // Get and filter all topics
    const [allTopics, setAllTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get("/topics/topics")
            .then(res => {
                setAllTopics(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    const filteredTopics = allTopics
        .filter(topic => topic.createdBy._id === user._id)
        .sort((a, b) => {
            return (
                new Date(b.posts[b.posts.length - 1].dateCreated) -
                new Date(a.posts[a.posts.length - 1].dateCreated)
            )
        })

    return (
        <Page title={user.username}>
            <UserCard user={user} />

            <Item>
                <Font.H2>
                    {user.gender === "male"
                        ? "His"
                        : user.gender === "female"
                        ? "Her"
                        : "Their"}{" "}
                    topic{filteredTopics.length > 1 && "s"}
                </Font.H2>

                {!isLoading && user.topics.length > 0 ? (
                    <ListTopics>
                        {filteredTopics.map(topic => (
                            <CardTopic topic={topic} key={topic._id} />
                        ))}
                    </ListTopics>
                ) : (
                    <Font.P>
                        {user.username} did not create any topic yet.
                    </Font.P>
                )}
            </Item>
        </Page>
    )
}

export default PublicProfile
