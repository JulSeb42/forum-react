// Packages
import React, { useState, useEffect } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"

// Components
import * as Font from "../components/styles/Font"
import Page from "../components/layouts/Page"
import ListTopics from "../components/posts/ListTopics"
import CardTopic from "../components/posts/CardTopic"
import TitleFlex from "../components/ui/TitleFlex"
import Button from "../components/ui/Button"

// Utils
import slugify from "../components/utils/slugify"

function Search() {
    const location = useLocation().pathname
    const searchKeywords = location.split("/")[2].replace("%20", " ")

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
    const [search, setSearch] = useState(searchKeywords)
    const [category, setCategory] = useState("all")

    const handleSearch = e => setSearch(e.target.value)
    const handleCategory = e => setCategory(e.target.value)

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

    let results = sortedTopics.filter(topic => {
        return (
            topic.title.toLowerCase().includes(search.toLowerCase()) ||
            topic.createdBy.username
                .toLowerCase()
                .includes(search.toLowerCase())
        )
    })

    if (category !== "all") {
        results = results.filter(topic => slugify(topic.category) === category)
    }

    return (
        <Page
            title="Home"
            onChangeSearch={handleSearch}
            valueSearch={search}
            onChangeCategory={handleCategory}
            valueCategory={category}
        >
            <Font.H1>Results</Font.H1>

            {!isLoading && results.length > 0 ? (
                <ListTopics>
                    {results
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
                <Font.P>Your search did not find anything.</Font.P>
            )}
        </Page>
    )
}

export default Search
