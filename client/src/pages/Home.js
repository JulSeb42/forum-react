// Packages
import React, { useState, useEffect } from "react"
import axios from "axios"

// Components
import * as Font from "../components/styles/Font"
import Page from "../components/layouts/Page"
import ListTopics from "../components/posts/ListTopics"
import CardTopic from "../components/posts/CardTopic"
import TitleFlex from "../components/ui/TitleFlex"
import Button from "../components/ui/Button"

function Home() {
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

    // Search
    let sortedTopics = allTopics.sort((a, b) => {
        if (
            a.posts[a.posts.length - 1].dateCreated ===
            b.posts[b.posts.length - 1].dateCreated
        ) {
            return b.posts[b.posts.length - 1].timeCreated.localeCompare(
                a.posts[a.posts.length - 1].timeCreated
            )
        }
        return (
            new Date(b.posts[b.posts.length - 1].dateCreated) -
            new Date(a.posts[a.posts.length - 1].dateCreated)
        )
    })

    console.log(allTopics)

    return (
        <Page title="Home">
            <TitleFlex>
                <Font.H1>All topics</Font.H1>

                <Button
                    to="/topics/new-topic"
                    btnstyle="primary"
                    icon="plus-circle"
                >
                    Add a new topic
                </Button>
            </TitleFlex>

            {!isLoading && allTopics.length > 0 ? (
                <ListTopics>
                    {sortedTopics
                        .sort((a, b) => {
                            if (
                                a.posts[a.posts.length - 1].dateCreated ===
                                b.posts[b.posts.length - 1].dateCreated
                            ) {
                                return b.posts[
                                    b.posts.length - 1
                                ].timeCreated.localeCompare(
                                    a.posts[a.posts.length - 1].timeCreated
                                )
                            }

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
