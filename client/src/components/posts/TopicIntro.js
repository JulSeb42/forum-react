// Packages
import React, { useContext } from "react"
import styled from "styled-components"
import Markdown from "markdown-to-jsx"

// Components
import { AuthContext } from "../../context/auth"
import * as Font from "../styles/Font"
import * as Variables from "../styles/Variables"
import Link from "../utils/LinkScroll"
import ProfilePicture from "../user/ProfilePicture"
import Votes from "./Votes"
import Button from "../ui/Button"

// Utils
import convertDateShort from "../utils/convertDateShort"
import getToday from "../utils/getToday"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.M};
`

const TitleContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XXS};

    p {
        color: ${Variables.Colors.Gray};
    }
`

const InfoContainer = styled.div`
    display: grid;
    grid-template-columns: 48px 1fr;
    gap: ${Variables.Margins.M};
`

const TextTitle = styled.span`
    color: ${Variables.Colors.Gray};
`

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

// Options markdown
const options = {
    forceBlock: true,

    overrides: {
        h2: {
            component: Font.H2,
        },

        h3: {
            component: Font.H3,
        },

        h4: {
            component: Font.H4,
        },

        h5: {
            component: Font.H5,
        },

        h6: {
            component: Font.H6,
        },

        p: {
            component: Font.P,
        },

        strong: {
            component: Font.Strong,
        },

        em: {
            component: Font.Em,
        },

        ul: {
            component: Font.List,
        },

        small: {
            component: Font.Small,
        },

        Link: {
            component: Link,
        },
    },
}

function TopicIntro({ topic, ...props }) {
    const { isLoggedIn, user } = useContext(AuthContext)

    return (
        <Container>
            <TitleContainer>
                <Font.H1>{topic.title}</Font.H1>

                <Font.P>{topic.category.charAt(0).toUpperCase() + topic.category.slice(1)}</Font.P>
            </TitleContainer>

            <InfoContainer>
                <ProfilePicture
                    src={topic.createdBy.imageUrl}
                    alt={topic.createdBy.username}
                    size={48}
                />

                <TextTitle>
                    <Font.P>
                        <Link to={`/users/${topic.createdBy._id}`}>
                            {topic.createdBy.username}
                        </Link>
                    </Font.P>

                    <Font.Small>
                        {topic.posts[topic.posts.length - 1].dateCreated !==
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
                </TextTitle>
            </InfoContainer>

            <Markdown options={options}>{topic.posts[0].body}</Markdown>

            {isLoggedIn && user._id === topic.createdBy._id ? (
                <Footer>
                    <Votes topic={topic} post />

                    <Button
                        to={`/topics/${topic._id}/edit`}
                        btnstyle="secondary"
                    >
                        Edit
                    </Button>
                </Footer>
            ) : (
                <Votes topic={topic} post />
            )}
        </Container>
    )
}

export default TopicIntro
