const { Schema, model } = require("mongoose")

const topicSchema = new Schema(
    {
        title: String,
        body: String,

        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Post",
            },
        ],

        dateCreated: String,
        timeCreated: String,
        dateLastPost: String,
        timeLastPost: String,
        category: String,
        likes: Number,
    },
    {
        timestamps: true,
    }
)

const Topic = model("Topic", topicSchema)

module.exports = Topic
