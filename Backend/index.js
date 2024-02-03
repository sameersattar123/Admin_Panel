import express from "express"
import router from "./routes/authRoute.js";
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config()

const app = express();
app.use(express.json());

app.use("/api/auth" , router)

connectDB() 
.then(() => {
    app.listen(process.env.PORT || 4000 , () => {  
    console.log(`Server is running at port ${process.env.PORT}`)  
}) 
})   
.catch((error) => {   
    console.log("MONGO DB CONNECTION FAILED!!" , error) 
}) 