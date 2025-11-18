import Job from "../../models/job.js"

const getAllGlobalJobs = async(req ,res)=>{

    try {

       const globalJobs = await Job.find()
      
        res.status(200).json({
                message: "global jobs are fetched successfully",
                success: true,
                globalJobs
            })

        
    } catch (error) {
          res.status(500).json({
            message: "failed to get all global jobs",
            success: false,
            error: error.message
        })
    }

}

export default getAllGlobalJobs