import express from "express"

const router = express.Router();

router.route("/").get((req,res) => {
    res.status(200).send("Hello World")
})

router.get("/register"  , (req,res) => {
    res.status(200).send("Register Yourself")
})

export default router