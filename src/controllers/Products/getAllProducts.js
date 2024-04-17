import Product from "../../models/product.js"
import Bussiness from "../../models/bussiness.js"

export async function  handleGetAllProduct(req,res){
    // const {productId}=req.params
    try{
        const getProduct=await Product.findOne({
            owner:req.userId
        },{createdAt:0,__v:0})
        const ownerDetails=await Bussiness.findOne({_id:getProduct.owner})
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