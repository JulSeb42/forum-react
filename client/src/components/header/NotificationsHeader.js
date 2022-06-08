// Imports
import React, { useContext } from "react"
import { useLocation } from "react-router-dom"

import { AuthContext } from "../../context/auth"

import ButtonHeader from "./ButtonHeader"

const NotificationsHeader = () => {
    const { user } = useContext(AuthContext)
    const location = useLocation().pathname

    return (
        <ButtonHeader
            icon="bell"
            aria-label="Notifications"
            to="/notifications"
            size={32}
            btnStyle={location === "/notifications" ? "plain" : "transparent"}
            hoverBackground
            dot={user.hasUnreadNotifications}
        />
    )
}

export default NotificationsHeader
