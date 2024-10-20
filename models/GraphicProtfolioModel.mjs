import mongoose from "mongoose";



const {Schema} = mongoose

const GraphicProtStructure = Schema({
    img:{
        type:String,
        required:true
    },
    imgName:{
        type:String,
        required:true
    },
    imgAbout:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
})

const GraphicSchema =mongoose.model("GraphicProtfolioDataBase",GraphicProtStructure);

export default GraphicSchema;