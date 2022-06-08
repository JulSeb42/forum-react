// Imports
import React, { useContext, useState } from "react"
import { InputCheck } from "tsx-library-julseb"

import { AuthContext } from "../../context/auth"
import usersService from "../../api/users.service"

const SetAdmin = ({ user, list }) => {
    const { isLoggedIn, user: loggedInUser } = useContext(AuthContext)

    const [isAdmin, setIsAdmin] = useState(user.admin)

    const handleAdmin = e => {
        e.preventDefault()

        if (e.target.checked) {
            setIsAdmin(true)

            usersService
                .setAdmin(user._id, { admin: true, email: user.email })
                .then(() => window.location.reload(false))
                .catch(err => console.log(err))
        } else {
            setIsAdmin(false)

            usersService
                .setAdmin(user._id, { admin: false, email: user.email })
                .then(() => window.location.reload(false))
                .catch(err => console.log(err))
        }
    }

    return (
        isLoggedIn &&
        loggedInUser.admin &&
        loggedInUser._id !== user._id && (
            <InputCheck
                label={`Set ${list ? "user " : ""}as admin`}
                id={`set-admin-${user.username}`}
                type="checkbox"
                justify="start"
                name="setAdmin"
                toggle
                onChange={handleAdmin}
                defaultChecked={isAdmin}
            />
        )
    )
}

export default SetAdmin
