import express from "express"
import router from "./routes/authRoute.js";

const app = express();

app.use("/api/auth" , router)

const PORT = 4000 

app.listen(PORT , () => {
    console.log(`Server is running on PORT ${PORT}`)
})