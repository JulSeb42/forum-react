// Get random location
const cities = require("../client/src/components/data/cities.json")

const getRandomLocation = () => {
    const randomNumber = Math.floor(Math.random() * cities.length)
    return `${cities[randomNumber].name}, ${cities[randomNumber].country}`
}

module.exports = getRandomLocation
