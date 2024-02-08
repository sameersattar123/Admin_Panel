import express from "express"
import {  loginController, registerController } from "../controllers/authController.js";
import validate from "../middlewares/validateMiddleware.js";
import { signupSchema,  loginSchema } from "../validations/authValidation.js";
 
const router = express.Router(); 
 
router.route("/register").post(validate(signupSchema) ,  registerController)
router.route("/login").post(validate(loginSchema) ,  loginController)

export default router 