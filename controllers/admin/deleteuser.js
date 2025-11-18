import User from "../../models/user.js"
import Job from './../../models/job.js';

const deleteUser = async (req ,res)=>{

    try {

        const {id}= req.params

       const deletedUser = await User.findByIdAndDelete(id)

       await Job.deleteMany({userId:deleteUser._id})

       res.status(200).json({
        message:"user is deleted successfully",
        success:true,
        deletedUser
       })
       
        
    } catch (error) {
         res.status(500).json({
        message:"failed to delete user",
        success:false,
        error:error.message
       })
    }
}

export default deleteUser
