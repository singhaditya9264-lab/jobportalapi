import User from "../../models/user.js"

const getAllUsers = async (req,res) =>{
 
    try {

       const users = await User.find()

        res.status(200).json({
        message:"all users fetched successfully",
        success:true,
        users
       })
        
    } catch (error) {

         res.status(500).json({
        message:"failed to get all users",
        success:false,
        error:error.message
       })
    }


}

export default getAllUsers