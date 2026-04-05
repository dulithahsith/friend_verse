import { createSlice } from "@reduxjs/toolkit";

// Create a slice for posts
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    currentPage: 1,
    numberOfPages: 1,
  },
  reducers: {
    fetchAll: (state, action) => {
      state.posts = action.payload.data;
      state.currentPage = action.payload.currentPage;
      state.numberOfPages = action.payload.numberOfPages;
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
  fetchAll,
  create,
  likePost,
  updatePost,
  deletePost,
  fetchPostsBySearch,
} = postsSlice.actions;

// Export the reducer to be used in store configuration
export default postsSlice.reducer;
