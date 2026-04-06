import express from "express";

import {
  getPost,
  getPosts,
  getPostsBySearch,
  createPost,
  likePost,
  commentPost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", auth, createPost);
router.patch("/:id/like/", auth, likePost);
router.post("/:id/comment/", auth, commentPost);
router.patch("/:id/", auth, updatePost);
router.delete("/:id/", auth, deletePost);

export default router;
