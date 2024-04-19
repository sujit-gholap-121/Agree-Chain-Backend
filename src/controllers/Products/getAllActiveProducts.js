import Product from "../../models/product.js"

async function  handleGetAllActiveProduct(req,res){
    // const {productId}=req.params
    try{
        const productList=await Product.find({
            status:true
        })
        if (!productList) throw new Error("Error fetching active products")
        // const ownerDetails=await Bussiness.findOne({_id:getProduct.owner})
        // console.log(getProduct)
        res.status(202).json({
            productList
        })
    }catch(e){
        res.status(501).json({
            msg:e.message
        }).end()
    }

}
export default handleGetAllActiveProduct