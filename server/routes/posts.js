import express from "express";

import {
  getPosts,
  createPost,
  likePost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";
const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id/like/", likePost);
router.patch("/:id/", updatePost);
router.delete("/:id/", deletePost);

export default router;
