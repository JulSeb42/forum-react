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
    const {
        title,
        createdBy,
        body,
        dateCreated,
        timeCreated,
        category,
        likes,
    } = req.body

    if (!title) {
        return res
            .status(400)
            .json({ message: "Title can not be empty" })
    }

    if (!category) {
        return res.status(400).json({ message: "Category can not be empty" })
    }

    if (!body) {
        return res.status(400).json({ message: "Body can not be empty" })
    }

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
                    res.status(200).json({ user: updatedUser, createdTopic })
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
    const { title, body, dateEdited, timeEdited, category, postId } = req.body

    if (!title) {
        return res.status(400).json({ message: "Title can not be empty" })
    }

    if (!category) {
        return res.status(400).json({ message: "Category can not be empty" })
    }

    if (!body) {
        return res.status(400).json({ message: "Body can not be empty" })
    }

    Post.findByIdAndUpdate(
        postId,
        { body, dateEdited, timeEdited },
        { new: true }
    )
        .then(() => {
            Topic.findByIdAndUpdate(
                req.params.id,
                { title, category },
                { new: true }
            ).then(editedTopic => {
                res.status(200).json({ editedTopic })
            })
        })
        .catch(err => next(err))
})

// Delete topic
router.delete("/delete-topic/:id", (req, res, next) => {
    Topic.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(200).json({ message: "Topic deleted." })
        })
        .catch(err => next(err))
})

module.exports = router
