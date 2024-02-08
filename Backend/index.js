import express from "express"
import authRouter from "./routes/authRoute.js";
import contactRouter from "./routes/contactRoute.js";
import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import cors from "cors"

dotenv.config()

const app = express();

app.use(cors({
origin : "http://localhost:5174",
methods : "GET , POST , DELETE , PUT , PATCH , HEAD",
credentials : true
}))
app.use(express.json());

app.use("/api/auth" , authRouter)
app.use("/api/form" , contactRouter)

connectDB() 
.then(() => {
    app.listen(process.env.PORT || 4000 , () => {  
    console.log(`Server is running at port ${process.env.PORT}`)  
}) 
})   
.catch((error) => {   
    console.log("MONGO DB CONNECTION FAILED!!" , error) 
}) 