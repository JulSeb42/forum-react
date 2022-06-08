// Imports
import http from "./http-common"

const allPosts = () => http.get("/posts/all-posts")

const getPost = id => http.get(`/posts/post/${id}`)

const newPost = data => http.post("/posts/new-post", data)

const editPost = (id, data) => http.put(`/posts/edit-post/${id}`, data)

const deletePost = id => http.delete(`/posts/delete-post/${id}`)

const postsService = {
    allPosts,
    getPost,
    newPost,
    editPost,
    deletePost,
}

export default postsService
