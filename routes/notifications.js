const router = require("express").Router()
const Notification = require("../models/Notification.model")
const User = require("../models/User.model")

// Get all notifications
router.get("/notifications", (req, res, next) => {
    Notification.find()
        .populate("sender")
        .populate("receiver")
        .populate("topic")
        .then(notificationFromDb => {
            res.status(200).json(notificationFromDb)
        })
        .catch(err => next(err))
})

// Get notification by ID
router.get("/notification/:id", (req, res, next) => {
    Notification.findById(req.params.id)
        .populate("sender")
        .populate("receiver")
        .populate("topic")
        .then(notificationFromDb => {
            res.status(200).json(notificationFromDb)
        })
        .catch(err => next(err))
})

// Send notification
router.put("/new-notification", (req, res, next) => {
    const { sender, receiver, topic, type, date, time } = req.body

    Notification.create({ sender, receiver, topic, type, date, time })
        .then(createdNotification => {
            User.findByIdAndUpdate(
                receiver,
                {
                    $push: { notifications: createdNotification },
                    unreadNotification: true,
                },
                { new: true }
            ).then(updatedUser => {
                res.status(200).json({ user: updatedUser })
            })
        })
        .catch(err => next(err))
})

// Read notification
router.put("/read/:id", (req, res, next) => {
    User.findByIdAndUpdate(
        req.params.id,
        { unreadNotification: false },
        { new: true }
    )
        .then(updatedUser => {
            res.status(200).json({ user: updatedUser })
        })
        .catch(err => next(err))
})

module.exports = router
