// Packages
const router = require("express").Router()
const Post = require("../models/Post.model")
const Topic = require("../models/Topic.model")
const User = require("../models/User.model")

router.get("/posts", (req, res, next) => {
    Post.find()
        .populate("poster")
        .then(postFromDb => res.status(200).json(postFromDb))
        .catch(err => next(err))
})

// Post an answer
router.put("/new-post", (req, res, next) => {
    const { body, poster, dateCreated, timeCreated, topicId } = req.body

    if (body === "") {
        return res
            .status(400)
            .json({ message: "Your answer can not be empty." })
    }

    Post.create({ poster, body, dateCreated, timeCreated })
        .then(createdPost => {
            Topic.findByIdAndUpdate(
                topicId,
                {
                    $push: { posts: createdPost },
                    dateLastPost: dateCreated,
                    timeLastPost: timeCreated,
                },
                { new: true }
            ).then(() => {
                User.findOneAndUpdate(
                    { _id: poster },
                    { $push: { posts: createdPost } },
                    { new: true }
                ).then(updatedUser => {
                    res.status(200).json({ user: updatedUser })
                })
            })
        })
        .catch(err => next(err))
})

// Edit answer
router.put("/edit-post/:id", (req, res, next) => {
    const { body, dateEdited, timeEdited } = req.body

    if (!body) {
        return res
            .status(400)
            .json({ message: "Your answer can not be empty." })
    }

    Post.findByIdAndUpdate(req.params.id, { body, dateEdited, timeEdited })
        .then(updatedPost => res.status(200).json(updatedPost))
        .catch(err => next(err))
})

// Delete answer
router.delete("/delete-post/:id", (req, res, next) => {
    Post.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(200).json({ message: "Post deleted." })
        })
        .catch(err => next(err))
})

module.exports = router
