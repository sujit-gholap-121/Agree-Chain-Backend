import Product from "../../models/product.js";
import Cart from "../../models/cart.js";
import { cloudinaryUpload } from "../../Utilities/cloudinaryUpload.js";

export  async function handleUploadProduct(req, res) {
  // console.log(req.userId, req.email, req.mobile,req.files);
  const { name, description, stocks_Available, price,productCategory } = req.body;
  console.log(req.body,req.file)
  try {
     const {destination,filename}=req.file
     console.log(destination+'/'+filename)
     const isUploaded=await cloudinaryUpload(destination+"/"+filename)
    const createdProduct=await Product.create({
      name,
      description,
      stocks_Available,
     category:productCategory,
      productImage:isUploaded.url,
      price,
      owner: req.userId,
    })
    const isFound=await Product.findOne({_id:createdProduct._id})
    // console.log(isFound.owner)
    if (isFound){
        res.status(201).json({
            "msg":"Product Added Successfully",
            product:isFound
        })
    }else{
       res.status(503).json({
        "msg":"Error creating a product"
    })
    }
   
  } catch (e) {
    res.status(502).send({
      msg: e.message,
    });
  }
}
