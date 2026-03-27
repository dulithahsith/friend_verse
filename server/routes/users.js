import express from "express";

import { signIn, signUp, refresh } from "../controllers/users.js";
const router = express.Router();

router.post("/signin", signIn);
router.post("/signup", signUp);
router.post("/refresh", refresh);

export default router;
