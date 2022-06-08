// Imports
import http from "./http-common"

const signup = data => http.post("/auth/signup", data)

const login = data => http.post("/auth/login", data)

const loggedIn = data => http.get("/auth/loggedin", data)

const verify = data => http.put("/auth/verify", data)

const forgotPassword = data => http.post("/auth/forgot-password", data)

const resetPassword = data => http.put("/auth/reset-password", data)

const authService = {
    signup,
    login,
    loggedIn,
    verify,
    forgotPassword,
    resetPassword,
}

export default authService
