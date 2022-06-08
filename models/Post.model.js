const { Schema, model } = require("mongoose")

const postSchema = new Schema(
    {
        body: String,
        poster: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
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
