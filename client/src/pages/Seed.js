// Imports
import React, { useState, useEffect } from "react"
import { Font } from "tsx-library-julseb"

import usersService from "../api/users.service"
import postsService from "../api/posts.service"
import topicsService from "../api/topics.service"

import Page from "../components/layouts/Page"

const Seed = () => {
    const [allUsers, setAllUsers] = useState([])
    const [allPosts, setAllPosts] = useState([])
    const [allTopics, setAllTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        usersService
            .allUsers()
            .then(res => setAllUsers(res.data))
            .catch(err => console.log(err))

        postsService
            .allPosts()
            .then(res => setAllPosts(res.data))
            .catch(err => console.log(err))

        topicsService
            .allTopics()
            .then(res => {
                setAllTopics(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Page title="Seed">
            <Font.H1>Seed</Font.H1>
            <Font.H2>Users</Font.H2>

            {isLoading ? (
                <Font.P>Loading...</Font.P>
            ) : (
                <ul>
                    {allUsers.map(user => (
                        <li key={user._id}>"{user._id}",</li>
                    ))}
                </ul>
            )}

            <Font.H2>Link topics to users</Font.H2>
            
            {isLoading ? (
                <Font.P>Loading...</Font.P>
            ) : (
                <>
                    {allUsers.map(user => (
                        <p style={{ whiteSpace: "pre-wrap" }}>
                            const {user.username.toLowerCase()}Id = "{user._id}"
                            <br />
                            const posts{user.username.toLowerCase()} = [
                            {allPosts
                                .filter(post => post.poster._id === user._id)
                                .map(post => `"${post._id}", `)}
                            ]
                            <br />
                            const topics{user.username.toLowerCase()} = [
                            {allTopics
                                .filter(
                                    topic => topic.createdBy._id === user._id
                                )
                                .map(topic => `"${topic._id}", `)}
                            ]
                            <br />
                            User.findByIdAndUpdate({user.username.toLowerCase()}
                            Id, &#123; $push: &#123; posts: posts
                            {user.username.toLowerCase()}, topics: topics
                            {user.username.toLowerCase()}
                            &#125; &#125;, &#123; new: true &#125;).then(()
                            =&gt; console.log("Success")).catch(err =&gt;
                            console.log(err))
                        </p>
                    ))}
                </>
            )}

            <Font.H2>Search</Font.H2>

            {isLoading ? (
                <Font.P>Loading...</Font.P>
            ) : (
                <>
                    {allTopics.map((topic, i) => (
                        <p style={{ whiteSpace: "pre-wrap" }}>
                            const topic{i} = "{topic._id}"
                            <br />
                            Topic.findByIdAndUpdate(topic{i}, &#123; $push:
                            &#123; search: "{topic.createdBy.username}" &#125;
                            &#125;, &#123; new: true &#125;).then(() =&gt;
                            console.log("Success")).catch(err =&gt;
                            console.log(err))
                        </p>
                    ))}
                </>
            )}
        </Page>
    )
}

export default Seed
