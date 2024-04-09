import Bussiness from "../models/bussiness.js";
import bcrypt from "bcrypt"

export async function handleGetAllBussiness(req, res) {
    try{
        const users = await Bussiness.find({});
        res.status(200).json({
            message: "success at user",
            users,
          });
    }catch(e){
        res.status(501).json({
            message: "Error fetching bussinesses",
          })
    }
  }

export async function handleCreateBussiness(req, res) {
    console.log(req.body);
    const { name, mobile, email, password
     } =
      req.body;
    try {
      if (
        [name, mobile, email, password].some(
          (ele) => ! ele || ele?.trim===""
        )
      ) {
        // throw new Error("Fill all required Data")
      }
      else{
        const result=await Bussiness.findOne({
          mobile
        })
    
        if (result){
          // throw new Error("Bussiness already exists")
        }
        else{
          const hashedPassword=await bcrypt.hash(password,10)
    
          const createdUser=await Bussiness.create({
            name,
            mobile,
            email:email.toLowerCase(),
            password:hashedPassword
          });
      
          const findUser=await Bussiness.findById(createdUser._id).select("-password")
      
          if (!findUser){
            // throw new Error("Error finding created bussiness")

          }
      
          res.status(200).json({ message: "bussiness successfully created" ,user:findUser});
        
        }
    
        
      }
      } catch (e) {
      res.status(401).json({
        msg:e.message
      }).end();
    }
  }