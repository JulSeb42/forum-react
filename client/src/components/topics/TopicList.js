// Imports
import React, { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Grid, Font } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import LoadContainer from "../ui/LoadContainer"
import Pagination from "../ui/Pagination"
import TopicCard from "./TopicCard"

import { dataLimit, pageLimit } from "../../config/pagination.config"

const TopicList = ({ isLoading, topics, search, edited, setEdited }) => {
    // Search & pagination
    const [query] = useSearchParams()
    const pageNumber = query.get("page")

    const [currentPage, setCurrentPage] = useState(
        pageNumber === null ? 1 : pageNumber
    )

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit

        return topics
            .sort((a, b) => {
                const lastPostA = a.posts[a.posts.length - 1]
                const lastPostB = b.posts[b.posts.length - 1]

                const dateA = new Date(
                    lastPostA.dateCreated + " " + lastPostA.timeCreated
                )
                const dateB = new Date(
                    lastPostB.dateCreated + " " + lastPostB.timeCreated
                )

                const dateAEdited = lastPostA.dateEdited
                    ? new Date(
                          lastPostA.dateEdited + " " + lastPostA.timeEdited
                      )
                    : ""
                const dateBEdited = lastPostB.dateEdited
                    ? new Date(
                          lastPostB.dateEdited + " " + lastPostB.timeEdited
                      )
                    : ""

                if (dateAEdited !== "" && dateBEdited !== "") {
                    return dateBEdited.getTime() - dateAEdited.getTime()
                }

                return dateB.getTime() - dateA.getTime()
            })
            .slice(startIndex, endIndex)
    }

    const numberOfPages = Math.ceil(topics.length / dataLimit)

    return (
        <>
            {isLoading ? (
                <LoadContainer />
            ) : search && topics.length === 0 ? (
                <Font.P>Your search did not return any result.</Font.P>
            ) : topics.length === 0 ? (
                <Font.P>No topic yet.</Font.P>
            ) : (
                <Grid gap="s">
                    {getPaginatedData().map(topic => (
                        <TopicCard
                            topic={topic}
                            edited={edited}
                            setEdited={setEdited}
                            key={uuid()}
                        />
                    ))}
                </Grid>
            )}

            {numberOfPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    data={topics}
                    totalPages={numberOfPages}
                    dataLimit={dataLimit}
                    pageLimit={pageLimit}
                    query={search}
                />
            )}
        </>
    )
}

export default TopicList
