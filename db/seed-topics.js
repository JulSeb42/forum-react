require("dotenv/config")
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI)

const Topics = require("../models/Topic.model")
const Post = require("../models/Post.model")
const User = require("../models/User.model")

const getRandom = require("../utils/getRandom")
const getRandomNumber = require("../utils/getRandomNumber")

const yousping = "61e48504e05dac3a07794f59"
const pronful = "61e48504e05dac3a07794f5a"
const feated = "61e48504e05dac3a07794f5b"
const donsher59 = "61e48504e05dac3a07794f5c"
const thark1939 = "61e48504e05dac3a07794f5d"
const butbrat = "61e48504e05dac3a07794f5e"
const roorithe = "61e48504e05dac3a07794f5f"
const carme1978 = "61e48504e05dac3a07794f60"
const menced = "61e48504e05dac3a07794f61"
const bromens = "61e48504e05dac3a07794f62"
const fection = "61e48504e05dac3a07794f63"
const symeave = "61e48504e05dac3a07794f64"
const deens1947 = "61e48504e05dac3a07794f65"
const amettelly = "61e48504e05dac3a07794f66"
const lonswellot = "61e48504e05dac3a07794f67"
const dormoris = "61e48504e05dac3a07794f68"
const sublien = "61e48504e05dac3a07794f69"
const andister = "61e48504e05dac3a07794f6a"
const arither = "61e48504e05dac3a07794f6b"
const werve1991 = "61e48504e05dac3a07794f6c"
const julseb = "61e48504e05dac3a07794f58"

const postsYousping = [
    "The truth about Berlin is about to be revealed.",
    "7 ways Berlin can improve your business.",
    "5 reasons why people love Berlin.",
]
const postsPronful = [
    "Seven things you should do in Berlin.",
    "Seven ways code can improve your business.",
    "15 disadvantages of code and how you can workaround it.",
]
const postsFeated = ["Things that make you love and hate Berlin."]
const postsDonsher59 = [
    "5 beautiful reasons we can't help but fall in love with Berlin.",
    "Eliminate your fears and doubts about code.",
]
const postsThark1939 = [
    "Five ways to introduce Berlin.",
    "Code will make you tons of cash. here's how!",
    "Top seven trends in code to watch.",
    "Seven code tips you need to learn now.",
]
const postsButbrat = [
    "Ten ugly truth about Berlin.",
    "Five reasons why you should go Berlin for your next vacation.",
    "Dining in Berlin: here's what you need to know about the food.",
    "Seven solid evidences why code is bad for your career development.",
]
const postsRoorithe = [
    "15 secrets about Berlin that nobody will tell you.",
    "Seven tricks you should know when travelling to Berlin.",
    "5 things you probably didn't know about Berlin.",
    "Ten benefits of code that may change your perspective.",
]
const postsCarme1978 = [
    "Five reliable sources to learn about Berlin.",
    "Here's what no one tells you about code.",
    "The 15 reasons tourists love code.",
]
const postsMenced = [
    "The 10 secrets that you shouldn't know about Berlin.",
    "15 important facts that you should know about code.",
]
const postsBromens = [
    "Prevent culture shock! 15 things you should know about Berlin and their people!",
]
const postsFection = ["Eliminate your fears and doubts about Berlin."]
const postsSymeave = [
    "Ten Berlin that will actually make your life better.",
    "Introducing a revolutionary method to master code.",
]
const postsDeens1947 = [
    "Seven things you most likely didn't know about Berlin.",
    "7 basic tools you will need to learn code.",
    "10 unconventional knowledge about code that you can't learn from books.",
]
const postsAmettelly = [
    "Ten things you need to know about Berlin today.",
    "Fully utilize code to enhance your business.",
]
const postsLonswellot = [
    "What I wish everyone knew about Berlin.",
    "Five things to know about code.",
]
const postsDormoris = [
    "5 life-changing experiences in Berlin you should have before you die.",
    "10 facts you never knew about Berlin.",
]
const postsSublien = ["The history of Berlin."]
const postsAndister = [
    "7 top risks of Berlin.",
    "10 little tricks to achieve the best results in code.",
    "The millionaire guide on code to help you get rich.",
    "15 advices that you must listen before studying code.",
]
const postsArither = [
    "10 disadvantages of code and how you can workaround it.",
    "15 useful tips from experts in code.",
]
const postsWerve1991 = [
    "The 5 steps needed for putting code into action.",
    "What I wish everyone knew about code.",
    "This year will be the year of code.",
]
const postsJulseb = [
    "7 benefits of Berlin that may change your perspective.",
    "Code is not rocket science! Learn it now!",
    "Ten things nobody told you about code.",
]

const body =
    "Proin euismod dui justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. A porta urna placerat id. Pellentesque pharetra egestas dui a consequat. Nulla lacinia rhoncus sapien ornare porttitor. Fusce interdum pretium neque at pharetra. Etiam eleifend scelerisque nulla sit amet tempus. Vestibulum tortor orci, malesuada et dolor eu, volutpat sollicitudin nunc. Ut magna lacus, sagittis ut diam eget, accumsan viverra velit. Donec efficitur mauris neque, a fringilla odio imperdiet vitae. Proin elementum diam quis nulla fringilla porttitor. Integer quam nisi, mattis at nunc a, ultricies sodales libero. Nulla laoreet sem id diam rutrum ultricies. Nulla elementum augue urna, id posuere risus volutpat ut. Phasellus blandit pharetra ex vitae efficitur. Phasellus molestie lacus quam, quis interdum est consequat non. Nulla in dictum purus. In id sodales elit, ac efficitur libero. Pellentesque ultricies lorem vitae maximus fermentum. Quisque id consectetur sem A pellentesque massa. Aliquam ut tristique enim. Sed vel convallis libero, a lacinia velit. Fusce ornare posuere tortor, sed tristique libero egestas in. Vestibulum mattis bibendum urna, eget ultrices neque pellentesque in. Suspendisse ut nulla nec lacus viverra tempus vel sit amet nibh. Nunc dictum purus a lectus pretium, ac feugiat leo finibus. Etiam rhoncus vel libero eu commodo. Quisque sodales fringilla turpis, at cursus velit hendrerit vel."
