// Imports
import React from "react"
import { Link } from "react-router-dom"
import { Avatar, Font, Flexbox } from "tsx-library-julseb"
import { convertDate, getToday } from "js-utils-julseb"

import convertTimeShort from "../../utils/convertTimeShort"

const PostHeader = ({ post }) => {
    const user = post.poster

    const date =
        new Date(post.dateCreated) === getToday()
            ? "Today"
            : convertDate(post.dateCreated)

    return (
        <Flexbox gap="xs" alignItems="center">
            <Avatar src={user.imageUrl} alt={user.username} size={48} />

            <Flexbox direction="column">
                <Font.P>
                    <Link to={`/users/${user.username}`}>{user.username}</Link>
                </Font.P>

                <Font.Small color="gray">
                    {date} at {convertTimeShort(post.timeCreated)}
                </Font.Small>
            </Flexbox>
        </Flexbox>
    )
}

export default PostHeader
