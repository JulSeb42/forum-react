const getRandom = arr => {
    const randomNumber = Math.floor(Math.random() * arr.length)
    return arr[randomNumber]
}

export default getRandom
