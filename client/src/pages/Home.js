// Packages
import React, { useState, useEffect } from "react"
import axios from "axios"

// Components
import * as Font from "../components/styles/Font"
import Page from "../components/layouts/Page"
import ListTopics from "../components/posts/ListTopics"
import CardTopic from "../components/posts/CardTopic"

function Home() {
    const [allTopics, setAllTopics] = useState([])

    useEffect(() => {
        axios
            .get("/topics/topics")
            .then(res => setAllTopics(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Page title="Home">
            <Font.H1>All topics</Font.H1>

            {allTopics.length > 0 ? (
                <ListTopics>
                    {allTopics
                        .sort((a, b) => {
                            return (
                                new Date(
                                    b.posts[b.posts.length - 1].dateCreated
                                ) -
                                new Date(
                                    a.posts[a.posts.length - 1].dateCreated
                                )
                            )
                        })
                        .map(topic => (
                            <CardTopic topic={topic} key={topic._id} />
                        ))}
                </ListTopics>
            ) : (
                <Font.P>No topic yet.</Font.P>
            )}
        </Page>
    )
}

export default Home
