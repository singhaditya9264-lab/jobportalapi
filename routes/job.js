
import express from "express"
import authentication from "../middlewares/auth.js"
import addJob from "../controllers/job/addjob.js"
import updateJob from "../controllers/job/updatejob.js"
import deleteJob from "../controllers/job/deletejob.js"
import getAllGlobalJobs from "../controllers/job/getallglobaljobs.js"
import getAllJobs from "../controllers/job/getalljobs.js"

const jobRouter = express.Router()

// add a job

jobRouter.post("/add",authentication,addJob)

// update a job

jobRouter.put("/update/:id",authentication,updateJob)

// delete a job

jobRouter.delete("/delete/:id",authentication,deleteJob)

// get all global jobs

jobRouter.get("/global/all",getAllGlobalJobs)

// get all jobs 

jobRouter.get("/get-all",authentication,getAllJobs)


export default jobRouter