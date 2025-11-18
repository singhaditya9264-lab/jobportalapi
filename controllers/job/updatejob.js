import Job from "../../models/job.js"

const updateJob = async (req, res) => {

    try {

        const { id } = req.params

        const { userId, role } = req.user

        if (role === "admin") {

            const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true })

            if (!updatedJob) return res.status(500).json({
                message: "invalid job id",
                success: false

            })

            res.status(200).json({
                message: "job is updated successfully",
                success: true,
                updatedJob
            })

        }

        else {

            const data = await Job.updateOne({ userId, _id: id }, { $set: req.body })

            if (data.modifiedCount === 0) return res.status(500).json({
                message: "invalid job id",
                success: false

            })

            const updatedJob = await Job.findById(id)

            res.status(200).json({
                message: "job is updated successfullyy",
                success: true,
                updatedJob
            })

        }

    } catch (error) {
        res.status(500).json({
            message: "failed to update a job",
            success: false,
            error: error.message
        })
    }

}

export default updateJob