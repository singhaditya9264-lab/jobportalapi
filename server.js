
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import dbConnection from "./database/dbconnect.js"
import userRouter from "./routes/user.js"
import adminRouter from "./routes/admin.js"
import jobRouter from "./routes/job.js"
dotenv.config({ path: '.env' })

const app = express()

// db connect

dbConnection()

//middleware

app.use(cors());
app.use(express.json());

//routes

// user api route

app.use("/api/user",userRouter)

// admin routes

app.use("/api/admin",adminRouter)

// job api routes

app.use("/api/job",jobRouter)



const port = process.env.PORT

app.listen(port,()=>console.log("server is running on 2929 port"))