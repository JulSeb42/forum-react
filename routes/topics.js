// Packages
const router = require("express").Router()
const Topic = require("../models/Topic.model")

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

module.exports = router
