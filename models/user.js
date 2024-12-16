import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },

    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    isBlocked:{
        type:Boolean,
        default:false
    },

    type:{
        type:String,
        default:"Customer"
    },

    profilePicture:{
        type:String,
        default:"https://www.freepik.com/free-vector/blue-circle-with-white-user_145857007.htm#fromView=keyword&page=1&position=6&uuid=bfcdf0dc-2409-4a0a-a605-0acccd68b4f5"
    }
})

const User = mongoose.model("users",userSchema);

export default User;