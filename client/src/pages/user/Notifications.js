// Packages
import React, { useContext, useEffect, useState } from "react"
import axios from "axios"

// Components
import { AuthContext } from "../../context/auth"
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
import ListNotifications from "../../components/user/ListNotifications"
import Notification from "../../components/user/Notification"

function Notifications(props) {
    const { user, updateUser } = useContext(AuthContext)

    // Get notifications
    const [allNotifications, setAllNotifications] = useState([])

    useEffect(() => {
        // Set notifications as read
        axios
            .put(`/notifications/read/${user._id}`)
            .then(res => {
                const { user } = res.data
                updateUser(user)
            })
            .catch(err => console.log(err))
        
        axios
            .get("/notifications/notifications")
            .then(res => setAllNotifications(res.data))
            .catch(err => console.log(err))
    }, [])

    const filteredNotifications = allNotifications
        .filter(notification => notification.receiver._id === user._id)
        .sort((a, b) => {
            if (a.date === b.date) {
                return b.time.localeCompare(a.time)
            }

            return new Date(b.date) - new Date(a.date)
        })

    return (
        <Page title="Notifications">
            <Font.H1>Your notifications</Font.H1>

            {filteredNotifications.length > 0 ? (
                <ListNotifications>
                    {filteredNotifications.map(notification => (
                        <Notification notification={notification} key={notification._id} />
                    ))}
                </ListNotifications>
            ) : (
                <Font.P>No notification.</Font.P>
            )}
        </Page>
    )
}

export default Notifications
