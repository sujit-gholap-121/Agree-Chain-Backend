import {v2 as cloudinary} from 'cloudinary';
import {symlinkSync, unlinkSync} from "node:fs"
import { fileURLToPath } from 'node:url';

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

export async function cloudinaryUpload(localPath){
    
    try{
      if (!localPath) return null
      const result=await cloudinary.uploader.upload(localPath,{
        resource_type:"auto"
      })
      unlinkSync(localPath)
      console.log(true)
      return result

    }catch(e){
      unlinkSync(localPath)
      return null
    }
}