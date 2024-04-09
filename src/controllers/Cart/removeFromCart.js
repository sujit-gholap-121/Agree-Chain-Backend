import Cart from "../../models/cart.js"

export async function handleRemoveFromCart(req,res){
try {
    const{userId}=req
    const {productId}=req.params
    const {quantity}=req.query
    console.log(productId,quantity)
    const validCart=await Cart.findOne({
        customerID:userId
    })
    if (!validCart){
        throw new Error("Cart Not Found")
    }
    const validProduct=await Cart.findOne({
        cartItems:{$elemMatch:{productId:productId,quantity:{$gt:0}}}
    })
    if (!validProduct){
        throw new Error("Product is not Added")
    }
    let result;
    if (quantity==0){
        result=await Cart.findOneAndUpdate({
            customerID:userId
        },{
            $pull:{cartItems:{productId}}
        })
          console.log(result)
    }else{
    result=await Cart.findOneAndUpdate({
        customerID:userId,cartItems:{$elemMatch:{productId:productId}}
        },{
            $set:{"cartItems.$.quantity":quantity}
        })
    }
    
    const cartDetails=await Cart.findOne({customerID:userId})
    res.status(203).json({
        "msg":"success",
        cartDetails
    })
} catch (error) {
    res.status(403).json({
        msg:error.message
    })
}
}