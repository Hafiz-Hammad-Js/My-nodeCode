import mongoose from "mongoose";



const {Schema} = mongoose

const contactStructure = Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Mobile:{
        type:Number,
        required:true
    },
    Subject:{
        type:String,
        required: true
    },
    Message:{
        type:String,
        required: true
    },
})

const conatactSchema =mongoose.model("ContactUsDataBase",contactStructure);

export default conatactSchema;