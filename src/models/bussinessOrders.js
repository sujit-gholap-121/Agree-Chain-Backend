import mongoose from "mongoose";

const bussinessOrderScheme = mongoose.Schema({
  totalPrice: {
    type: Number,
    required: true,
  },
  orderItems: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  bussinessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bussiness",
    required:true
  },
  status:{
    type:String,
    enum:["Pending","Cancelled","Delivered"],
    default:"Pending"
  },
   
},{ timestamps:true});

const BussinessOrder = mongoose.model("BussinessOrder", bussinessOrderScheme);
export default BussinessOrder