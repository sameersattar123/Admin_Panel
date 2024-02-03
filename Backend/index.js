import express from "express"

const app = express();

app.get("/"  , (req,res) => {
    res.status(200).send("Hello World")
})

app.get("/register"  , (req,res) => {
    res.status(200).send("Register Yourself")
})

const PORT = 4000

app.listen(PORT , () => {
    console.log(`Server is running on PORT ${PORT}`)
})