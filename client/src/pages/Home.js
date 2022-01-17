// Packages
import React, { useState, useEffect } from "react"
import axios from "axios"
import Link from "../components/utils/LinkScroll"

// Components
import * as Font from "../components/styles/Font"
import Page from "../components/layouts/Page"
import ListTopics from "../components/posts/ListTopics"
import CardTopic from "../components/posts/CardTopic"

function Home({ edited, setEdited }) {
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
                    {allTopics.map(topic => (
                        <CardTopic
                            topic={topic}
                            key={topic._id}
                            edited={edited}
                            setEdited={setEdited}
                        />
                    ))}
                </ListTopics>
            ) : (
                <Font.P>No topic yet.</Font.P>
            )}

            {/* {allTopics.map(topic => (
                <p key={topic._id}>
                    <Link to={`/topics/${topic._id}`}>{topic.title}</Link>,
                    created by{" "}
                    <Link to={`/users/${topic.createdBy.username}`}>
                        {topic.createdBy.username}
                    </Link>
                </p>
            ))} */}
        </Page>
    )
}

export default Home
