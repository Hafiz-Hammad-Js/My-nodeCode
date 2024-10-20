import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config({ path: './Secret/Secret.env'});

const jwtSecret = process.env.JWT_SECRET;
console.log("hhh",jwtSecret)

const { Schema } = mongoose

const authSchema = Schema({
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    firtName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    contry:{
        type:String,
        required: true
    },
    city:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required: true
    },
    mobileNumber:{
        type:Number,
        required: true,
    },
})

authSchema.pre('save', function (next) {
    const user = this

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(user.password, salt)

    user.password = hash

    next()
})

authSchema.methods.comparePassword = function (password) {
    const user = this

    return bcrypt.compareSync(password, user.password)
}

authSchema.methods.generateToken = function () {

    const user = this

    const token = jwt.sign({ _id: user._id }, jwtSecret)

    return token
}

const Auth = mongoose.model('authDatabase', authSchema)
export default Auth;