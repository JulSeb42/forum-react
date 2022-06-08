// Imports
import http from "./http-common"

const allConversations = () => http.get("/conversations/all-conversations")

const getConversation = id => http.get(`/conversations/conversation/${id}`)

const newConversation = data => http.post("/conversations/new-conversation", data)

const newMessage = (id, data) => http.put(`/conversations/new-message/${id}`, data)

const readConversation = (id, data) => http.put(`/conversations/read-conversation/${id}`, data)

const conversationsService = {
    allConversations,
    getConversation,
    newConversation,
    newMessage,
    readConversation
}

export default conversationsService
