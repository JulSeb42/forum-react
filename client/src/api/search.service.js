// Imports
import http from "./http-common"

const getQuery = query => http.get(`/search/search/${query}`)

const searchService = {
    getQuery,
}

export default searchService
