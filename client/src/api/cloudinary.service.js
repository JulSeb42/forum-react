// Imports
import http from "./http-common"

const errorHandler = err => {
    throw err
}

const uploadImage = file => {
    return http
        .post("/uploader/upload-picture", file)
        .then(res => res.data)
        .catch(errorHandler)
}

const cloudinaryService = {
    uploadImage,
}

export default cloudinaryService
