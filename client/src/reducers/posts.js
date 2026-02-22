import { createSlice } from "@reduxjs/toolkit";

// Create a slice for posts
const postsSlice = createSlice({
  name: "posts",
  initialState: [], // Initial state for posts
  reducers: {
    fetchAll: (state, action) => {
      // Handle FETCH_ALL action
      return action.payload; // Typically, you'd handle the state update here
    },
    create: (state, action) => {
      // Handle CREATE action
      return [...state, action.payload]; // Adds new post to the state
    },
    likePost: (state, action) => {
      // Handle LIKE action
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post,
      );
    },
    updatePost: (state, action) => {
      // Handle Update action
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post,
      );
    },
    deletePost: (state, action) => {
      // Handle LIKE action
      return state.filter((post) => post._id !== action.payload);
    },
  },
});

// Export actions for use in components
export const { fetchAll, create, likePost, updatePost, deletePost } =
  postsSlice.actions;

// Export the reducer to be used in store configuration
export default postsSlice.reducer;
