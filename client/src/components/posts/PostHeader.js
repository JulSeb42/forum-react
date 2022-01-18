// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import ProfilePicture from "../user/ProfilePicture"
import Link from "../utils/LinkScroll"

// Utils
import getToday from "../utils/getToday"
import convertDateShort from "../utils/convertDateShort"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: 48px 1fr;
    gap: ${Variables.Margins.M};
`

const TextTitle = styled.span`
    color: ${Variables.Colors.Gray};
`

function PostHeader({ topic, post, ...props }) {
    return (
        <Container>
            <ProfilePicture
                src={post ? post.poster.imageUrl : topic.createdBy.imageUrl}
                alt={post ? post.poster.username : topic.createdBy.username}
                size={48}
            />

            <TextTitle>
                <Font.P>
                    <Link
                        to={`/users/${
                            post
                                ? post.poster.username
                                : topic.createdBy.username
                        }`}
                    >
                        {post ? post.poster.username : topic.createdBy.username}
                    </Link>
                </Font.P>

                {post ? (
                    <Font.Small>
                        {post.dateCreated !== getToday() && (
                            <>{convertDateShort(post.dateCreated)} at</>
                        )}{" "}
                        {post.timeCreated}
                    </Font.Small>
                ) : (
                    <Font.Small>
                        {topic.posts[0].dateCreated !==
                            getToday() && (
                            <>
                                {convertDateShort(
                                    topic.posts[topic.posts.length - 1]
                                        .dateCreated
                                )}{" "}
                                at
                            </>
                        )}{" "}
                        {topic.posts[topic.posts.length - 1].timeCreated}
                    </Font.Small>
                )}
            </TextTitle>
        </Container>
    )
}

export default PostHeader
