// Get time
const getTimeNow = () => {
    const today = new Date()
    let hours = today.getHours()
    let minutes = today.getMinutes()

    if (hours < 10) {
        hours = `0${hours}`
    }

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    return `${hours}:${minutes}`
}

export default getTimeNow
