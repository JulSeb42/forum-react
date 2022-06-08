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
        dateCreated: String,
        timeCreated: String,
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        category: String,
        likes: Number,
        likedBy: Array,
        search: Array,
    },
    {
        timestamps: true,
    }
)

const Topic = model("Topic", topicSchema)

module.exports = Topic
