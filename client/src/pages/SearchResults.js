// Imports
import React, { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { Font } from "tsx-library-julseb"

import searchService from "../api/search.service"

import Page from "../components/layouts/Page"
import TopicList from "../components/topics/TopicList"

const SearchResults = () => {
    const [query] = useSearchParams()
    const searchQuery = query.get("query")

    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        searchService
            .getQuery(searchQuery)
            .then(res => {
                setTopics(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [searchQuery])

    const title =
        searchQuery === "" || searchQuery === null
            ? "All topics"
            : `Results for ${searchQuery}`

    return (
        <Page title={title}>
            <Font.H1>{title}</Font.H1>

            <TopicList
                topics={topics}
                isLoading={isLoading}
                search={searchQuery}
            />
        </Page>
    )
}

export default SearchResults
