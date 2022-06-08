// Imports
require("dotenv/config")
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const {
    getRandomString,
    getRandomAvatar,
    convertToEmail,
    getRandomLocation,
    getRandom,
} = require("js-utils-julseb")

const User = require("../../models/User.model")

const password = "Password42"
const salt = bcrypt.genSaltSync()
const hash = bcrypt.hashSync(password, salt)

mongoose.connect(process.env.MONGODB_URI)

const users = require("./fake-users.json")
const quotes = require("./movie-quotes.json")

const fakeUsers = []

const adminUser = {
    email: "admin@email.com",
    username: "admin",
    password: hash,
    imageUrl: getRandomAvatar("male"),
    location: "Berlin, Germany",
    bio: "Don't panic.",
    admin: true,
    verified: true,
    verifyToken: getRandomString(20),
}

fakeUsers.push(adminUser)

for (let i = 0; i < users.length; i++) {
    fakeUsers.push({
        email: convertToEmail(`${users[i].firstName} ${users[i].surname}`),
        username: users[i].username,
        password: hash,
        imageUrl:  getRandomAvatar("other"),
        location: getRandomLocation(),
        bio: getRandom(quotes),
        admin: false,
        verified: true,
        verifyToken: getRandomString(20),
    })
}

User.insertMany(fakeUsers)
    .then(users => {
        console.log(
            `Success, you added ${users.length} user${
                users.length > 1 ? "s" : ""
            } to the db`
        )
        mongoose.connection.close()
    })
    .catch(err => console.log(err))
