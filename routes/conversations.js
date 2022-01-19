const router = require("express").Router()
const Conversation = require("../models/Conversation.model")
const User = require("../models/User.model")

// Get all conversations
router.get("/conversations", (req, res, next) => {
    Conversation.find()
        .populate("user1")
        .populate("user2")
        .populate({
            path: "messages",
            populate: {
                path: "sender",
                model: "User",
            },
        })
        .then(conversationFromDb => res.status(200).json(conversationFromDb))
        .catch(err => next(err))
})

// Get conversation by id
router.get("/conversation/:id", (req, res, next) => {
    Conversation.findById(req.params.id)
        .populate("user1")
        .populate("user2")
        .populate({
            path: "messages",
            populate: {
                path: "sender",
                model: "User",
            },
        })
        .then(conversationFromDb => res.status(200).json(conversationFromDb))
        .catch(err => next(err))
})

// New conversation
router.put("/new-conversation", (req, res, next) => {
    const { user1, user2, createdDay, createdTime } = req.body

    Conversation.create({
        user1,
        user2,
        // messages: { sender: user1, message, createdDay, createdTime },
        createdDay,
        createdTime,
        read: false,
    })
        .then(createdConversation => {
            User.findOneAndUpdate(
                { _id: user1 },
                { $push: { conversations: createdConversation, contacted: user2 } }
            ).then(() => {
                User.findOneAndUpdate(
                    { _id: user2 },
                    { $push: { conversations: createdConversation, contactedBy: user1 } }
                ).then(() => {
                    res.status(200).json({ createdConversation })
                })
            })
        })
        .catch(err => next(err))
})

// New message
router.put("/new-message", (req, res, next) => {
    const { id, sender, message, createdDay, createdTime, read } = req.body

    Conversation.findOneAndUpdate(
        { _id: id },
        {
            $push: {
                messages: {
                    sender,
                    message,
                    createdDay,
                    createdTime,
                },
            },
            read: false,
        }
    )
        .then(updatedConversation => {
            res.status(200).json({ conversation: updatedConversation })
        })
        .catch(err => next(err))
})

// Set conversation as read
router.put("/read/:id", (req, res, next) => {
    Conversation.findByIdAndUpdate(req.params.id, { read: true }, { new: true })
        .then(updatedConversation => {
            res.status(200).json({ conversation: updatedConversation })
        })
        .catch(err => next(err))
})

module.exports = router
