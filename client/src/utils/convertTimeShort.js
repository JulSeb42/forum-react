const convertTimeShort = time => {
    const splitted = time.split(":")
    let hour = splitted[0]
    let minutes = splitted[1]

    if (hour < 10) {
        hour = `0${hour}`
    }

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    // return `${hour}:${minutes}`
    return `${splitted[0]}:${splitted[1]}`
}

export default convertTimeShort
