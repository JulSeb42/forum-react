const { Schema, model } = require("mongoose")

const conversationSchema = new Schema(
    {
        user1: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

        user2: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

        messages: [
            {
                sender: {
                    type: Schema.Types.ObjectId,
                    ref: "User",
                },
                message: String,
                date: String,
                time: String,
            },
        ],

        dateCreated: String,
        timeCreated: String,
        readUser1: Boolean,
        readUser2: Boolean,
    },
    {
        timestamps: true,
    }
)

const Conversation = model("Conversation", conversationSchema)

module.exports = Conversation
