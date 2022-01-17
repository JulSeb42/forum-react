// Packages
import React from "react"
import styled from "styled-components"
import Link from "../utils/LinkScroll"
import Markdown from "markdown-to-jsx"

// Components
import * as Font from "../styles/Font"
import * as Variables from "../styles/Variables"
import Icon from "../ui/Icon"
// import Votes from "./Votes"

// Utils
import convertDateShort from "../utils/convertDateShort"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.S};
    background-color: ${Variables.Colors.White};
    border-radius: ${Variables.Radiuses.M};
    box-shadow: ${Variables.Effects.Shadow};
    padding: ${Variables.Margins.M};
`

const Content = styled.span``

const Title = styled(Font.H3)``

const Text = styled(Markdown)``

const Footer = styled.span``

const TextIcon = styled(Font.Small)``

// Markdown options
const options = {
    forceBlock: true,

    overrides: {
        h2: {
            component: Font.P,
        },

        h3: {
            component: Font.P,
        },

        h4: {
            component: Font.P,
        },

        h5: {
            component: Font.P,
        },

        h6: {
            component: Font.P,
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

function CardTopic({ topic }) {
    return (
        <Container>
            {/* <Votes topic={topic} edited={edited} setEdited={setEdited} /> */}

            <Content>
                <Title as={Link} to={`/topics/${topic._id}`}>
                    {topic.title}
                </Title>

                <Text options={options}>{topic.posts[0].body}</Text>

                <hr />

                <Footer>
                    <TextIcon>
                        By{" "}
                        <Link to={`/users/${topic.createdBy.username}`}>
                            {topic.createdBy.username}
                        </Link>
                    </TextIcon>

                    <Font.Small>
                        Updated{" "}
                        {convertDateShort(
                            topic.posts[topic.posts.length - 1].dateCreated
                        )}{" "}
                        at {topic.posts[topic.posts.length - 1].timeCreated}
                    </Font.Small>

                    <TextIcon>
                        <Icon
                            name="message"
                            color={Variables.Colors.Gray}
                            size={16}
                        />{" "}
                        <span>{topic.posts.length - 1}</span>
                    </TextIcon>
                </Footer>
            </Content>
        </Container>
    )
}

export default CardTopic
