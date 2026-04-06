import axios from "axios";
import Post from "../components/posts/post/post";

const API = axios.create({ baseURL: "http://localhost:5000" });
// const url = process.env.REACT_APP_API_URL || "http://localhost:5000/posts";

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).accessToken}`;
  }
  return req;
});

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const profile = JSON.parse(localStorage.getItem("profile"));
      const refreshToken = profile?.refreshToken;

      if (!refreshToken) {
        localStorage.clear();
        window.location.href = "/auth";
        return Promise.reject(error);
      }
      try {
        const { data } = await API.post("/users/refresh", { refreshToken });

        const updatedProfile = { ...profile, accessToken: data.accessToken };

        localStorage.setItem("profile", JSON.stringify(updatedProfile));
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return API(originalRequest);
      } catch (refreshError) {
        localStorage.clear();
        window.location.href = "/auth";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${searchQuery.tags || ""}&page=${searchQuery.page || 1}&limit=${searchQuery.limit || 2}`,
  );
export const createPost = (newPost) => API.post("/posts", newPost);
export const likePost = (id) => API.patch(`/posts/${id}/like`);
export const updatePost = (id, post) => API.patch(`/posts/${id}`, post);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const commentPost = (value, id) =>
  API.post(`/posts/${id}/comment`, { value });

export const signIn = (form) => API.post("/users/signin", form);
export const googleSignIn = (googleData) =>
  API.post("/users/googleSignIn", googleData);
export const signUp = (form) => API.post("/users/signup", form);
export const refreshToken = (refreshToken) =>
  API.post("/users/refresh", { refreshToken });
