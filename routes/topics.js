// Packages
const router = require("express").Router()
const Topic = require("../models/Topic.model")
const User = require("../models/User.model")
const Post = require("../models/Post.model")

router.get("/topics", (req, res, next) => {
    Topic.find()
        .populate("createdBy")
        .populate({
            path: "posts",
            populate: {
                path: "poster",
                model: "User",
            },
        })
        .then(topicFromDb => res.status(200).json(topicFromDb))
        .catch(err => next(err))
})

// Get topic by ID
router.get("/topic/:id", (req, res, next) => {
    Topic.findById(req.params.id)
        .populate("createdBy")
        .populate("posts")
        .populate({
            path: "posts",
            populate: {
                path: "poster",
                model: "User",
            },
        })
        .then(topicFromDb => res.status(200).json(topicFromDb))
        .catch(err => next(err))
})

// Create topic
router.put("/new-topic", (req, res, next) => {
    const { title, createdBy, body, dateCreated, timeCreated, category, likes } =
        req.body

    Post.create({ poster: createdBy, body, dateCreated, timeCreated })
        .then(createdPost => {
            Topic.create({
                title,
                createdBy,
                posts: createdPost,
                dateCreated,
                timeCreated,
                category,
                likes,
                body,
            }).then(createdTopic => {
                User.findOneAndUpdate(
                    { _id: createdBy },
                    { $push: { posts: createdPost, topics: createdTopic } },
                    { new: true }
                ).then(updatedUser => {
                    res.status(200).json({ user: updatedUser })
                })
            })
        })
        .catch(err => next(err))
})

// Like and dislike topic
router.put("/like/:id", (req, res, next) => {
    const { likes, user, likesBy } = req.body

    Topic.findByIdAndUpdate(req.params.id, { likes, $push: { likesBy } })
        .then(updatedTopic => {
            User.findByIdAndUpdate(user, {
                $push: { likedTopics: updatedTopic },
            }).then(updatedUser => {
                res.status(200).json({ user: updatedUser })
            })
        })
        .catch(err => next(err))
})

router.put("/dislike/:id", (req, res, next) => {
    const { likes, user, likesBy } = req.body

    Topic.findByIdAndUpdate(req.params.id, { likes, $pull: { likesBy } })
        .then(updatedTopic => {
            User.findByIdAndUpdate(user, {
                $pull: { likedTopics: updatedTopic._id },
            }).then(updatedUser => {
                res.status(200).json({ user: updatedUser })
            })
        })
        .catch(err => next(err))
})

// Edit topic
router.put("/edit-topic/:id", (req, res, next) => {
    
})

module.exports = router
