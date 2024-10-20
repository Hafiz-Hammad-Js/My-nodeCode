import mongoose from "mongoose";



const {Schema} = mongoose

const ExprienceStructure = Schema({
    logoImg:{
        type:String,
        required:true
    },
    skillImg:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    skillName:{
        type:String,
        required:true
    },
    exprience:{
        type:String,
        required:true
    }
})

const exprienceSchema =mongoose.model("ExprienceDataBase",ExprienceStructure);

export default exprienceSchema;