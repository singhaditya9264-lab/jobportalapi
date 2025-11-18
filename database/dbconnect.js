import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config({ path:'.env' })

const dbConnection = async()=>{
    try {

        await mongoose.connect(process.env.DB_URL,{
            dbName:"Job_portal_app"
        })

        console.log("mongodb is successfully connected")
        
    } catch (error) {

        console.log("db connection failed")
        
    }
}

export default dbConnection