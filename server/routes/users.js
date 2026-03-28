import express from "express";
import auth from "../middleware/auth.js";

import {
  signIn,
  signUp,
  refresh,
  googleSignIn,
  deleteUser,
} from "../controllers/users.js";
const router = express.Router();

router.post("/signin", signIn);
router.post("/googleSignIn", googleSignIn);
router.post("/signup", signUp);
router.post("/refresh", refresh);
router.delete("/:id", auth, deleteUser);

export default router;
