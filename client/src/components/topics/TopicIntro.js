// Imports
import React from "react"
import { Grid, Font } from "tsx-library-julseb"
import { unslugify } from "js-utils-julseb"

const TopicIntro = ({ topic }) => {
    return (
        <Grid gap="xs">
            <Font.H1>{topic.title}</Font.H1>

            <Font.P color="gray">{unslugify(topic.category)}</Font.P>
        </Grid>
    )
}

export default TopicIntro
