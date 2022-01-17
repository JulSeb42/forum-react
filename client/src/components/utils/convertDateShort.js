const convertDateShort = date => {
    if (date) {
        const newDate = date.split("-")
        const day = newDate[2]
        let month = newDate[1]
        const year = newDate[0]

        let convertedMonth =
            month === "01"
                ? "Jan"
                : month === "02"
                ? "Feb"
                : month === "03"
                ? "Mar"
                : month === "04"
                ? "Apr"
                : month === "05"
                ? "May"
                : month === "06"
                ? "Jun"
                : month === "07"
                ? "Jul"
                : month === "08"
                ? "Aug"
                : month === "09"
                ? "Sep"
                : month === "10"
                ? "Oct"
                : month === "11"
                ? "Nov"
                : month === "12"
                ? "Dec"
                : "Error in date"

        return `${day} ${convertedMonth} ${year}`
    } else {
        return "12 December 2021"
    }
}

export default convertDateShort
