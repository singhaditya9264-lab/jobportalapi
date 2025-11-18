import Job from "../../models/job.js"

const addJob = async (req, res) => {

    try {

        const { title, description, company, location, jobType, experienceLevel, employmentType, skills, salary } = req.body

        const { userId, role } = req.user

        if (role === "admin") {

            const newJob = await Job.create({ userId, createdByRole: "admin", title, description, company, location, jobType, experienceLevel, employmentType, skills, salary })

            res.status(200).json({
                message: "job is added successfully",
                success: true,
                newJob
            })

        }

        else {

            const newJob = await Job.create({ userId, title, description, company, location, jobType, experienceLevel, employmentType, skills, salary })
            res.status(200).json({
                message: "job is added successfully",
                success: true,
                newJob
            })
        }

    } catch (error) {
        res.status(500).json({
            message: "failed to add a job",
            success: false,
            error: error.message
        })
    }

}

export default addJob