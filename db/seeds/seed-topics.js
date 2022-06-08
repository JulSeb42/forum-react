// Imports
require("dotenv/config")
const mongoose = require("mongoose")
const { getRandom, getRandomNumber } = require("js-utils-julseb")

const Topic = require("../../models/Topic.model")

const posts = require("./posts.json")

mongoose.connect(process.env.MONGODB_URI)

const titles = [
    "The truth about Berlin is about to be revealed.",
    "7 ways Berlin can improve your business.",
    "5 reasons why people love Berlin.",
    "Seven things you should do in Berlin.",
    "Seven ways code can improve your business.",
    "15 disadvantages of code and how you can workaround it.",
    "Things that make you love and hate Berlin.",
    "5 beautiful reasons we can't help but fall in love with Berlin.",
    "Eliminate your fears and doubts about code.",
    "Five ways to introduce Berlin.",
    "Code will make you tons of cash. here's how!",
    "Top seven trends in code to watch.",
    "Seven code tips you need to learn now.",
    "Ten ugly truth about Berlin.",
    "Five reasons why you should go Berlin for your next vacation.",
    "Dining in Berlin: here's what you need to know about the food.",
    "Seven solid evidences why code is bad for your career development.",
    "15 secrets about Berlin that nobody will tell you.",
    "Seven tricks you should know when travelling to Berlin.",
    "5 things you probably didn't know about Berlin.",
    "Ten benefits of code that may change your perspective.",
    "Five reliable sources to learn about Berlin.",
    "Here's what no one tells you about code.",
    "The 15 reasons tourists love code.",
    "The 10 secrets that you shouldn't know about Berlin.",
    "15 important facts that you should know about code.",
    "Prevent culture shock! 15 things you should know about Berlin and their people!",
    "Eliminate your fears and doubts about Berlin.",
    "Ten Berlin that will actually make your life better.",
    "Introducing a revolutionary method to master code.",
    "Seven things you most likely didn't know about Berlin.",
    "7 basic tools you will need to learn code.",
    "10 unconventional knowledge about code that you can't learn from books.",
    "Ten things you need to know about Berlin today.",
    "Fully utilize code to enhance your business.",
    "What I wish everyone knew about Berlin.",
    "Five things to know about code.",
    "5 life-changing experiences in Berlin you should have before you die.",
    "10 facts you never knew about Berlin.",
    "The history of Berlin.",
    "7 top risks of Berlin.",
    "10 little tricks to achieve the best results in code.",
    "The millionaire guide on code to help you get rich.",
    "15 advices that you must listen before studying code.",
    "10 disadvantages of code and how you can workaround it.",
    "15 useful tips from experts in code.",
    "The 5 steps needed for putting code into action.",
    "What I wish everyone knew about code.",
    "This year will be the year of code.",
    "7 benefits of Berlin that may change your perspective.",
    "Code is not rocket science! Learn it now!",
    "Ten things nobody told you about code.",
]

const categories = ["code", "development", "travel", "food", "react", "berlin"]

let fakeTopics = []

for (let i = 0; i < titles.length; i++) {
    const category = getRandom(categories)
    fakeTopics.push({
        title: titles[i],
        createdBy: posts[i].poster.$oid,
        posts: [posts[i]._id.$oid],
        dateCreated: posts[i].dateCreated,
        timeCreated: posts[i].timeCreated,
        category: category,
        likes: getRandomNumber(50, 500),
        likesBy: [],
        search: [titles[i], category],
    })
}

Topic.insertMany(fakeTopics)
    .then(topics => {
        console.log(`You pushed ${topics.length} topics to the db`)
        mongoose.connection.close()
    })
    .catch(err => console.log(err))

console.log(titles.length)
