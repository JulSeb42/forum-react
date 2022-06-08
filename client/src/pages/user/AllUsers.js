// Imports
import React, { useState, useEffect } from "react"
import { Font } from "tsx-library-julseb"

import usersService from "../../api/users.service"

import Page from "../../components/layouts/Page"
import ListUsers from "../../components/user/ListUsers"

const AllUsers = () => {
    const [allUsers, setAllUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        usersService
            .allUsers()
            .then(res => {
                setAllUsers(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Page title="All users">
            <Font.H1>All users</Font.H1>

            <ListUsers users={allUsers} isLoading={isLoading} />
        </Page>
    )
}

export default AllUsers
