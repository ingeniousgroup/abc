import express from "express";
import { body } from "express-validator"
import { signIn, signUp } from "../controller/user.controller.js";
import { addProperty } from "../controller/property.controller.js";
const router = express.Router();
router.post("/signup",
body("name").notEmpty(),
body("email","Not valid email id").isEmail(),
body("contact","Only digit is allowed").isNumeric(),
body("password","please enter password").notEmpty(),
body("password","password must have 5 letter at least").isLength({min: 5})
,signUp);

router.post("/signin", signIn);
router.post("/add_property",addProperty);
export default router;