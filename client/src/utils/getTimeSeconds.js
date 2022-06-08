const getTimeSeconds = () => {
    const date = new Date()

    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`
}

export default getTimeSeconds
