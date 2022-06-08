const { Schema, model } = require("mongoose")

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: String,
        imageUrl: String,
        verified: Boolean,
        verifyToken: String,
        resetToken: String,
        topics: [
            {
                type: Schema.Types.ObjectId,
                ref: "Topic",
            },
        ],
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Post",
            },
        ],
        conversations: [
            {
                type: Schema.Types.ObjectId,
                ref: "Conversation",
            },
        ],
        admin: Boolean,
        notifications: [
            {
                topic: {
                    type: Schema.Types.ObjectId,
                    ref: "Topic",
                },
                type: {
                    type: String,
                    enum: ["like", "comment"],
                },
                date: String,
                time: String,
                sender: {
                    type: Schema.Types.ObjectId,
                    ref: "User",
                },
            },
        ],
        location: String,
        bio: String,
        hasUnreadNotifications: Boolean,
    },
    {
        timestamps: true,
    }
)

const User = model("User", userSchema)

module.exports = User
