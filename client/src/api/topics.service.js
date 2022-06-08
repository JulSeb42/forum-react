// Imports
import http from "./http-common"

const allTopics = () => http.get("/topics/all-topics")

const getTopic = id => http.get(`/topics/topic/${id}`)

const newTopic = data => http.post("/topics/new-topic", data)

const editTopic = (id, data) => http.put(`/topics/edit-topic/${id}`, data)

const likeTopic = (id, data) => http.put(`/topics/like/${id}`, data)

const dislikeTopic = (id, data) => http.put(`/topics/dislike/${id}`, data)

const deleteTopic = id => http.delete(`/topics/delete-topic/${id}`)

const topicsService = {
    allTopics,
    getTopic,
    newTopic,
    editTopic,
    likeTopic,
    dislikeTopic,
    deleteTopic,
}

export default topicsService
