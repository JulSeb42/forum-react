// Imports
const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../models/User.model")

const { passwordRegex } = require("js-utils-julseb")
const jwtConfig = require("../utils/jwtConfig")
const transporter = require("../utils/transporter")

// Salt password
const saltRounds = 10

// Get all users
router.get("/all-users", (req, res, next) => {
    User.find()
        .populate("posts")
        .populate("topics")
        .populate("conversations")
        .populate({
            path: "notifications",
            populate: {
                path: "sender",
                model: "User",
            },
        })
        .populate({
            path: "notifications",
            populate: {
                path: "topic",
                model: "Topic",
            },
        })
        .then(usersFromDb => res.status(200).json(usersFromDb))
        .catch(err => next(err))
})

// Get user by ID
router.get("/user/:id", (req, res, next) => {
    User.findById(req.params.id)
        .populate("posts")
        .populate("topics")
        .populate("conversations")
        .populate({
            path: "notifications",
            populate: {
                path: "sender",
                model: "User",
            },
        })
        .populate({
            path: "notifications",
            populate: {
                path: "topic",
                model: "Topic",
            },
        })
        .then(userFromDb => res.status(200).json(userFromDb))
        .catch(err => next(err))
})

// Get user by username
router.get("/username/:username", (req, res, next) => {
    User.findOne({ username: req.params.username })
        .populate("posts")
        .populate("topics")
        .populate("conversations")
        .populate({
            path: "notifications",
            populate: {
                path: "sender",
                model: "User",
            },
            populate: {
                path: "topic",
                model: "Topic",
            },
        })
        .then(foundUser => res.status(200).json(foundUser))
        .catch(err => next(err))
})

// Edit user
router.put("/edit-account/:id", (req, res, next) => {
    const { username, imageUrl, location, bio } = req.body

    if (username.length < 3) {
        return res.status(400).json({
            message: "Your username must be at least 3 characters long.",
        })
    }

    User.findByIdAndUpdate(
        req.params.id,
        { username, imageUrl, location, bio },
        { new: true }
    )
        .then(updatedUser => {
            // Payload
            const payload = { user: updatedUser }

            const authToken = jwt.sign(
                payload,
                process.env.TOKEN_SECRET,
                jwtConfig
            )

            res.status(201).json({
                user: updatedUser,
                authToken: authToken,
            })
        })
        .catch(err => next(err))
})

// Set user as admin
router.put("/set-admin/:id", (req, res, next) => {
    const { admin, email } = req.body

    User.findByIdAndUpdate(req.params.id, { admin }, { new: true })
        .then(updatedUser => {
            let mailDetails = {
                from: process.env.EMAIL,
                to: email,
                subject: "You are now an admin on our app",
                html: `Hello,<br /><br />You are now an admin on our app. <a href="${process.env.ORIGIN}/my-account">Go to your account</a>.`,
            }

            transporter.sendMail(mailDetails, (err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("Email sent successfully.")
                }
            })

            res.status(200).json(updatedUser)
        })
        .catch(err => next(err))
})

// Edit password
router.put("/edit-password/:id", (req, res, next) => {
    const { password } = req.body

    if (!passwordRegex.test(password)) {
        return res.status(400).json({
            message:
                "Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.",
        })
    }

    const salt = bcrypt.genSaltSync(saltRounds)
    const hashedPassword = bcrypt.hashSync(password, salt)

    User.findByIdAndUpdate(
        req.params.id,
        { password: hashedPassword },
        { new: true }
    )
        .then(updatedUser => {
            // Payload
            const payload = { user: updatedUser }

            const authToken = jwt.sign(
                payload,
                process.env.TOKEN_SECRET,
                jwtConfig
            )

            res.status(201).json({
                user: updatedUser,
                authToken: authToken,
            })
        })
        .catch(err => next(err))
})

// Delete user
router.delete("/delete-account/:id", (req, res, next) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(200).json({ message: "User deleted" })
        })
        .catch(err => next(err))
})

// Delete user from admin
router.delete("/delete-user/:email", (req, res, next) => {
    const email = req.params.email

    User.findOneAndDelete({ email: email })
        .then(() => {
            let mailDetails = {
                from: process.env.EMAIL,
                to: email,
                subject: "Your account was deleted on our app",
                html: `Hello,<br /><br />Your account was deleted on our app.`,
            }

            transporter.sendMail(mailDetails, (err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("Email sent successfully.")
                }
            })

            res.status(200).json({ message: "User deleted" })
        })
        .catch(err => next(err))
})

// Send notification
router.post("/new-notification", (req, res, next) => {
    const { receiver, topic, type, date, time, sender } = req.body

    const newNotification = {
        topic,
        type,
        date,
        time,
        sender,
    }

    User.findByIdAndUpdate(
        receiver._id,
        { $push: { notifications: newNotification }, hasUnreadNotifications: true },
        { new: true }
    )
        .then(updatedUser => res.status(200).json(updatedUser))
        .catch(err => next(err))
})

// Set notifications as read
router.put("/read-notification/:id", (req, res, next) => {
    User.findByIdAndUpdate(
        req.params.id,
        { hasUnreadNotifications: false },
        { new: true }
    )
        .then(updatedUser => {
            const payload = { user: updatedUser }

            const authToken = jwt.sign(
                payload,
                process.env.TOKEN_SECRET,
                jwtConfig
            )

            res.status(201).json({
                user: updatedUser,
                authToken: authToken,
            })
        })
        .catch(err => next(err))
})

module.exports = router
