import mongoose from "mongoose";



const {Schema} = mongoose

const certificateStructure = Schema({
    coachingName:{
        type:String,
        required:true
    },
    coachingLogo:{
        type:String,
        required:true
    },
    courseName:{
        type:String,
        required:true
    },
    pdfFile:{
        type:String,
    },
})

const certificateSchema =mongoose.model("certificateDataBase",certificateStructure);

export default certificateSchema;