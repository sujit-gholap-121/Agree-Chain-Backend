import mongoose, { Schema, mongo } from "mongoose";

const addressScheme=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
city:{
    type:String,
    required:true
},
pincode:{
    type:Number,
    required:true
},
street:{
    type:String,
    required:true
},
state:{
    type:String,
    required:true
},country:{
    type:String,
    required:true
},
customerID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
}
})

const UserAddress=mongoose.model("UserAddress",addressScheme)
export default  UserAddress