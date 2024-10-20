import mongoose from "mongoose";


const { Schema } = mongoose

const NavbarSchema = Schema({
    img: {
        type: String,
        required: true
    }

})

const NavbarModel =mongoose.model("NavbarDatabase",NavbarSchema)
export default NavbarModel;