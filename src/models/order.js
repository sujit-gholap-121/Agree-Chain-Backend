import mongoose from "mongoose";

const orderScheme = mongoose.Schema({
  totalPrice: {
    type: Number,
    required: true,
  },
  subOrders: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BussinessOrder",
        required: true,
      },

  ],
  customerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  status:{
    type:String,
    enum:["Pending","Cancelled","Delivered"],
    default:"Pending"
  },
  addressId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Address"
}
},{
    timestamps:true
});

const Order = mongoose.model("Order", orderScheme);
export default Order