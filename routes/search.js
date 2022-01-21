const router = require("express").Router()

const Topic = require("../models/Topic.model")
const User = require("../models/User.model")

router.put("/search/:keywords", (req, res, next) => {
    Topic.find({ title: req.params.keywords })
        .then(topicFromDb => res.status(200).json(topicFromDb))
        .catch(err => next(err))
})

router.get("/results", (req, res, next) => {
    Topic.find({ title: req.params.keywords })
        .then(topicFromDb => res.status(200).json(topicFromDb))
        .catch(err => next(err))
})

module.exports = router
