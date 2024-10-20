import mongoose, { Types } from "mongoose";



const { Schema } = mongoose


const AboutStructure = Schema({
    cvImg: {
        type: String,
        required: true
    },
    aboutImg: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    lastestKey: {
        type: String,
        required: true
    },
    LastestValue: {
        type: String,
        required: true
    }
})

const AboutSchema = mongoose.model("AboutDataBase", AboutStructure)

export default AboutSchema;