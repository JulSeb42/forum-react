// Imports
import React, { useState } from "react"
import { createSearchParams, useNavigate } from "react-router-dom"
import { Input } from "tsx-library-julseb"

const Search = () => {
    const navigate = useNavigate()

    const [query, setQuery] = useState("")
    const handleQuery = e => setQuery(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()

        navigate({
            pathname: "/search-results",
            search: createSearchParams({ query: query }).toString(),
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                placeholder="Search"
                id="search"
                type="search"
                onChange={handleQuery}
                value={query}
            />
        </form>
    )
}

export default Search
