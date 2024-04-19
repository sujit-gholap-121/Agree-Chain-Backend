import Product from "../../models/product.js"
import Bussiness from "../../models/bussiness.js"

export  async function  handleGetAllProduct(req,res){
    const {userId}=req
    const {productId}=req.params
    try{
        const getProduct=await Product.find({
            
                $eq: { $last:{"$getfield":"owner" },userId}
            
            
        })
        if (!getProduct)
        console.log(getProduct)
        // const ownerDetails=await Bussiness.findOne({_id:getProduct.owner})
        console.log(getProduct)
        res.status(202).json({
            product:getProduct,ownerDetails
        })
    }catch(e){
        res.status(501).json({
            msg:e.message
        }).end()
    }

}