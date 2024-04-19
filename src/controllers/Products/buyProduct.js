import Product from "../../models/product.js"
import Order from "../../models/order.js"

const  handleBuyProduct=async (req,res)=>{
    try {
        const {productId}=req.params
        const {userId}=req
        const isValid=await Product.findOne({_id:productId})
        if (!isValid) throw new Error("Product not found")
        // console.log(  isValid.owner[isValid.owner.length-1].toString())
        if (isValid.owner[isValid.owner.length-1].toString()==userId){
            console.log(isValid.owner[isValid.owner.length-1])
            throw new Error("User is already owner of the product")
        } 

        const result=await Order.create({
            productId,
            soldBy:isValid.owner[isValid.owner.length-1],
            boughtBy:userId
        })
        if(!result) throw new Error("Error creating a order")
        const result1=await Product.findOneAndUpdate({_id:productId},{
            $push:{owner:userId,status:false}
        })
        if (!result1) throw new Error("Error creating a order")
        res.status(202).json({result1})
    } catch (error) {
        res.status(502).json({
            msg:error.message
        })
    }
}

export default handleBuyProduct