// Generate random avatar
const randomAvatar = gender => {
    const random = Math.floor(Math.random() * 114)
    const randomMf = Math.floor(Math.random() + 0.5)
    const mf = ["male", "female"]

    return `https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/${
        gender === "other" ? mf[randomMf] : gender
    }/${random}.png`
}

export default randomAvatar
