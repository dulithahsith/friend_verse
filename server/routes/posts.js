import express from "express";
import multer from "multer";

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
const upload = multer({ storage: multer.memoryStorage() });

router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", auth, upload.single("image"), createPost);
router.patch("/:id/like/", auth, likePost);
router.post("/:id/comment/", auth, commentPost);
router.patch("/:id/", auth, upload.single("image"), updatePost);
router.delete("/:id/", auth, deletePost);

export default router;
