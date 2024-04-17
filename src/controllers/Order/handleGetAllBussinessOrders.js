import BussinessOrder from "../../models/bussinessOrders.js"

const handleGetAllBussinessOrders=async(req,res)=>{
    const {userId}=req
    try {
        const result=await BussinessOrder.find({bussinessId:userId})
        if (!result){
            throw new Error("Error feching bussiness Orders")
        }
        
        res.status(403).json({
            msg:"sucecess",
            result
        })
    } catch (error) {
        res.status(403).json({
            msg:error.message
        })
    }
}

export default handleGetAllBussinessOrders