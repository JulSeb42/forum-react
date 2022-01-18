// Packages
import React, { useState, useEffect } from "react"
import axios from "axios"

// Components
import * as Font from "../components/styles/Font"
import Page from "../components/layouts/Page"
import ListTopics from "../components/posts/ListTopics"
import CardTopic from "../components/posts/CardTopic"

// Utils
import slugify from "../components/utils/slugify"

function Search(props) {
    const [allTopics, setAllTopics] = useState([])

    useEffect(() => {
        axios
            .get("/topics/topics")
            .then(res => setAllTopics(res.data))
            .catch(err => console.log(err))
    }, [])

    // Search
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("all")

    const handleSearch = e => setSearch(e.target.value)
    const handleCategory = e => setCategory(e.target.value)

    let results = allTopics
        .filter(topic => {
            return (
                topic.title.toLowerCase().includes(search.toLowerCase()) ||
                topic.createdBy.username
                    .toLowerCase()
                    .includes(search.toLowerCase())
            )
        })
        .sort((a, b) => {
            return (
                new Date(b.posts[b.posts.length - 1].dateCreated) -
                new Date(a.posts[a.posts.length - 1].dateCreated)
            )
        })

    if (category !== "all") {
        results = results.filter(topic => slugify(topic.category) === category)
    }

    return (
        <Page
            title="Search"
            onChangeSearch={handleSearch}
            valueSearch={search}
            onChangeCategory={handleCategory}
            valueCategory={category}
        >
            <Font.H1>Topics</Font.H1>

            {allTopics.length === 0 ? (
                <Font.P>There is no topic yet.</Font.P>
            ) : results.length === 0 ? (
                <Font.P>Your search did not return anything.</Font.P>
            ) : (
                <ListTopics>
                    {results.map(topic => (
                        <CardTopic topic={topic} key={topic._id} />
                    ))}
                </ListTopics>
            )}
        </Page>
    )
}

export default Search
