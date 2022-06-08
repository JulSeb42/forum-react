// Imports
import React, { useState } from "react"
import { createSearchParams, useNavigate } from "react-router-dom"
import { Input, Variables } from "tsx-library-julseb"
import styled, { css } from "styled-components"

const Container = styled.form`
    ${({ mobile }) =>
        mobile
            ? css`
                  display: none;

                  @media ${Variables.Breakpoints.Mobile} {
                      display: inherit;
                      flex-grow: 1;
                  }
              `
            : css`
                  display: inline;

                  @media ${Variables.Breakpoints.Mobile} {
                      display: none;
                  }
              `}
`

const Search = ({ mobile }) => {
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
        <Container mobile={mobile} onSubmit={handleSubmit}>
            <Input
                placeholder="Search"
                id={`search-${mobile ? "-mobile" : ""}`}
                type="search"
                onChange={handleQuery}
                value={query}
            />
        </Container>
    )
}

export default Search
