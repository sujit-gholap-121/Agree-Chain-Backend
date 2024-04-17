import Product from "../../models/product.js"

const handleProductAnalytics=async (req,res)=>{
    const {userId}=req
    const{productId,year,day,month}=req.query
    console.log(req.body)
    let {oldDate,newDate}=req.body
    oldDate=new Date(oldDate)
    newDate=new Date(newDate)

    try {
        const result=await Product.aggregate([{
            $match:{createdAt:{$lte:newDate,$gte:oldDate}}
        },{
            $group:{_id:"$_id",count:{$sum:1}}
        }])
        console.log(result)
        if(!result){
            throw new Error("error fetching analytics ")
        }
        res.status(202).json({
            msg:"success",
            result
        })
    } catch (error) {
        res.status(502).json({
            msg:error.message
        })
    }
}

export default handleProductAnalytics