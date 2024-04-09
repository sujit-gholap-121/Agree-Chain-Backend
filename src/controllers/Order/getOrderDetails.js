import Order from "../../models/order.js"

export async function handleGetOrderDetails(req,res){
    try {
        const {orderId}=req.params
        const {userId}=req
        console.log(userId,orderId)
        const total_price=await Order.aggregate([
            {$match:{customerID:userId}},
            {"$unwind":"$orderItems"},
            {
                "$project":{
                    "total":{
                           "$multiply":["$orderItems.quantity",10]
                        }
                    }
            },{
                "$group":{
                    _id:null
                ,
                "total":{
                    "$sum":"$total"
                }}
            }
        ])
        console.log(total_price)
    } catch (error) {
        console.log(error.message)
    }
}