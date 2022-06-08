// Imports
import React, { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Grid, Font } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import SearchUsers from "./SearchUsers"
import LoadContainer from "../ui/LoadContainer"
import CardUserSmall from "./CardUserSmall"
import Pagination from "../ui/Pagination"

import { pageLimit } from "../../config/pagination.config"

const ListUsers = ({ users, isLoading }) => {
    const [inputs, setInputs] = useState({
        username: "",
        role: "all",
        items: "12",
    })

    const handleChange = e =>
        setInputs({ ...inputs, [e.target.id]: e.target.value })

    let results = users.filter(user =>
        user.username.toLowerCase().includes(inputs.username.toLowerCase())
    )

    if (inputs.role !== "all") {
        if (inputs.role === "admin") {
            results = results.filter(user => user.admin)
        } else if (inputs.role === "user") {
            results = results.filter(user => !user.admin)
        }
    }

    // Search & pagination
    const [query] = useSearchParams()
    const pageNumber = query.get("page")

    const [currentPage, setCurrentPage] = useState(
        pageNumber === null ? 1 : pageNumber
    )

    const getPaginatedData = () => {
        const startIndex = currentPage * inputs.items - inputs.items
        const endIndex = startIndex + inputs.items
        return results.slice(startIndex, endIndex)
    }

    const numberOfPages = Math.ceil(results.length / inputs.items)

    return isLoading ? (
        <LoadContainer />
    ) : (
        <>
            <SearchUsers
                users={users}
                onChange={handleChange}
                inputs={inputs}
            />

            {results.length > 0 ? (
                <Grid col={3} gap="l">
                    {getPaginatedData().map(user => (
                        <CardUserSmall user={user} key={uuid()} />
                    ))}
                </Grid>
            ) : (
                <Font.P>Your search did not return any result.</Font.P>
            )}

            {numberOfPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    data={results}
                    totalPages={numberOfPages}
                    dataLimit={inputs.items}
                    pageLimit={pageLimit}
                />
            )}
        </>
    )
}

export default ListUsers
