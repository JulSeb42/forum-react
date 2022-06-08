// Imports
const router = require("express").Router()

const fileUploader = require("../config/cloudinary.config")

// Upload picture
router.post(
    "/upload-picture",
    fileUploader.single("imageUrl"),
    (req, res, next) => {
        if (!req.file) {
            next(new Error("No file uploaded."))
            return
        }

        res.json({ secure_url: req.file.path })
    }
)

module.exports = router
