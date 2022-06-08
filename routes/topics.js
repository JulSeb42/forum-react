// Imports
const router = require("express").Router()
const jwt = require("jsonwebtoken")

const Topic = require("../models/Topic.model")
const Post = require("../models/Post.model")
const User = require("../models/User.model")

const jwtConfig = require("../utils/jwtConfig")

// Get all topics
router.get("/all-topics", (req, res, next) => {
    Topic.find()
        .populate("createdBy")
        .populate({
            path: "posts",
            populate: {
                path: "poster",
                model: "User",
            },
        })
        .then(foundTopics => res.status(200).json(foundTopics))
        .catch(err => next(err))
})

// Get topic by ID
router.get("/topic/:id", (req, res, next) => {
    Topic.findById(req.params.id)
        .populate("createdBy")
        .populate({
            path: "posts",
            populate: {
                path: "poster",
                model: "User",
            },
        })
        .then(foundTopic => res.status(200).json(foundTopic))
        .catch(err => next(err))
})

// Create topic
router.post("/new-topic", (req, res, next) => {
    const { title, dateCreated, timeCreated, createdBy, category, body } =
        req.body

    if (!title || !category || !body) {
        return res.status(400).json({ message: "All items are mandatory." })
    }

    Post.create({ poster: createdBy, body, dateCreated, timeCreated })
        .then(createdPost => {
            Topic.create({
                title,
                createdBy,
                posts: [createdPost],
                dateCreated,
                timeCreated,
                category,
                likes: 0,
                search: `${title}, ${createdBy.username}, ${category}`,
            }).then(createdTopic => {
                User.findByIdAndUpdate(
                    createdBy._id,
                    {
                        $push: { posts: createdPost, topics: createdTopic },
                    },
                    { new: true }
                ).then(updatedUser => {
                    const payload = { user: updatedUser }

                    const authToken = jwt.sign(
                        payload,
                        process.env.TOKEN_SECRET,
                        jwtConfig
                    )

                    res.status(201).json({
                        user: updatedUser,
                        authToken: authToken,
                        createdTopic,
                        createdPost,
                    })
                })
            })
        })
        .catch(err => next(err))
})

// Edit topic
router.put("/edit-topic/:id", (req, res, next) => {
    const { title, body, category, dateEdited, timeEdited, postId } = req.body

    if (!title || !category || !body) {
        return res.status(400).json({ message: "All items are mandatory." })
    }

    Post.findByIdAndUpdate(
        postId,
        { body, dateEdited, timeEdited },
        { new: true }
    )
        .then(updatedPost => {
            Topic.findByIdAndUpdate(
                req.params.id,
                { title, category },
                { new: true }
            ).then(updatedTopic =>
                res.status(200).json({ updatedPost, updatedTopic })
            )
        })
        .catch(err => next(err))
})

// Like topic
router.put("/like/:id", (req, res, next) => {
    const { likes, user, likedBy } = req.body

    Topic.findByIdAndUpdate(
        req.params.id,
        { likes: likes, $push: { likedBy } },
        { new: true }
    )
        .then(updatedTopic => {
            User.findByIdAndUpdate(
                user,
                { $push: { likedTopics: updatedTopic } },
                { new: true }
            ).then(updatedUser => {
                const payload = { user: updatedUser }

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    jwtConfig
                )

                res.status(201).json({
                    user: updatedUser,
                    authToken: authToken,
                    topic: updatedTopic,
                    likes: likes,
                })
            })
        })
        .catch(err => next(err))
})

// Dislike topic
router.put("/dislike/:id", (req, res, next) => {
    const { likes, user, likedBy } = req.body

    Topic.findByIdAndUpdate(
        req.params.id,
        { likes: likes, $pull: { likedBy } },
        { new: true }
    )
        .then(updatedTopic => {
            User.findByIdAndUpdate(
                user,
                { $pull: { likedTopics: updatedTopic } },
                { new: true }
            ).then(updatedUser => {
                const payload = { user: updatedUser }

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    jwtConfig
                )

                res.status(201).json({
                    user: updatedUser,
                    authToken: authToken,
                    topic: updatedTopic,
                    likes: likes
                })
            })
        })
        .catch(err => next(err))
})

// Delete topic
router.delete("/delete-topic/:id", (req, res, next) => {
    Topic.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json({ message: "Topic deleted." }))
        .catch(err => next(err))
})

module.exports = router
