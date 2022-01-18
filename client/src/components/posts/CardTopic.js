// Packages
import React from "react"
import styled from "styled-components"
import Link from "../utils/LinkScroll"

// Components
import * as Font from "../styles/Font"
import * as Variables from "../styles/Variables"
import Icon from "../ui/Icon"
import Votes from "./Votes"
import MarkdownContainer from "./MarkdownContainer"

// Utils
import convertDateShort from "../utils/convertDateShort"
import getToday from "../utils/getToday"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: ${Variables.Margins.S};
    background-color: ${Variables.Colors.White};
    border-radius: ${Variables.Radiuses.M};
    box-shadow: ${Variables.Effects.Shadow};
    padding: ${Variables.Margins.M};
`

const Content = styled.span`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.S};

    hr {
        width: 100%;
        border: none;
        height: 1px;
        background-color: ${Variables.Colors.LightGray};
    }
`

const TitleContainer = styled.span`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XXS};

    p {
        color: ${Variables.Colors.Gray};
    }
`

const Title = styled(Font.H3)`
    color: ${Variables.Colors.Primary};
    text-decoration: none;
    transition: ${Variables.Transitions.Short};

    &:hover {
        color: ${Variables.Colors.Primary70};
    }
`

// const Text = styled(Markdown)`
//     overflow: hidden;
//     text-overflow: ellipsis;
//     display: -webkit-box;
//     -webkit-line-clamp: 5; /* number of lines to show */
//     line-clamp: 5;
//     -webkit-box-orient: vertical;
// `

const Footer = styled.span`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${Variables.Margins.XS};

    small:nth-child(2) {
        text-align: center;
    }
`

const TextIcon = styled(Font.Small)`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & > span {
        margin-right: ${Variables.Margins.XXS};
    }
`

// Markdown options
// const options = {
//     forceBlock: true,

//     overrides: {
//         h2: {
//             component: Font.P,
//         },

//         h3: {
//             component: Font.P,
//         },

//         h4: {
//             component: Font.P,
//         },

//         h5: {
//             component: Font.P,
//         },

//         h6: {
//             component: Font.P,
//         },

//         p: {
//             component: Font.P,
//         },

//         strong: {
//             component: Font.Strong,
//         },

//         em: {
//             component: Font.Em,
//         },

//         ul: {
//             component: Font.List,
//         },

//         small: {
//             component: Font.Small,
//         },

//         Link: {
//             component: Link,
//         },
//     },
// }

function CardTopic({ topic, ...props }) {
    return (
        <Container>
            <Votes topic={topic} />

            <Content>
                <TitleContainer>
                    <Title as={Link} to={`/topics/${topic._id}`}>
                        {topic.title}
                    </Title>

                    <Font.P>
                        {topic.category.charAt(0).toUpperCase() +
                            topic.category.slice(1)}
                    </Font.P>
                </TitleContainer>

                <MarkdownContainer body={topic.posts[0].body} card />

                <hr />

                <Footer>
                    <Font.Small>
                        By{" "}
                        <Link to={`/users/${topic.createdBy.username}`}>
                            {topic.createdBy.username}
                        </Link>
                    </Font.Small>

                    <Font.Small>
                        {topic.posts[topic.posts.length - 1].dateCreated !==
                            getToday() && (
                            <>
                                {convertDateShort(
                                    topic.posts[topic.posts.length - 1]
                                        .dateCreated
                                )}{" "}
                                at{" "}
                            </>
                        )}
                        {topic.posts[topic.posts.length - 1].timeCreated}
                    </Font.Small>

                    <TextIcon>
                        <Icon
                            name="message"
                            color={Variables.Colors.Gray}
                            size={14}
                        />{" "}
                        <span>{topic.posts.length - 1}</span>
                    </TextIcon>
                </Footer>
            </Content>
        </Container>
    )
}

export default CardTopic
