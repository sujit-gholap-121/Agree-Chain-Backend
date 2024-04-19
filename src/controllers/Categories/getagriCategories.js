import Categories from "../../Constants/agriCategories.js"

export const handleGetAgriCategory=async(req,res)=>{
    try {
        res.status(200).json({
            Categories
        })
    } catch (error) {
        res.status(503).json({
            msg:error.message
        })
    }

}
