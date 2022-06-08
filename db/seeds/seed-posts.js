// Imports
require("dotenv/config")
const mongoose = require("mongoose")
const { getRandom, getRandomDate, getRandomTime } = require("js-utils-julseb")

const Post = require("../../models/Post.model")

// Seed posts and topics
// First seed posts
// Then export the posts from Mongo
// Then see seed-topics file

mongoose.connect(process.env.MONGODB_URI)

// Data
const users = [
    "629bf7704dde1f9a74d730b4",
    "629bf7704dde1f9a74d730b5",
    "629bf7704dde1f9a74d730b6",
    "629bf7704dde1f9a74d730b7",
    "629bf7704dde1f9a74d730b8",
    "629bf7704dde1f9a74d730b9",
    "629bf7704dde1f9a74d730ba",
    "629bf7704dde1f9a74d730bb",
    "629bf7704dde1f9a74d730bc",
    "629bf7704dde1f9a74d730bd",
    "629bf7704dde1f9a74d730be",
    "629bf7704dde1f9a74d730bf",
    "629bf7704dde1f9a74d730c0",
    "629bf7704dde1f9a74d730c1",
    "629bf7704dde1f9a74d730c2",
    "629bf7704dde1f9a74d730c3",
    "629bf7704dde1f9a74d730c4",
    "629bf7704dde1f9a74d730c5",
    "629bf7704dde1f9a74d730c6",
    "629bf7704dde1f9a74d730c7",
    "629bf7704dde1f9a74d730c8",
]

const body =
    "Proin euismod dui justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. A porta urna placerat id. Pellentesque pharetra egestas dui a consequat. Nulla lacinia rhoncus sapien ornare porttitor. Fusce interdum pretium neque at pharetra. Etiam eleifend scelerisque nulla sit amet tempus. Vestibulum tortor orci, malesuada et dolor eu, volutpat sollicitudin nunc. Ut magna lacus, sagittis ut diam eget, accumsan viverra velit. Donec efficitur mauris neque, a fringilla odio imperdiet vitae. Proin elementum diam quis nulla fringilla porttitor. Integer quam nisi, mattis at nunc a, ultricies sodales libero. Nulla laoreet sem id diam rutrum ultricies. Nulla elementum augue urna, id posuere risus volutpat ut. Phasellus blandit pharetra ex vitae efficitur. Phasellus molestie lacus quam, quis interdum est consequat non. Nulla in dictum purus. In id sodales elit, ac efficitur libero. Pellentesque ultricies lorem vitae maximus fermentum. Quisque id consectetur sem A pellentesque massa. Aliquam ut tristique enim. Sed vel convallis libero, a lacinia velit. Fusce ornare posuere tortor, sed tristique libero egestas in. Vestibulum mattis bibendum urna, eget ultrices neque pellentesque in. Suspendisse ut nulla nec lacus viverra tempus vel sit amet nibh. Nunc dictum purus a lectus pretium, ac feugiat leo finibus. Etiam rhoncus vel libero eu commodo. Quisque sodales fringilla turpis, at cursus velit hendrerit vel."

const fakePosts = []

for (let i = 0; i < 52; i++) {
    fakePosts.push({
        poster: getRandom(users),
        body: body,
        dateCreated: getRandomDate(2020, 2021),
        timeCreated: getRandomTime(0, 23),
    })
}

Post.insertMany(fakePosts)
    .then(posts => {
        console.log(`You pushed ${posts.length} posts to the db`)
        mongoose.connection.close()
    })
    .catch(err => console.log(err))
