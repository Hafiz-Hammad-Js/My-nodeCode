import mongoose from "mongoose";


const { Schema } = mongoose

const HeaderSchema = Schema({
    img: {
        type: String,
        required: true
    }

})

const headerModel =mongoose.model("headerDatabase",HeaderSchema)
export default headerModel;