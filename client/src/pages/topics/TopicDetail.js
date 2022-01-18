// Packages
import React, { useContext } from "react"

// Components
import { AuthContext } from "../../context/auth"
import * as Font from "../../components/styles/Font"
import Page from "../../components/layouts/Page"
import TopicIntro from "../../components/posts/TopicIntro"
import ListPosts from "../../components/posts/ListPosts"
import Answer from "../../components/posts/Answer"
import Link from "../../components/utils/LinkScroll"
import CardPost from "../../components/posts/CardPost"

function TopicDetail({ topic, ...props }) {
    const { isLoggedIn } = useContext(AuthContext)

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
                <Font.P>No answer yet.</Font.P>
            ) : (
                <ListPosts>
                    {posts.map(post => (
                        <CardPost post={post} key={post._id} />
                    ))}
                </ListPosts>
            )}

            {isLoggedIn ? (
                <Answer topic={topic} />
            ) : (
                <Font.P>
                    You must be <Link to="/login">logged in</Link> to post an
                    answer.
                </Font.P>
            )}
        </Page>
    )
}

export default TopicDetail
