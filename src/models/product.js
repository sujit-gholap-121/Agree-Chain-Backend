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
    stocks_Available: {
      type: Number,
      default: 0,
    },
    category:{
      type:String,
      required:true
    }
    ,
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    owner: {
      type:mongoose.Schema.Types.ObjectId,
      ref: "Bussiness"
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productScheme);
export default Product;
