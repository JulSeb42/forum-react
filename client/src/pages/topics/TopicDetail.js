// Packages
import React from "react"

// Components
import * as Font from "../../components/styles/Font"
import * as Variables from "../../components/styles/Variables"
import Page from "../../components/layouts/Page"
import TopicIntro from "../../components/posts/TopicIntro"
import ListPosts from "../../components/posts/ListPosts"
import Item from "../../components/layouts/Item"

function TopicDetail({ topic, ...props }) {
    const posts = topic.posts.slice(1)
    return (
        <Page title={topic.title}>
            <TopicIntro topic={topic} />

            <Font.P>
                {topic.posts.length - 1} answer
                {topic.posts.length - 1 > 1 && "s"}
            </Font.P>

            <hr />

            {posts.length === 0 ? (
                <Font.P>No anwser yet.</Font.P>
            ) : (
                <ListPosts>
                    {posts.map(post => (
                        <p key={post._id}></p>
                    ))}
                </ListPosts>
            )}
        </Page>
    )
}

export default TopicDetail
