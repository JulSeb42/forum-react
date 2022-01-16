const convertToEmail = (firstName, surname) => {
    // return `${str.toString().toLowerCase().replace(" ", "-")}@email.com`
    return `${firstName.toLowerCase()}.${surname.toLowerCase()}@email.com`
}

module.exports = convertToEmail
