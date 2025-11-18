import Job from "../../models/job.js"

const deleteJob = async(req ,res)=>{
 try {

        const { id } = req.params

        const { userId, role } = req.user

        if (role === "admin") {

            const deletedJob = await Job.findByIdAndDelete(id)

            if (!deletedJob) return res.status(500).json({
                message: "invalid job id",
                success: false

            })

            res.status(200).json({
                message: "job is deleted successfully",
                success: true,
                deletedJob
            })

        }

        else {

            const data = await Job.deleteOne({ userId, _id: id })

            if (data.deletedCount === 0) return res.status(500).json({
                message: "invalid job id",
                success: false

            })

            res.status(200).json({
                message: "job is deleted successfullyy",
                success: true
            })

        }

    } catch (error) {
        res.status(500).json({
            message: "failed to delete a job",
            success: false,
            error: error.message
        })
    }
}

export default deleteJob