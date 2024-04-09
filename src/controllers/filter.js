import Data from "../Constants/Categories.js"

const handleFilterApis=async(req,res)=>{
    const {category,limit=10}=req.query
    try{
 const DATA=await fetch (`${process.env.PUBLIC_APIS}`)
      const json_Data=await DATA.json()
    
    const result=json_Data.entries.filter(item=>category.includes(item.Category))
    res.status(211).json({"msg":"Successfully fetched Public APIs",result:result.splice(0,limit)})
    }catch(e){
        res.status(502).json({"msg":"Error Occuring while fetching APIs",result:{result}})
    }
   
   
}
export default handleFilterApis