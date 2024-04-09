import mongoose, { mongo } from "mongoose";

const cartSchema = mongoose.Schema({
  cartItems: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  customerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
