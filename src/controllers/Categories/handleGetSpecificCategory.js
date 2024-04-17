import Product from "../../models/product.js"

const handleGetSpecificCategory=async (req,res)=>{
    try {
        const {userId}=req.body
        const {categoryId}=req.params
        console.log(categoryId)
        const result=await Product.find({category:categoryId})
        res.status(201).json({
            msg:"suceess",
            result
        })
    } catch (error) {
        res.status(402).json({
            msg:error.message
        })
    }
}

export default handleGetSpecificCategory