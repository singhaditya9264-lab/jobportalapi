import User from "../../models/user.js"


const adminProfile = async(req ,res)=>{

    try {

        const {userId} = req.user

       const admin = await User.findOne({_id:userId})

       if(!admin) return    res.status(500).json({
        message:"admin does not exist",
        success:false
       })
        
         res.status(200).json({
        message:"admin profile fetched successfully",
        success:true,
        admin
       })

        
    } catch (error) {

          res.status(500).json({
        message:"failed to get admin profile",
        success:false,
        error:error.message
       })
    }
 

}

export default adminProfile