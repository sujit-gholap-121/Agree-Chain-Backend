import Cart from "../../models/cart.js";

export async function handleAddToCart(req, res) {
  const { userId } = req;
  const { productId } = req.params;
  const { quantity } = req.query;
  console.log(quantity, productId);
  try {
    const validCart = await Cart.findOne({ customerID: userId });
    if (!validCart) {
      await Cart.create({
        customerID: userId,
        cartItems: [
          {
            productId,
            quantity,
          },
        ],
      });
      const isCreated = await Cart.findOne({
        customerID: userId,
        "cartItems.$.productId": productId,
      });
      console.log("first product added", isCreated);
      if (isCreated)
        res.status(203).send({
          msg: "added to cart",
          product: {
            isCreated,
          },
        });
    } else {
      const isPresent = await Cart.findOne(
        {
          customerID: userId,
          "cartItems.productId":productId
        },
      );
      console.log("product",isPresent);
      if (! isPresent){
        await Cart.updateOne({
            customerID: userId},
            {
                $addToSet:{cartItems:{productId,quantity}}
            }
        )
      }else{
         await Cart.updateOne({
        customerID: userId,
      },
      {
        $set:{"cartItems.$[obj].quantity":quantity}
      },{
        arrayFilters:[{"obj.productId":productId}]
      }
      
      );
      }
     const newProduct= await Cart.findOne({
        customerID:userId,
    })
      res.status(203).json({
        msg: "quantity updated",
        result: newProduct,
      });
    }
  } catch (error) {
    res.status(402).json({
      msg: "Error Occured updating Cart",
      errorMsg: error.message,
    });
  }
}
