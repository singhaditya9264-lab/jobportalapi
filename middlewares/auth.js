
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import User from "../models/user.js"
dotenv.config({ path: '.env' })

const authentication =async (req,res,next)=>{

    try {
        const token = req.header("auth-token")

    if(!token) return res.status(500).json({
        message:"login first",
        success:false,
       })

  const decodedToken = jwt.verify(token,process.env.JWT_SECRET)

    const user = await User.findOne({_id:decodedToken.userId})
    

    if(!user) return res.status(500).json({
        message:"user does not exist",
        success:false,
       })
   
      req.user = decodedToken

    next()

    } catch (error) {
        
        res.status(400).json({
        message:"auth failed",
        success:false,
        error:error.message
       })
    }

}

export default authentication