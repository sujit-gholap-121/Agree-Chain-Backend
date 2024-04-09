import Product from "../../models/product.js"

export async function  handleGetAllProduct(req,res){
    // const {productId}=req.params
    try{
        const getProduct=await Product.find({
            owner:req.userId
        },{owner:0,createdAt:0,__v:0})
        console.log(getProduct)
        res.status(202).json({
            product:getProduct
        })
    }catch(e){
        res.status(501).json({
            msg:e.message
        }).end()
    }

}