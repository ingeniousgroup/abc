import express from "express";
import { signUp,signIn, viewBalance } from "../controller/admin.controller.js";
const router =express();
router.post("/signup",signUp);
router.get("/signin",signIn);
router.get("/view_balance",viewBalance);

export default router;