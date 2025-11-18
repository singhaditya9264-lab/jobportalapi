import User from "../../models/user.js";


const userProfile = async (req, res) => {

    try {

    const  userId = req.user.userId;
     
     const user = await User.findById(userId)

    if(!user) return res.status(500).json({
        message:"user not found",
        success:false
         })

     res.status(200).json({

       message:"user profile fetched successfully",
       success:true,
       user
     })

    } catch (error) {
        res.status(500).json({
        message:"failed to fetch user profile",
        success:false,
        error:error.message
          })        
    }
}

export default userProfile