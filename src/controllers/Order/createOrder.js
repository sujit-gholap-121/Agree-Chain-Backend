// import { Promise } from "mongoose";
import DB from "../../DB/MongoConnection.js";
// import BussinessOrder from "../../models/bussinessOrders.js";
// import Product from "../../models/product.js"
import Cart from "../../models/cart.js";
import Order from "../../models/order.js";
import Product from "../../models/product.js";
// import UserAddress from "../../models/userAddress.js";

function getProduct(item) {
  return Product.findOne({ _id: item.productId });
}

export default async function handleCreateOrder(req, res) {
  const session = await DB.startSession();
  session.startTransaction();
  try {
    const { userId } = req.body;
    // console.log(req.body)
    const { addressId, productDetails } = req.body;
    
    const groupBussiness = [];
    const allOrderBussinesses = productDetails.forEach((ele) => {
      if (!groupBussiness.includes(ele.owner)) {
        groupBussiness.push(ele.owner);
      }
    });
    console.log(groupBussiness);

    const bussinessOrderIds = [];
    let grandTotal = 0;

    
     await new Promise( (resolve, reject) => {
        const allBussiOrders=groupBussiness.map(async (item) => {
          let totalPrice = 0;
          
            const allReq=productDetails.map(async (ele) => {
              if (ele.owner === item) {
                totalPrice += ele.quantity * ele.price;
                grandTotal += ele.quantity * ele.price;
                const isQuantityUpdated = await Product.updateOne(
                  { _id: ele._id },
                  { $inc: { stocks_Available: -ele.quantity } }
                );
                console.log("updating", isQuantityUpdated);
              }
            });
            const resultReq=await Promise.all(allReq)

          const currentOrders = productDetails
            .filter((ele) => ele.owner === item)
            .map((ele) => ({ productId: ele._id, quantity: ele.quantity }));
          // console.log(item,totalPrice,currentOrders)
          const result = await BussinessOrder.create({
            totalPrice,
            bussinessId: item,
            orderItems: currentOrders,
            status: "Pending",
          });
          console.log("creating");
          if (!result) {
            throw new Error("Error Placing a bussiness order");
          }
          bussinessOrderIds.push(result._id);
          resolve(true);
          // console.log("mini",bussinessOrderIds)
        });
        resolve(Promise.all(allBussiOrders))
      })

      new Promise(async (resolve, rj) => {
        console.log("start");
        console.log("mini", bussinessOrderIds);
        const createMajorOrder = await Order.create({
          totalPrice: grandTotal,
          subOrders: [...bussinessOrderIds],
          customerID: userId,
          status: "Pending",
          // addressId:"000"
        });
        if (!createMajorOrder) {
          throw new Error("Error Placing a bussiness order");
        }
        console.log(createMajorOrder);
        resolve(true);
        res.status(200).json({
          ms: "success",
          createMajorOrder,
        });
      })
    session.commitTransaction();
  } catch (error) {
    session.abortTransaction();
    res.status(403).json({
      msg: error.message,
    });
  }
}
