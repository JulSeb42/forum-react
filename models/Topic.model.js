const { Schema, model } = require("mongoose")

const topicSchema = new Schema(
    {
        title: String,

        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Post",
            },
        ],

        createdBy: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],

        dateCreated: String,
        timeCreated: String,
        dateLastPost: String,
        timeLastPost: String,
    },
    {
        timestamps: true,
    }
)

const Topic = model("Topic", topicSchema)

module.exports = Topic
