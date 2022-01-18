const { Schema, model } = require("mongoose")

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },

        username: {
            type: String,
            unique: true,
            required: true,
        },

        password: String,
        imageUrl: String,
        gender: String,
        location: String,
        bio: String,
        
        admin: Boolean,

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

        notifications: [
            {
                type: Schema.Types.ObjectId,
                ref: "Notification",
            },
        ],

        unreadNotification: Boolean,

        likedTopics: [
            {
                type: Schema.Types.ObjectId,
                ref: "Topic",
            },
        ],

        verified: Boolean,
        verifyToken: String,
        resetToken: String,
    },
    {
        timestamps: true,
    }
)

const User = model("User", userSchema)

module.exports = User
