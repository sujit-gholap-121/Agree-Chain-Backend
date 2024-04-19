import Bussiness from "../../models/bussiness.js"
import Product from "../../models/product.js"

async function  handleGetProduct(req,res){
    const {productId}=req.params
    try{
        const getProduct=await Product.findOne({
            _id:productId
        })
        if (!getProduct){
            throw new Error("Error fetching provided product")
        }

        // const getBussiness=await Bussiness.find({
        //     _id:getProduct[0].owner
        // })
        // if (!getBussiness){
        //     throw new Error("Error fetching bussiness info for provided product")
        // }
        res.status(202).json({
            product:getProduct,
            // bussinesInfo:getBussiness
        })
    }catch(e){
        res.status(501).json({
            msg:e.message
        })
    }
}

export default handleGetProduct