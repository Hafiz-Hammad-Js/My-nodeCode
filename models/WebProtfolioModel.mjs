import mongoose from "mongoose";



const {Schema} = mongoose

const WebProtfolioStructure = Schema({
    thumImg:{
        type:String,
        required:true
    },
    yourProjectName:{
        type:String,
        required:true
    },
    workedOn:{
        type:String,
        required:true
    },
    technologies:{
        type:Array,
    },
    link:{
        type:String,
        required:true
    }
})

const WebSchema =mongoose.model("WebProtfolioDataBase",WebProtfolioStructure);

export default WebSchema;