import Product from "../../models/product.js"

export async function  handleGetProduct(req,res){
    const {productId}=req.params
    try{
        const getProduct=await Product.find({
            _id:productId
        },{_id:1})
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