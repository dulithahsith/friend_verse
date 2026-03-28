import express from "express";

import { signIn, signUp, refresh, googleSignIn } from "../controllers/users.js";
const router = express.Router();

router.post("/signin", signIn);
router.post("/googleSignIn", googleSignIn);
router.post("/signup", signUp);
router.post("/refresh", refresh);

export default router;
