// Imports
import React, { useContext, useState, useEffect } from "react"
import { Font } from "tsx-library-julseb"

import { AuthContext } from "../../context/auth"
import topicsService from "../../api/topics.service"

import Page from "../../components/layouts/Page"
import CardUser from "../../components/user/CardUser"
import TopicList from "../../components/topics/TopicList"

const MyAccount = () => {
    const { user } = useContext(AuthContext)

    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        topicsService.allTopics().then(res => {
            setTopics(res.data.filter(topic => topic.createdBy._id === user._id))
            setIsLoading(false)
        })
    }, [user._id])

    return (
        <Page title={user.username}>
            <CardUser user={user} account />

            {!user.verified && <Font.P>Your account is not verified.</Font.P>}

            <Font.H2>Your topic</Font.H2>

            <TopicList topics={topics} isLoading={isLoading} />
        </Page>
    )
}

export default MyAccount
