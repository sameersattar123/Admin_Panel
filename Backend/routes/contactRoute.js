import express from "express"
import contactController from "../controllers/contactController.js";

const router = express.Router();

router.route("/contact").post(contactController)

export default router