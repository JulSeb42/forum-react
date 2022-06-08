// Imports
import React, { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "tsx-library-julseb"
import { getToday } from "js-utils-julseb"

import { AuthContext } from "../../context/auth"
import conversationsService from "../../api/conversations.service"

import getTimeSeconds from "../../utils/getTimeSeconds"

const ButtonConversation = ({ user, edited, setEdited }) => {
    const { user: loggedInUser, setUser, setToken } = useContext(AuthContext)
    const { username } = user
    const navigate = useNavigate()

    const [hasContacted, setHasContacted] = useState(false)
    const [allConversations, setAllConversations] = useState([])
    const [foundConversation, setFoundConversation] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        conversationsService
            .allConversations()
            .then(res => {
                setAllConversations(
                    res.data.filter(
                        conversation =>
                            (conversation.user1._id === loggedInUser._id &&
                                conversation.user2._id === user._id) ||
                            (conversation.user2._id === loggedInUser._id &&
                                conversation.user1._id === user._id)
                    )
                )
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [loggedInUser._id, user._id])

    // eslint-disable-next-line
    useEffect(() => {
        if (!isLoading && allConversations.length > 0) {
            setHasContacted(true)
            setFoundConversation(allConversations[0])
        }
    })

    const createConversation = e => {
        e.preventDefault()

        const requestBody = {
            user1: loggedInUser,
            user2: user,
            dateCreated: getToday(),
            timeCreated: getTimeSeconds(),
        }

        conversationsService
            .newConversation(requestBody)
            .then(res => {
                setUser(res.data.user)
                setToken(res.data.authToken)
                setEdited(!edited)
                navigate(`/messages/${res.data.createdConversation._id}`)
                window.location.reload(false)
            })
            .catch(err => console.log(err))
    }

    const goToConversation = () =>
        navigate(`/messages/${foundConversation._id}`)

    return (
        loggedInUser._id !== user._id && (
            <Button
                onClick={hasContacted ? goToConversation : createConversation}
            >
                Contact {username}
            </Button>
        )
    )
}

export default ButtonConversation
