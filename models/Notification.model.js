const { Schema, model } = require("mongoose")

const notificationSchema = new Schema(
    {
        sender: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

        receiver: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

        topic: {
            type: Schema.Types.ObjectId,
            ref: "Topic",
        },

        type: {
            type: String,
            enum: ["response", "upvote"]
        },
        
        date: String,
        time: String,
    },
    {
        timestamps: true,
    }
)

const Notification = model("Notification", notificationSchema)

module.exports = Notification
