// Imports
const router = require("express").Router()

const Topic = require("../models/Topic.model")

// Get search results
router.get("/search/:query", (req, res, next) => {
    const query = req.params.query
    const search = { $regex: query, $options: "-i" }

    Topic.find({ search: search })
        .populate("createdBy")
        .populate({
            path: "posts",
            populate: {
                path: "poster",
                model: "User",
            },
        })
        .then(foundTopics => {
            return res.status(200).json(foundTopics)
        })
        .catch(err => next(err))
})

module.exports = router
