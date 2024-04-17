import Product from "../models/product.js"

const SearchProducts=async(req,res)=>{
    const {searchToken}=req.query
    try {
        const tokens=searchToken.split(",")
        // console.log(typeof tokens,tokens)
            const result=await Product.find({
                keywords:{$in:tokens},
            },
            {
                _id:1,owner:1
            }
        )
       
        if (!result){
         throw new Error("No Product Found")   
        }
        res.status(201).json({
            msg:"success",
            result
        })
        // const resp=await Promise.all(result)
        // console.log(resp)
    } catch (error) {
        res.status(502).json({
            msg:error.message
        })
    }
}


export default SearchProducts