// Imports
import React, { useContext, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { Grid, Font } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import { AuthContext } from "../../context/auth"
import usersService from "../../api/users.service"

import Page from "../../components/layouts/Page"
import Pagination from "../../components/ui/Pagination"
import CardNotification from "../../components/user/CardNotification"
import LoadContainer from "../../components/ui/LoadContainer"

import { pageLimit } from "../../config/pagination.config"
import convertTimeShort from "../../utils/convertTimeShort"

const Notifications = ({ edited, setEdited }) => {
    const { user, setUser, setToken } = useContext(AuthContext)
    const dataLimit = 20

    const [notifications, setNotifications] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        usersService
            .getUser(user._id)
            .then(res => {
                setNotifications(res.data.notifications)
                setIsLoading(false)
            })
            .catch(err => console.log(err))

        setTimeout(() => {
            usersService
                .readNotifications(user._id)
                .then(res => {
                    setUser(res.data.user)
                    setToken(res.data.authToken)
                    setEdited(!edited)
                })
                .catch(err => console.log(err))
        }, 100)
        // eslint-disable-next-line
    }, [user._id])

    // Search & pagination
    const [query] = useSearchParams()
    const pageNumber = query.get("page")

    const [currentPage, setCurrentPage] = useState(
        pageNumber === null ? 1 : pageNumber
    )

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit

        return notifications
            .sort((a, b) => {
                return a.date === b.date
                    ? convertTimeShort(b.time).localeCompare(
                          convertTimeShort(a.time)
                      )
                    : new Date(b.date) - new Date(a.date)
            })
            .slice(startIndex, endIndex)
    }

    const numberOfPages = Math.ceil(notifications.length / dataLimit)

    return (
        <Page title="Notifications">
            <Font.H1>Notifications</Font.H1>

            {isLoading ? (
                <LoadContainer />
            ) : notifications.length > 0 ? (
                <Grid gap="l">
                    {getPaginatedData().map(notification => (
                        <CardNotification
                            notification={notification}
                            key={uuid()}
                        />
                    ))}
                </Grid>
            ) : (
                <Font.P>No notification yet.</Font.P>
            )}

            {numberOfPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    data={notifications}
                    totalPages={numberOfPages}
                    dataLimit={dataLimit}
                    pageLimit={pageLimit}
                />
            )}
        </Page>
    )
}

export default Notifications
