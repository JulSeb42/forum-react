// Imports
const router = require("express").Router()
const jwt = require("jsonwebtoken")

const Conversation = require("../models/Conversation.model")
const User = require("../models/User.model")

const jwtConfig = require("../utils/jwtConfig")

// Get all conversations
router.get("/all-conversations", (req, res, next) => {
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
        .then(foundConversations => res.status(200).json(foundConversations))
        .catch(err => next(err))
})

// Get conversation by ID
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
        .then(foundConversation => res.status(200).json(foundConversation))
        .catch(err => next(err))
})

// New conversation
router.post("/new-conversation", (req, res, next) => {
    const { user1, user2, dateCreated, timeCreated } = req.body

    Conversation.create({ user1, user2, dateCreated, timeCreated })
        .then(createdConversation => {
            User.findByIdAndUpdate(
                user1._id,
                {
                    $push: { conversations: createdConversation },
                },
                { new: true }
            ).then(updatedUser => {
                User.findByIdAndUpdate(
                    user2._id,
                    {
                        $push: { conversations: createdConversation },
                    },
                    { new: true }
                ).then(() => {
                    const payload = { user: updatedUser }

                    const authToken = jwt.sign(
                        payload,
                        process.env.TOKEN_SECRET,
                        jwtConfig
                    )

                    res.status(201).json({
                        user: updatedUser,
                        authToken: authToken,
                        createdConversation,
                    })
                })
            })
        })
        .catch(err => next(err))
})

// New message
router.put("/new-message/:id", (req, res, next) => {
    const { sender, message, date, time, readUser1, readUser2 } =
        req.body

    const newMessage = { sender, message, date, time }

    if (!message) {
        return res
            .status(400)
            .json({ message: "Your message can not be empty." })
    }

    Conversation.findByIdAndUpdate(
        req.params.id,
        {
            $push: { messages: newMessage },
            readUser1,
            readUser2,
        },
        { new: true }
    )
        .then(updatedConversation => res.status(200).json(updatedConversation))
        .catch(err => next(err))
})

// Set conversation as read for user 1
router.put("/read-conversation/:id", (req, res, next) => {
    const { readUser1, readUser2 } = req.body

    Conversation.findByIdAndUpdate(
        req.params.id,
        { readUser1, readUser2 },
        { new: true }
    )
        .then(updatedConversation => res.status(200).json(updatedConversation))
        .catch(err => next(err))
})

module.exports = router
