const { Schema, model } = require("mongoose")

const postSchema = new Schema(
    {
        poster: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],

        body: String,
        dateCreated: String,
        timeCreated: String,
        dateEdited: String,
        timeEdited: String,
    },
    {
        timestamps: true,
    }
)

const Post = model("Post", postSchema)

module.exports = Post
