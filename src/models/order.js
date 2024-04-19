import mongoose from "mongoose";

const orderScheme = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  soldBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  boughtBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
},{
    timestamps:true
});

const Order = mongoose.model("Order", orderScheme);
export default Order