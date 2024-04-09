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

bussinessID:{ 
    type:mongoose.Schema.type.ObjectId,
    ref:"User"
}
})

// export default BussinessAddress=mongoose.model("BussinessAddress",addressScheme)