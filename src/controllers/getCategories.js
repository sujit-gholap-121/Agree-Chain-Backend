import Categories from "../Constants/Categories.js";

export default function handleGetCategories(req,res){
    res.status(201).json({
        msg:"success",
        Categories
    })
}