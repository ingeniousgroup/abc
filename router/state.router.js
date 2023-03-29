import express from "express";
import {save,list} from "../controller/state.controller.js";
const router = express.Router();
router.post("/save",save);
router.get("/list",list);
export default router;