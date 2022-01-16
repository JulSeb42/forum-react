require("dotenv/config")
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI)

// Generate users
const User = require("../models/User.model")

// Packages
const bcrypt = require("bcryptjs")
const password = "Password42"
const salt = bcrypt.genSaltSync()
const hash = bcrypt.hashSync(password, salt)
const convertToEmail = require("../utils/convertToEmail")
const getRandomString = require("../utils/getRandomString")
const getRandomLocation = require("../utils/getRandomLocation")
const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

const allUsers = require("./seeds/fake-users.json")

// imageUrl: i <= 2 ? `https://randomuser.me/api/portraits/men/${i}.jpg` : `https://randomuser.me/api/portraits/women/${i}.jpg`,

const fakeUsers = []

const realUser = {
    email: "julien.sebag@me.com",
    username: "julseb",
    password: hash,
    imageUrl:
        "https://res.cloudinary.com/dyfxmafvr/image/upload/v1642294204/forum-app/fdwqyhowauvfigyhux7b.jpg",
    gender: "male",
    location: "Berlin, Germany",
    bio: "Don't panic.",
    role: "admin",
    topics: [],
    posts: [],
    conversations: [],
    notifications: [],
    verified: true,
    verifyToken: getRandomString(20),
}

for (let i = 0; i < allUsers.length; i++) {
    fakeUsers.push({
        username: allUsers[i].username.toLowerCase(),
        email: convertToEmail(allUsers[i].firstName, allUsers[i].surname),
        password: hash,
        imageUrl: `https://randomuser.me/api/portraits/${
            allUsers[i].gender === "male"
                ? "men"
                : allUsers[i].gender === "female"
                ? "women"
                : ""
        }/${i}.jpg`,
        gender: allUsers[i].gender,
        location: getRandomLocation(),
        role: "user",
        verified: true,
        verifyToken: getRandomString(20),
        bio: bio,
        topics: [],
        posts: [],
        conversations: [],
        notifications: [],
    })
}

User.insertMany(realUser)
    .then(user => {
        console.log(
            `Success, ${user.length} real user was added to the database`
        )
    })
    .catch(err => console.log(err))

User.insertMany(fakeUsers)
    .then(user => {
        console.log(`Success, ${user.length} users were added to the database`)
        mongoose.connection.close()
    })
    .catch(err => console.log(err))
