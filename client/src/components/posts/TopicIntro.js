// Packages
import React, { useContext } from "react"
import styled from "styled-components"

// Components
import { AuthContext } from "../../context/auth"
import * as Font from "../styles/Font"
import * as Variables from "../styles/Variables"
import Votes from "./Votes"
import Button from "../ui/Button"
import PostHeader from "./PostHeader"
import MarkdownContainer from "./MarkdownContainer"

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

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

function TopicIntro({ topic, ...props }) {
    const { isLoggedIn, user } = useContext(AuthContext)

    return (
        <Container>
            <TitleContainer>
                <Font.H1>{topic.title}</Font.H1>

                <Font.P>
                    {topic.category.charAt(0).toUpperCase() +
                        topic.category.slice(1)}
                </Font.P>
            </TitleContainer>

            <PostHeader topic={topic} />

            <MarkdownContainer body={topic.posts[0].body} />

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
