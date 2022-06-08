// Imports
import http from "./http-common"

const allUsers = () => http.get("/users/all-users")

const getUser = id => http.get(`/users/user/${id}`)

const getUsername = username => http.get(`/users/username/${username}`)

const editAccount = (id, data) => http.put(`/users/edit-account/${id}`, data)

const setAdmin = (id, data) => http.put(`/users/set-admin/${id}`, data)

const editPassword = (id, data) => http.put(`/users/edit-password/${id}`, data)

const deleteAccount = id => http.delete(`/users/delete-account/${id}`)

const deleteUser = email => http.delete(`/users/delete-user/${email}`)

const newNotification = data => http.post("/users/new-notification", data)

const readNotifications = id => http.put(`/users/read-notification/${id}`)

const usersService = {
    allUsers,
    getUser,
    getUsername,
    editAccount,
    setAdmin,
    editPassword,
    deleteAccount,
    deleteUser,
    newNotification,
    readNotifications,
}

export default usersService
