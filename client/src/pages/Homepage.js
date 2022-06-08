// Imports
import React, { useContext, useState, useEffect } from "react"
import { Font, Button } from "tsx-library-julseb"

import { AuthContext } from "../context/auth"
import topicsService from "../api/topics.service"

import Page from "../components/layouts/Page"
import TopicList from "../components/topics/TopicList"
import TitleFlex from "../components/ui/TitleFlex"

const Homepage = ({ edited, setEdited }) => {
    const { isLoggedIn } = useContext(AuthContext)

    const [allTopics, setAllTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        topicsService
            .allTopics()
            .then(res => {
                setAllTopics(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Page title="Homepage">
            <TitleFlex>
                <Font.H1>All topics</Font.H1>

                {isLoggedIn && (
                    <Button to="/topics/new-topic" iconLeft="plus-circle">
                        Add a new topic
                    </Button>
                )}
            </TitleFlex>

            <TopicList
                topics={allTopics}
                edited={edited}
                setEdited={setEdited}
                isLoading={isLoading}
            />
        </Page>
    )
}

export default Homepage
