import express from "express";

import {
  getPosts,
  getPostsBySearch,
  createPost,
  likePost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.post("/", auth, createPost);
router.patch("/:id/like/", auth, likePost);
router.patch("/:id/", auth, updatePost);
router.delete("/:id/", auth, deletePost);

export default router;
