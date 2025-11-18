import User from "../../models/user.js"
import argon2 from 'argon2';
import dotenv from 'dotenv'
import jwt from "jsonwebtoken"

dotenv.config({ path: '.env' })

const userLogin = async(req , res)=>{

try {

    const {email,password} = req.body

    const user = await User.findOne({email})

    if(!user) return res.json({
        statua:500,
        message:"user does not exist",
        success:false,
       })
  
   const isValidPass = await argon2.verify(user.password,password)

   if(!isValidPass) return res.status(500).json({
        message:"invalid password",
        success:false,
       })

       const token = jwt.sign({userId:user._id,role:user.role},process.env.JWT_SECRET,{
        expiresIn:"1d"
       })



    res.status(200).json({
        message:"login successfully",
        success:true,
        token
       })
    
} catch (error) {
    res.status(500).json({
        message:"failed to login",
        success:false,
        error:error.message
       })
}

}

export default userLogin