// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Font from "../styles/Font"
import * as Variables from "../styles/Variables"
import Link from "../utils/LinkScroll"

// Utils
import getToday from "../utils/getToday"

// Styles
const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

const Text = styled(Font.P)`
    margin-right: ${Variables.Margins.XS};
`

const Time = styled(Font.Small)`
    color: ${Variables.Colors.Gray};
`

function Notification({ notification }) {
    return (
        <Container>
            <Text>
                <Link to={`/users/${notification.sender.username}`}>
                    {notification.sender.username}
                </Link>{" "}
                {notification.type === "response"
                    ? "responded to "
                    : "upvoted "}{" "}
                your topic{" "}
                <Link to={`/topics/${notification.topic._id}`}>
                    {notification.topic.title}
                </Link>
            </Text>

            <Time>
                {notification.date !== getToday() && `${notification.date}, `}
                {notification.time}
            </Time>
        </Container>
    )
}

export default Notification
