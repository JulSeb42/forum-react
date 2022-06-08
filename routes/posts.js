// Imports
const router = require("express").Router()
const jwt = require("jsonwebtoken")

const Topic = require("../models/Topic.model")
const Post = require("../models/Post.model")
const User = require("../models/User.model")

const jwtConfig = require("../utils/jwtConfig")

// Get all posts
router.get("/all-posts", (req, res, next) => {
    Post.find()
        .populate("poster")
        .then(postsFromDb => res.status(200).json(postsFromDb))
        .catch(err => next(err))
})

// Get post by ID
router.get("/post/:id", (req, res, next) => {
    Post.findById(req.params.id)
        .populate("poster")
        .then(postFromDb => res.status(200).json(postFromDb))
        .catch(err => next(err))
})

// New post
router.post("/new-post", (req, res, next) => {
    const { body, poster, dateCreated, timeCreated, topicId } = req.body

    if (!body) {
        return res.status(400).json({ message: "The body can not be empty." })
    }

    Post.create({ poster, body, dateCreated, timeCreated })
        .then(createdPost => {
            Topic.findByIdAndUpdate(
                topicId,
                { $push: { posts: createdPost } },
                { new: true }
            ).then(() => {
                User.findByIdAndUpdate(
                    poster,
                    { $push: { posts: createdPost } },
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
                        createdPost,
                    })
                })
            })
        })
        .catch(err => next(err))
})

// Edit post
router.put("/edit-post/:id", (req, res, next) => {
    const { body, dateEdited, timeEdited } = req.body

    if (!body) {
        return res.status(400).json({ message: "The body can not be empty." })
    }

    Post.findByIdAndUpdate(
        req.params.id,
        { body, dateEdited, timeEdited },
        { new: true }
    )
        .then(updatedPost => res.status(200).json(updatedPost))
        .catch(err => next(err))
})

// Delete post
router.delete("/delete-post/:id", (req, res, next) => {
    Post.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json({ message: "Post deleted." }))
        .catch(err => next(err))
})

module.exports = router
