
import Job from './../../models/job.js';
const getAllJobs = async(req ,res)=>{

    try {

        const {userId,role} = req.user

        if(req.query != {} && role==="admin"){

          const jobs =  await Job.find({userId:req.query.userId})

          
            res.status(200).json({
                message: "all jobs are fetched successfully",
                success: true,
                jobs
            })


        }

        else{

           const jobs = await Job.find({userId})
          
            res.status(200).json({
                message: "all jobs are fetched successfully",
                success: true,
                jobs
            })

        }
        
    } catch (error) {

        res.status(500).json({
            message: "failed to get all job",
            success: false,
            error: error.message
        })
        
    }

}

export default getAllJobs