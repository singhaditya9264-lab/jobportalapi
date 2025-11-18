
import express from 'express'
import authentication from '../middlewares/auth.js'
import adminAuth from '../middlewares/admin.js'
import getAllUsers from '../controllers/admin/getallusers.js'
import deleteUser from '../controllers/admin/deleteuser.js'

const adminRouter = express.Router()

// get all users

adminRouter.get("/users",authentication,adminAuth,getAllUsers)

//delete a user

adminRouter.delete("/delete/user/:id",authentication,adminAuth,deleteUser)


export default adminRouter