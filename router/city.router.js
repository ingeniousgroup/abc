import express from "express";
import {save,list, byStateId} from "../controller/city.controller.js";
const router = express.Router();
router.post("/save",save);
router.get("/list",list);
router.post("/byStateId",byStateId);
export default router;