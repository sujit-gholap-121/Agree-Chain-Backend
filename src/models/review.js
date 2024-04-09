import mongoose, { mongo } from "mongoose";

const reviewSchema=mongoose.Schema({
    review:{
        type:String
    },
    rating:Number,
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})

const Review=mongoose.model("Review",reviewSchema)
export default Review