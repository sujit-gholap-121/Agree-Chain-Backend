// import userAddress from "../../models/userAddress.js"

export async function handleCreateAddress(req,res){
try {
    const {userId}=req
    const {city,pincode,street,state,country,name}=req.body
    if ([name,city,pincode,street,state,country].some(ele=>{
        !ele || ele.trim===""
    })){
        throw new Error("Fill Required Data")
    }
    const result=await userAddress.create({
        name,
        city,pincode,street,state,country,customerID:userId
    })
    if (!result){
        throw new Error("Error creating Address")
    }
    const isCreated=await userAddress.find({
        customerID:userId,
        _id:result._id
    })
    if ( isCreated){
        res.status(201).json({
            msg:"Address Created Successfully"
        })
    }
} catch (error) {
    res.status(401).json({
        "msg":error.message
    })
}
}