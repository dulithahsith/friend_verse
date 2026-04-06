import { createSlice } from "@reduxjs/toolkit";

// Create a slice for posts
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    post: null,
    isLoading: true,
    posts: [],
    currentPage: 1,
    numberOfPages: 1,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    endLoading: (state) => {
      state.isLoading = false;
    },
    fetchAll: (state, action) => {
      state.posts = action.payload.data;
      state.currentPage = action.payload.currentPage;
      state.numberOfPages = action.payload.numberOfPages;
    },
    fetchPost: (state, action) => {
      state.post = action.payload;
    },
    fetchPostsBySearch: (state, action) => {
      state.posts = action.payload.data;
      state.currentPage = action.payload.currentPage;
      state.numberOfPages = action.payload.numberOfPages;
    },
    create: (state, action) => {
      state.posts.push(action.payload);
    },
    likePost: (state, action) => {
      state.posts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post,
      );
    },
    commentPost: (state, action) => {
      state.posts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post,
      );
      if (state.post?._id === action.payload._id) {
        state.post = action.payload;
      }
    },
    updatePost: (state, action) => {
      state.posts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post,
      );
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    },
  },
});

// Export actions for use in components
export const {
  fetchPost,
  fetchAll,
  create,
  likePost,
  commentPost,
  updatePost,
  deletePost,
  fetchPostsBySearch,
  startLoading,
  endLoading,
} = postsSlice.actions;

// Export the reducer to be used in store configuration
export default postsSlice.reducer;
