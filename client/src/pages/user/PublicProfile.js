// Imports
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { PageLoading, Font } from "tsx-library-julseb"

import usersService from "../../api/users.service"
import topicsService from "../../api/topics.service"

import Page from "../../components/layouts/Page"
import CardUser from "../../components/user/CardUser"
import TopicList from "../../components/topics/TopicList"

const PublicProfile = ({ edited, setEdited }) => {
    const { username } = useParams()

    const [person, setPerson] = useState()
    const [userTopics, setUserTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        usersService
            .getUsername(username)
            .then(res => setPerson(res.data))
            .catch(err => console.log(err))

        topicsService
            .allTopics()
            .then(res => {
                setUserTopics(
                    res.data.filter(
                        topic => topic.createdBy.username === username
                    )
                )
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [username])

    return (
        <Page title={username}>
            {isLoading ? (
                <PageLoading />
            ) : (
                <>
                    <CardUser
                        user={person}
                        edited={edited}
                        setEdited={setEdited}
                    />

                    <Font.H2>Their topics</Font.H2>

                    <TopicList topics={userTopics} isLoading={isLoading} />
                </>
            )}
        </Page>
    )
}

export default PublicProfile
