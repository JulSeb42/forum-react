// Imports
require("dotenv/config")
const mongoose = require("mongoose")

const User = require("../../models/User.model")

mongoose.connect(process.env.MONGODB_URI)

const adminId = "629bf7704dde1f9a74d730b4"
const postsadmin = ["629bf943d1fd8f9e0f6e4f47", "629bf943d1fd8f9e0f6e4f4f"]
const topicsadmin = ["629d1eb8fcbe2d41de8ea293", "629d1eb8fcbe2d41de8ea29b"]
User.findByIdAndUpdate(
    adminId,
    { $push: { posts: postsadmin, topics: topicsadmin } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const youspingId = "629bf7704dde1f9a74d730b5"
const postsyousping = [
    "629bf943d1fd8f9e0f6e4f40",
    "629bf943d1fd8f9e0f6e4f4d",
    "629bf943d1fd8f9e0f6e4f5b",
    "629bf943d1fd8f9e0f6e4f5d",
]
const topicsyousping = [
    "629d1eb8fcbe2d41de8ea28c",
    "629d1eb8fcbe2d41de8ea299",
    "629d1eb8fcbe2d41de8ea2a7",
    "629d1eb8fcbe2d41de8ea2a9",
]
User.findByIdAndUpdate(
    youspingId,
    { $push: { posts: postsyousping, topics: topicsyousping } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const pronfulId = "629bf7704dde1f9a74d730b6"
const postspronful = ["629bf943d1fd8f9e0f6e4f6a"]
const topicspronful = ["629d1eb8fcbe2d41de8ea2b6"]
User.findByIdAndUpdate(
    pronfulId,
    { $push: { posts: postspronful, topics: topicspronful } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const featedId = "629bf7704dde1f9a74d730b7"
const postsfeated = [
    "629bf943d1fd8f9e0f6e4f3a",
    "629bf943d1fd8f9e0f6e4f56",
    "629bf943d1fd8f9e0f6e4f57",
    "629bf943d1fd8f9e0f6e4f59",
]
const topicsfeated = [
    "629d1eb8fcbe2d41de8ea286",
    "629d1eb8fcbe2d41de8ea2a2",
    "629d1eb8fcbe2d41de8ea2a3",
    "629d1eb8fcbe2d41de8ea2a5",
]
User.findByIdAndUpdate(
    featedId,
    { $push: { posts: postsfeated, topics: topicsfeated } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const donsher59Id = "629bf7704dde1f9a74d730b8"
const postsdonsher59 = [
    "629bf943d1fd8f9e0f6e4f4a",
    "629bf943d1fd8f9e0f6e4f4b",
    "629bf943d1fd8f9e0f6e4f58",
]
const topicsdonsher59 = [
    "629d1eb8fcbe2d41de8ea296",
    "629d1eb8fcbe2d41de8ea297",
    "629d1eb8fcbe2d41de8ea2a4",
]
User.findByIdAndUpdate(
    donsher59Id,
    { $push: { posts: postsdonsher59, topics: topicsdonsher59 } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const thark1939Id = "629bf7704dde1f9a74d730b9"
const poststhark1939 = [
    "629bf943d1fd8f9e0f6e4f3f",
    "629bf943d1fd8f9e0f6e4f62",
    "629bf943d1fd8f9e0f6e4f63",
]
const topicsthark1939 = [
    "629d1eb8fcbe2d41de8ea28b",
    "629d1eb8fcbe2d41de8ea2ae",
    "629d1eb8fcbe2d41de8ea2af",
]
User.findByIdAndUpdate(
    thark1939Id,
    { $push: { posts: poststhark1939, topics: topicsthark1939 } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const butbratId = "629bf7704dde1f9a74d730ba"
const postsbutbrat = ["629bf943d1fd8f9e0f6e4f4c"]
const topicsbutbrat = ["629d1eb8fcbe2d41de8ea298"]
User.findByIdAndUpdate(
    butbratId,
    { $push: { posts: postsbutbrat, topics: topicsbutbrat } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const rooritheId = "629bf7704dde1f9a74d730bb"
const postsroorithe = [
    "629bf943d1fd8f9e0f6e4f44",
    "629bf943d1fd8f9e0f6e4f45",
    "629bf943d1fd8f9e0f6e4f5a",
    "629bf943d1fd8f9e0f6e4f64",
]
const topicsroorithe = [
    "629d1eb8fcbe2d41de8ea290",
    "629d1eb8fcbe2d41de8ea291",
    "629d1eb8fcbe2d41de8ea2a6",
    "629d1eb8fcbe2d41de8ea2b0",
]
User.findByIdAndUpdate(
    rooritheId,
    { $push: { posts: postsroorithe, topics: topicsroorithe } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const carme1978Id = "629bf7704dde1f9a74d730bc"
const postscarme1978 = [
    "629bf943d1fd8f9e0f6e4f37",
    "629bf943d1fd8f9e0f6e4f42",
    "629bf943d1fd8f9e0f6e4f5f",
    "629bf943d1fd8f9e0f6e4f60",
]
const topicscarme1978 = [
    "629d1eb8fcbe2d41de8ea283",
    "629d1eb8fcbe2d41de8ea28e",
    "629d1eb8fcbe2d41de8ea2ab",
    "629d1eb8fcbe2d41de8ea2ac",
]
User.findByIdAndUpdate(
    carme1978Id,
    { $push: { posts: postscarme1978, topics: topicscarme1978 } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const mencedId = "629bf7704dde1f9a74d730bd"
const postsmenced = [
    "629bf943d1fd8f9e0f6e4f3d",
    "629bf943d1fd8f9e0f6e4f51",
    "629bf943d1fd8f9e0f6e4f67",
]
const topicsmenced = [
    "629d1eb8fcbe2d41de8ea289",
    "629d1eb8fcbe2d41de8ea29d",
    "629d1eb8fcbe2d41de8ea2b3",
]
User.findByIdAndUpdate(
    mencedId,
    { $push: { posts: postsmenced, topics: topicsmenced } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const bromensId = "629bf7704dde1f9a74d730be"
const postsbromens = ["629bf943d1fd8f9e0f6e4f68"]
const topicsbromens = ["629d1eb8fcbe2d41de8ea2b4"]
User.findByIdAndUpdate(
    bromensId,
    { $push: { posts: postsbromens, topics: topicsbromens } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const fectionId = "629bf7704dde1f9a74d730bf"
const postsfection = ["629bf943d1fd8f9e0f6e4f41"]
const topicsfection = ["629d1eb8fcbe2d41de8ea28d"]
User.findByIdAndUpdate(
    fectionId,
    { $push: { posts: postsfection, topics: topicsfection } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const symeaveId = "629bf7704dde1f9a74d730c0"
const postssymeave = [
    "629bf943d1fd8f9e0f6e4f46",
    "629bf943d1fd8f9e0f6e4f49",
    "629bf943d1fd8f9e0f6e4f50",
    "629bf943d1fd8f9e0f6e4f65",
]
const topicssymeave = [
    "629d1eb8fcbe2d41de8ea292",
    "629d1eb8fcbe2d41de8ea295",
    "629d1eb8fcbe2d41de8ea29c",
    "629d1eb8fcbe2d41de8ea2b1",
]
User.findByIdAndUpdate(
    symeaveId,
    { $push: { posts: postssymeave, topics: topicssymeave } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const deens1947Id = "629bf7704dde1f9a74d730c1"
const postsdeens1947 = ["629bf943d1fd8f9e0f6e4f4e"]
const topicsdeens1947 = ["629d1eb8fcbe2d41de8ea29a"]
User.findByIdAndUpdate(
    deens1947Id,
    { $push: { posts: postsdeens1947, topics: topicsdeens1947 } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const amettellyId = "629bf7704dde1f9a74d730c2"
const postsamettelly = [
    "629bf943d1fd8f9e0f6e4f38",
    "629bf943d1fd8f9e0f6e4f54",
    "629bf943d1fd8f9e0f6e4f5e",
]
const topicsamettelly = [
    "629d1eb8fcbe2d41de8ea284",
    "629d1eb8fcbe2d41de8ea2a0",
    "629d1eb8fcbe2d41de8ea2aa",
]
User.findByIdAndUpdate(
    amettellyId,
    { $push: { posts: postsamettelly, topics: topicsamettelly } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const lonswellotId = "629bf7704dde1f9a74d730c3"
const postslonswellot = ["629bf943d1fd8f9e0f6e4f48", "629bf943d1fd8f9e0f6e4f53"]
const topicslonswellot = [
    "629d1eb8fcbe2d41de8ea294",
    "629d1eb8fcbe2d41de8ea29f",
]
User.findByIdAndUpdate(
    lonswellotId,
    { $push: { posts: postslonswellot, topics: topicslonswellot } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const dormorisId = "629bf7704dde1f9a74d730c4"
const postsdormoris = [
    "629bf943d1fd8f9e0f6e4f39",
    "629bf943d1fd8f9e0f6e4f3c",
    "629bf943d1fd8f9e0f6e4f52",
    "629bf943d1fd8f9e0f6e4f55",
    "629bf943d1fd8f9e0f6e4f5c",
]
const topicsdormoris = [
    "629d1eb8fcbe2d41de8ea285",
    "629d1eb8fcbe2d41de8ea288",
    "629d1eb8fcbe2d41de8ea29e",
    "629d1eb8fcbe2d41de8ea2a1",
    "629d1eb8fcbe2d41de8ea2a8",
]
User.findByIdAndUpdate(
    dormorisId,
    { $push: { posts: postsdormoris, topics: topicsdormoris } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const sublienId = "629bf7704dde1f9a74d730c5"
const postssublien = [
    "629bf943d1fd8f9e0f6e4f3b",
    "629bf943d1fd8f9e0f6e4f61",
    "629bf943d1fd8f9e0f6e4f69",
]
const topicssublien = [
    "629d1eb8fcbe2d41de8ea287",
    "629d1eb8fcbe2d41de8ea2ad",
    "629d1eb8fcbe2d41de8ea2b5",
]
User.findByIdAndUpdate(
    sublienId,
    { $push: { posts: postssublien, topics: topicssublien } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const andisterId = "629bf7704dde1f9a74d730c6"
const postsandister = ["629bf943d1fd8f9e0f6e4f3e", "629bf943d1fd8f9e0f6e4f43"]
const topicsandister = ["629d1eb8fcbe2d41de8ea28a", "629d1eb8fcbe2d41de8ea28f"]
User.findByIdAndUpdate(
    andisterId,
    { $push: { posts: postsandister, topics: topicsandister } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const aritherId = "629bf7704dde1f9a74d730c7"
const postsarither = ["629bf943d1fd8f9e0f6e4f66"]
const topicsarither = ["629d1eb8fcbe2d41de8ea2b2"]
User.findByIdAndUpdate(
    aritherId,
    { $push: { posts: postsarither, topics: topicsarither } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const werve1991Id = "629bf7704dde1f9a74d730c8"
const postswerve1991 = []
const topicswerve1991 = []
User.findByIdAndUpdate(
    werve1991Id,
    { $push: { posts: postswerve1991, topics: topicswerve1991 } },
    { new: true }
)
    .then(() => {
        console.log("Success")
        mongoose.connection.close()
    })
    .catch(err => console.log(err))
