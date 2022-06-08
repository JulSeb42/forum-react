// Packages
require("dotenv/config")
const mongoose = require("mongoose")
const { getRandom, getRandomDate, getRandomTime } = require("js-utils-julseb")

// Models
const Topic = require("../../models/Topic.model")

mongoose.connect(process.env.MONGODB_URI)

const topic0 = "629d1eb8fcbe2d41de8ea283"
Topic.findByIdAndUpdate(
    topic0,
    { $push: { search: "Carme1978" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic1 = "629d1eb8fcbe2d41de8ea284"
Topic.findByIdAndUpdate(
    topic1,
    { $push: { search: "Amettelly" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic2 = "629d1eb8fcbe2d41de8ea285"
Topic.findByIdAndUpdate(
    topic2,
    { $push: { search: "Dormoris" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic3 = "629d1eb8fcbe2d41de8ea286"
Topic.findByIdAndUpdate(topic3, { $push: { search: "Feated" } }, { new: true })
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic4 = "629d1eb8fcbe2d41de8ea287"
Topic.findByIdAndUpdate(topic4, { $push: { search: "Sublien" } }, { new: true })
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic5 = "629d1eb8fcbe2d41de8ea288"
Topic.findByIdAndUpdate(
    topic5,
    { $push: { search: "Dormoris" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic6 = "629d1eb8fcbe2d41de8ea289"
Topic.findByIdAndUpdate(topic6, { $push: { search: "Menced" } }, { new: true })
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic7 = "629d1eb8fcbe2d41de8ea28a"
Topic.findByIdAndUpdate(
    topic7,
    { $push: { search: "Andister" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic8 = "629d1eb8fcbe2d41de8ea28b"
Topic.findByIdAndUpdate(
    topic8,
    { $push: { search: "Thark1939" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic9 = "629d1eb8fcbe2d41de8ea28c"
Topic.findByIdAndUpdate(
    topic9,
    { $push: { search: "Yousping" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic10 = "629d1eb8fcbe2d41de8ea28d"
Topic.findByIdAndUpdate(
    topic10,
    { $push: { search: "Fection" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic11 = "629d1eb8fcbe2d41de8ea28e"
Topic.findByIdAndUpdate(
    topic11,
    { $push: { search: "Carme1978" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic12 = "629d1eb8fcbe2d41de8ea28f"
Topic.findByIdAndUpdate(
    topic12,
    { $push: { search: "Andister" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic13 = "629d1eb8fcbe2d41de8ea290"
Topic.findByIdAndUpdate(
    topic13,
    { $push: { search: "Roorithe" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic14 = "629d1eb8fcbe2d41de8ea291"
Topic.findByIdAndUpdate(
    topic14,
    { $push: { search: "Roorithe" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic15 = "629d1eb8fcbe2d41de8ea292"
Topic.findByIdAndUpdate(
    topic15,
    { $push: { search: "Symeave" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic16 = "629d1eb8fcbe2d41de8ea293"
Topic.findByIdAndUpdate(topic16, { $push: { search: "admin" } }, { new: true })
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic17 = "629d1eb8fcbe2d41de8ea294"
Topic.findByIdAndUpdate(
    topic17,
    { $push: { search: "Lonswellot" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic18 = "629d1eb8fcbe2d41de8ea295"
Topic.findByIdAndUpdate(
    topic18,
    { $push: { search: "Symeave" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic19 = "629d1eb8fcbe2d41de8ea296"
Topic.findByIdAndUpdate(
    topic19,
    { $push: { search: "Donsher59" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic20 = "629d1eb8fcbe2d41de8ea297"
Topic.findByIdAndUpdate(
    topic20,
    { $push: { search: "Donsher59" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic21 = "629d1eb8fcbe2d41de8ea298"
Topic.findByIdAndUpdate(
    topic21,
    { $push: { search: "Butbrat" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic22 = "629d1eb8fcbe2d41de8ea299"
Topic.findByIdAndUpdate(
    topic22,
    { $push: { search: "Yousping" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic23 = "629d1eb8fcbe2d41de8ea29a"
Topic.findByIdAndUpdate(
    topic23,
    { $push: { search: "Deens1947" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic24 = "629d1eb8fcbe2d41de8ea29b"
Topic.findByIdAndUpdate(topic24, { $push: { search: "admin" } }, { new: true })
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic25 = "629d1eb8fcbe2d41de8ea29c"
Topic.findByIdAndUpdate(
    topic25,
    { $push: { search: "Symeave" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic26 = "629d1eb8fcbe2d41de8ea29d"
Topic.findByIdAndUpdate(topic26, { $push: { search: "Menced" } }, { new: true })
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic27 = "629d1eb8fcbe2d41de8ea29e"
Topic.findByIdAndUpdate(
    topic27,
    { $push: { search: "Dormoris" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic28 = "629d1eb8fcbe2d41de8ea29f"
Topic.findByIdAndUpdate(
    topic28,
    { $push: { search: "Lonswellot" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic29 = "629d1eb8fcbe2d41de8ea2a0"
Topic.findByIdAndUpdate(
    topic29,
    { $push: { search: "Amettelly" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic30 = "629d1eb8fcbe2d41de8ea2a1"
Topic.findByIdAndUpdate(
    topic30,
    { $push: { search: "Dormoris" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic31 = "629d1eb8fcbe2d41de8ea2a2"
Topic.findByIdAndUpdate(topic31, { $push: { search: "Feated" } }, { new: true })
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic32 = "629d1eb8fcbe2d41de8ea2a3"
Topic.findByIdAndUpdate(topic32, { $push: { search: "Feated" } }, { new: true })
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic33 = "629d1eb8fcbe2d41de8ea2a4"
Topic.findByIdAndUpdate(
    topic33,
    { $push: { search: "Donsher59" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic34 = "629d1eb8fcbe2d41de8ea2a5"
Topic.findByIdAndUpdate(topic34, { $push: { search: "Feated" } }, { new: true })
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic35 = "629d1eb8fcbe2d41de8ea2a6"
Topic.findByIdAndUpdate(
    topic35,
    { $push: { search: "Roorithe" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic36 = "629d1eb8fcbe2d41de8ea2a7"
Topic.findByIdAndUpdate(
    topic36,
    { $push: { search: "Yousping" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic37 = "629d1eb8fcbe2d41de8ea2a8"
Topic.findByIdAndUpdate(
    topic37,
    { $push: { search: "Dormoris" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic38 = "629d1eb8fcbe2d41de8ea2a9"
Topic.findByIdAndUpdate(
    topic38,
    { $push: { search: "Yousping" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic39 = "629d1eb8fcbe2d41de8ea2aa"
Topic.findByIdAndUpdate(
    topic39,
    { $push: { search: "Amettelly" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic40 = "629d1eb8fcbe2d41de8ea2ab"
Topic.findByIdAndUpdate(
    topic40,
    { $push: { search: "Carme1978" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic41 = "629d1eb8fcbe2d41de8ea2ac"
Topic.findByIdAndUpdate(
    topic41,
    { $push: { search: "Carme1978" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic42 = "629d1eb8fcbe2d41de8ea2ad"
Topic.findByIdAndUpdate(
    topic42,
    { $push: { search: "Sublien" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic43 = "629d1eb8fcbe2d41de8ea2ae"
Topic.findByIdAndUpdate(
    topic43,
    { $push: { search: "Thark1939" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic44 = "629d1eb8fcbe2d41de8ea2af"
Topic.findByIdAndUpdate(
    topic44,
    { $push: { search: "Thark1939" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic45 = "629d1eb8fcbe2d41de8ea2b0"
Topic.findByIdAndUpdate(
    topic45,
    { $push: { search: "Roorithe" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic46 = "629d1eb8fcbe2d41de8ea2b1"
Topic.findByIdAndUpdate(
    topic46,
    { $push: { search: "Symeave" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic47 = "629d1eb8fcbe2d41de8ea2b2"
Topic.findByIdAndUpdate(
    topic47,
    { $push: { search: "Arither" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic48 = "629d1eb8fcbe2d41de8ea2b3"
Topic.findByIdAndUpdate(topic48, { $push: { search: "Menced" } }, { new: true })
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic49 = "629d1eb8fcbe2d41de8ea2b4"
Topic.findByIdAndUpdate(
    topic49,
    { $push: { search: "Bromens" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic50 = "629d1eb8fcbe2d41de8ea2b5"
Topic.findByIdAndUpdate(
    topic50,
    { $push: { search: "Sublien" } },
    { new: true }
)
    .then(() => console.log("Success"))
    .catch(err => console.log(err))

const topic51 = "629d1eb8fcbe2d41de8ea2b6"
Topic.findByIdAndUpdate(
    topic51,
    { $push: { search: "Pronful" } },
    { new: true }
)
    .then(() => {
        console.log("Success")
        mongoose.connection.close()
    })
    .catch(err => console.log(err))
