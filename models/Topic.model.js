const { Schema, model } = require("mongoose")

const topicSchema = new Schema(
    {
        title: String,

        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

        posts: [
            {
                _id: Schema.Types.ObjectId,

                poster: {
                    type: Schema.Types.ObjectId,
                    ref: "User",
                },

                body: String,
                dateCreated: String,
                timeCreated: String,
                dateEdited: String,
                timeEdited: String,
            },
        ],

        dateCreated: String,
        timeCreated: String,
        dateLastPost: String,
        timeLastPost: String,
        likes: Number,
    },
    {
        timestamps: true,
    }
)

const Topic = model("Topic", topicSchema)

module.exports = Topic
