import Cart from "../../models/cart.js"

export async function handleGetAllCartItems(req,res){
try {
    const {userId}=req
    console.log(userId)
    const result=await Cart.find({
        customerID:userId
    })
    console.log(result)
    
    res.status(203).json(
        {
            cartDetails:result
        }
    )
} catch (error) {
    res.status(404).json(
        {
            msg:"error getting cart products",
            result:error.message
        }
    )
}
}