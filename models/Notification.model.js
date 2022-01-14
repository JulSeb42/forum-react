const { Schema, model } = require("mongoose")

const notificationSchema = new Schema(
    {
        user: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        body: String,
        date: String,
        time: String,
    },
    {
        timestamps: true,
    }
)

const Notification = model("Notification", notificationSchema)

module.exports = Notification
