import Product from "../../models/product.js"
import User from "../../models/user.js"

const handleResellProduct=async(req,res)=>{
    try {
        const {productId}=req.params
        const {userId}=req
        const isTrader=await User.findOne({$and:[{_id:userId},{accountType:"trader"}]})
        if (!isTrader) throw new Error("Invalid user type for resell ")
        const productInfo=await Product.findOne({productId})
        if (!productInfo.owner[productInfo.owner.length-1].toString()===userId) throw new Error("Invalid user access for resell")
        const isStatusModified=await Product.findOneAndUpdate({_id:userId},{$set:{status:true}})
        if (!isStatusModified) throw new Error("Error changing product status for display")
        res.status(203).json({msg:"Product Listed Successfully"})
    } catch (error) {
        res.status(501).json({
            msg:error.message
        })
    }
}

export default handleResellProduct