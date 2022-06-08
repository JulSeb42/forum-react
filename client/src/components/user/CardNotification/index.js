// Imports
import React from "react"
import { Link } from "react-router-dom"
import { Font, Avatar } from "tsx-library-julseb"
import { getToday, convertDateShort } from "js-utils-julseb"
import convertTimeShort from "../../../utils/convertTimeShort"

import { Container, Text } from "./styles"

const CardNotification = ({ notification }) => {
    const { topic, type, date, time, sender } = notification

    return (
        <Container>
            <Avatar size={32} src={sender.imageUrl} alt={sender.username} />

            <Text>
                <Font.P>
                    <Link to={`/users/${sender.username}`}>
                        {sender.username}
                    </Link>{" "}
                    {type === "comment" ? "commented on" : "liked your topic"}{" "}
                    <Link to={`/topics/${topic._id}`}>{topic.title}</Link>
                </Font.P>

                <Font.Small align="right">
                    {date === getToday() ? "Today" : convertDateShort(date)}{" "}
                    <br />
                    at {convertTimeShort(time)}
                </Font.Small>
            </Text>
        </Container>
    )
}

export default CardNotification
