import mongoose from "mongoose";

const addressScheme=mongoose.Schema({
city:{
    type:String,
    required:true
},
pincode:{
    type:Number,
    required:true
},
state:{
    type:String,
    required:true
},country:{
    type:String,
    required:true
},

userId:{ 
    type:mongoose.Schema.type.ObjectId,
    ref:"User"
}
})

export default Address=mongoose.model("Address",addressScheme)