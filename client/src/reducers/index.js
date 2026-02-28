import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./posts"; // Import the posts reducer from the slice
import authReducer from "./auth"; // Import the posts reducer from the slice

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  posts: postsReducer, // Add other reducers here if needed
  auth: authReducer,
});

export default rootReducer;
