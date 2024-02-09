import express from "express"
import {  loginController, registerController, userController } from "../controllers/authController.js";
import validate from "../middlewares/validateMiddleware.js";
import { signupSchema,  loginSchema } from "../validations/authValidation.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
 
const router = express.Router(); 
 
router.route("/register").post(validate(signupSchema) ,  registerController)
router.route("/login").post(validate(loginSchema) ,  loginController)
router.route("/user").get(authMiddleware ,  userController)

export default router 