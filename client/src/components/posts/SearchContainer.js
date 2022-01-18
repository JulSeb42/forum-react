// Packages
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

// Components
import * as Font from "../styles/Font"
import Item from "../layouts/Item"
import Form from "../forms/Form"
import Input from "../forms/Input"

// Utils
import slugify from "../utils/slugify"

// Styles
const Container = styled(Item)`
    grid-column: 2;
    align-content: start;
`

function SearchContainer(props) {
    const [allTopics, setAllTopics] = useState([])

    useEffect(() => {
        axios
            .get("/topics/topics")
            .then(res => setAllTopics(res.data))
            .catch(err => console.log(err))
    }, [])

    const allCategories = allTopics.map(topic => topic.category)
    const uniqCategories = [...new Set(allCategories)].sort()

    return (
        <Container>
            <Font.H4>Search</Font.H4>

            <Form as="div">
                <Input
                    label="Search"
                    id="search"
                    type="search"
                    placeholder="By topic name or username"
                    onChange={props.onChangeSearch}
                    value={props.valueSearch}
                />

                <Input
                    label="Category"
                    id="category"
                    as="select"
                    onChange={props.onChangeCategory}
                    value={props.valueCategory}
                >
                    <option value="all">All</option>

                    {uniqCategories.map(category => (
                        <option value={slugify(category)} key={category}>
                            {category.charAt(0).toUpperCase() +
                                category.slice(1)}
                        </option>
                    ))}
                </Input>
            </Form>
        </Container>
    )
}

export default SearchContainer
