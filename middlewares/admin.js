
const adminAuth = (req,res,next)=>{

    const role = req.user.role

   if(role === "admin") return next()

     res.status(500).json({
        message:"admin only",
        success:false,
       })

}

export default adminAuth