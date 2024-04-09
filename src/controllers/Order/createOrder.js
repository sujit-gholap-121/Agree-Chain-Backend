import DB from "../../DB/MongoConnection.js";
import Cart from "../../models/cart.js";
import Order from "../../models/order.js";
import Product from "../../models/product.js";
import UserAddress from "../../models/userAddress.js";

function getProduct(item) {
  return Product.findOne({ _id: item.productId });
}

// export default async function handleCreateOrder(req, res) {
//   const session = await DB.startSession();
//   session.startTransaction();
//   try {
//     const { userId } = req;
//     const { addressId } = req.body;

//     const userCart = await Cart.findOne({ customerID: userId });
//     if (!userCart) {
//       throw new Error("User cart not found");
//     }
//     console.log(userCart);
//     const total = await new Promise(async (resolve, reject) => {
//       let price = 0;
//       try {
//         for (let item of userCart.cartItems) {
//           const temp = await getProduct(item);
//           price += temp.price * item.quantity;
//         }
//         resolve(price);
//       } catch (e) {
//         reject(false);
//         // throw new Error(e.message)
//       }
//     });
//     // console.log(total)
//     // const addressDetails=await UserAddress.findOne({customerID:userId,_id:addressId}).select("-_id -customerID")


//     const newOrder = await Order.create({
//       totalPrice: total,
//       orderItems: userCart.cartItems,
//       customerID: userId,
//       status: "Pending",
//       addressId,
//     });

//     const deleteCart = await Cart.findOneAndDelete({ customerID: userId });
//     console.log(deleteCart);
//     session.commitTransaction();
//   } catch (error) {
//     session.abortTransaction();

//     res.status(403).json({
//       msg: error.message,
//     });
//   }
// }
export default async function handleCreateOrder(){
  
}