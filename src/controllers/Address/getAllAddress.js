// import UserAddress from "../../models/userAddress.js"

export default async function handleGetAllAddress(req,res){
    const {userId}=req
    try {
        const result=await UserAddress.find({
            customerID:userId
        })
        if (result){
            res.status(203).json({
                msg:"Successfully retrieved Addresses",
                result
            })
        }
    } catch (error) {
        res.status(402).json({
            msg:error.message
        })
    }
}