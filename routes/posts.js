// Packages
const router = require("express").Router()
const Post = require("../models/Post.model")

router.get("/posts", (req, res, next) => {
    Post.find()
        .populate("poster")
        .then(postFromDb => res.status(200).json(postFromDb))
        .catch(err => next(err))
})

module.exports = router
