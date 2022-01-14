const { Schema, model } = require("mongoose")

const conversationSchema = new Schema(
    {
        user1: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],

        user2: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],

        messages: [
            {
                sender: {
                    type: Schema.Types.ObjectId,
                    ref: "User",
                },

                message: {
                    type: String,
                    required: true,
                },

                createdDay: String,
                createdTime: String,
            },
        ],

        dateCreated: String,
        timeCreated: String,
        dateLastMessage: String,
        timeLastMessage: String,
        read: Boolean,
    },
    {
        timestamps: true,
    }
)

const Conversation = model("Conversation", conversationSchema)

module.exports = Conversation
