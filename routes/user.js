import express from "express"
import userRegister from "../controllers/user/userRegister.js"
import userLogin from "../controllers/user/userLogin.js"
import authentication from "../middlewares/auth.js"
import userProfile from "../controllers/user/userProfile.js"

const userRouter = express.Router()

// register user..

userRouter.post("/register",userRegister)

// login user..

userRouter.post("/login",userLogin)

// show user profile..

userRouter.get("/profile",authentication,userProfile)

export default userRouter