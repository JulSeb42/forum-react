// Imports
import React from "react"
import { Link } from "react-router-dom"
import { Font, Flexbox, Avatar } from "tsx-library-julseb"
import { getToday, convertDateShort } from "js-utils-julseb"
import convertTimeShort from "../../utils/convertTimeShort"

import CardContainer from "../ui/CardContainer"

const CardNotification = ({ notification }) => {
    const { topic, type, date, time, sender } = notification

    return (
        <CardContainer as={Flexbox} alignItems="center" gap="xs">
            <Avatar size={32} src={sender.imageUrl} alt={sender.username} />

            <Font.P style={{ flexGrow: 1 }}>
                <Link to={`/users/${sender.username}`}>{sender.username}</Link>{" "}
                {type === "comment" ? "commented on" : "liked your topic"}{" "}
                <Link to={`/topics/${topic._id}`}>{topic.title}</Link>
            </Font.P>

            <Font.Small align="right">
                {date === getToday() ? "Today" : convertDateShort(date)}
                <br />
                at {convertTimeShort(time)}
            </Font.Small>
        </CardContainer>
    )
}

export default CardNotification
