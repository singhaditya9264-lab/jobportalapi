import User from "../../models/user.js"
import argon2 from "argon2"

const userRegister = async (req,res)=>{

   try {

        const {name,email,password} = req.body

      const user =  await User.findOne({email})

      if(user) return res.status(500).json({
        message:"email already exists",
        success:false,
       })
     
       const hashPassword = await argon2.hash(password)
     
     const newUser = await User.create({name,email,password:hashPassword})

     res.status(200).json({
        message:"new user is created successfully",
        success:true,
        user:newUser
       })
        
    } catch (error) {

        res.status(500).json({
        message:"failed to create new user",
        success:false,
        error:error.message
        
       })
        
    }

}

export default userRegister