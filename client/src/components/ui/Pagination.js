// Imports
import React from "react"
import { useNavigate, createSearchParams } from "react-router-dom"
import { Pagination as Container, PaginationButton, Variables } from "tsx-library-julseb"
import styled from "styled-components"

const Button = styled(PaginationButton)`
    @media ${Variables.Breakpoints.Mobile} {
        --size: 24px;
    }
`

const Pagination = ({
    currentPage,
    setCurrentPage,
    totalPages,
    pageLimit,
    query,
}) => {
    const navigate = useNavigate()

    const nextPage = () => {
        setCurrentPage(currentPage + 1)

        query
            ? navigate({
                  pathname: "",
                  search: createSearchParams({
                      query: query,
                      page: currentPage + 1,
                  }).toString(),
              })
            : navigate({
                  pathname: "",
                  search: createSearchParams({
                      page: currentPage + 1,
                  }).toString(),
              })

        window.scrollTo(0, 0)
    }

    const prevPage = () => {
        setCurrentPage(currentPage - 1)

        query
            ? navigate({
                  pathname: "",
                  search: createSearchParams({
                      query: query,
                      page: currentPage - 1,
                  }).toString(),
              })
            : navigate({
                  pathname: "",
                  search: createSearchParams({
                      page: currentPage - 1,
                  }).toString(),
              })

        window.scrollTo(0, 0)
    }

    const changePage = e => {
        const pageNumber = Number(e.target.textContent)
        setCurrentPage(pageNumber)

        query
            ? navigate({
                  pathname: "",
                  search: createSearchParams({
                      query: query,
                      page: pageNumber,
                  }).toString(),
              })
            : navigate({
                  pathname: "",
                  search: createSearchParams({
                      page: pageNumber,
                  }).toString(),
              })

        window.scrollTo(0, 0)
    }

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
        return new Array(pageLimit)
            .fill()
            .map((_, i) => start + i + 1)
            .filter(item => item <= totalPages)
    }

    return (
        <Container>
            <Button
                onClick={prevPage}
                prev
                disabled={parseInt(currentPage) === 1 && true}
            />

            {getPaginationGroup()[0] !== 1 && (
                <>
                    <Button number={1} onClick={changePage} />
                    <Button more />
                </>
            )}

            {getPaginationGroup().map(item => (
                <Button
                    number={item}
                    key={item}
                    onClick={changePage}
                    active={parseInt(currentPage) === item && true}
                />
            ))}

            {getPaginationGroup()[getPaginationGroup().length - 1] !==
                totalPages && (
                <>
                    <Button more />

                    <Button number={totalPages} onClick={changePage} />
                </>
            )}

            <Button
                onClick={nextPage}
                next
                disabled={parseInt(currentPage) === totalPages && true}
            />
        </Container>
    )
}

export default Pagination
