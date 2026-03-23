import axios from "axios";
import Post from "../components/posts/post/post";

const API = axios.create({ baseURL: "http://localhost:5000" });
// const url = process.env.REACT_APP_API_URL || "http://localhost:5000/posts";

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
  }
  return req;
});

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const likePost = (id) => API.patch(`/posts/${id}/like`);
export const updatePost = (id, post) => API.patch(`/posts/${id}`, post);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (form) => API.post("/users/signin", form);
export const signUp = (form) => API.post("/users/signup", form);
