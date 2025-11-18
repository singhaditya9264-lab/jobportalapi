
import mongoose from "mongoose"

const jobSchema = new mongoose.Schema({
  
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    salary:{
       min:{type:Number,required:true},
       max:{type:Number,required:true}
       
    },
    jobType:{
        type:String,
        enum:["Full-Time","Part-Time","Intership"],
        required:true
    },
    skills:{
        type:[String],
        required:true
    },
    experienceLevel:{
        type:String,
        enum:["Fresher","1-3 years","3-5 years","Senior"],
        required:true
    },
    employmentType:{
        type:String,
        enum:["Remote","Onsite","Hybrid"],
        required:true
    },
    createdByRole:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }


},{timestamps:true})

const Job = mongoose.model("Job",jobSchema)

export default Job