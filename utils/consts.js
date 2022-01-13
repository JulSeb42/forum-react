const MONGO_URI =
    process.env.MONGODB_URI || "mongodb://localhost/forum"

module.exports = MONGO_URI
