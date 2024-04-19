import mongoose from "mongoose";
 import {Schema,ObjectId} from "mongoose"

const productScheme = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      default: 0,
    },
    category:{
      type:String,
      required:true
    }
    ,
    subCategory: {
      type:String,
      required:true
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    active:{
      type:Boolean
    },
    owner: [{
      type:mongoose.Schema.Types.ObjectId,
      ref: "user"
    }]
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productScheme);
export default Product;
