import express from "express";
import multer from "multer"
import {
  handleCreateBussiness,
  handleGetAllBussiness,
} from "../controllers/bussiness.js";
import { handleBussinessAuthentication } from "../controllers/authenticate.js";
import { handleLoginBussiness } from "../controllers/login.js";
import {  handleUploadProduct } from "../controllers/Products/uploadProduct.js";
import Logout from "../controllers/logout.js";
import handleFilterApis from "../controllers/filter.js";
import configAndConnectWeb3 from "../controllers/getBalance.js";
import handleGetProduct  from "../controllers/Products/getProduct.js";
import { handleGetAllProduct } from "../controllers/Products/getAllProducts.js";
import handleGetCategories from "../controllers/getCategories.js";
import handleGetAllBussinessOrders from "../controllers/Order/handleGetAllBussinessOrders.js";
import handleBuyProduct from "../controllers/Products/buyProduct.js"
import handleResellProduct from "../controllers/Products/resellProduct.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination:function (req,file,cb){cb(null,"./public/assets")},
  filename: function (req, file, cb)  {
    cb(null,  Date.now()+file.fieldname+file.originalname);
  },
});
const upload = multer({ storage });

router.route("/").get(handleGetAllBussiness).post(handleCreateBussiness);

router.route("product/addCart/:productId")
.post(handleBussinessAuthentication)



router
  .route("/getproducts/:productId")
  .get(handleBussinessAuthentication,handleGetAllProduct)

router
  .route("/addproduct")
  .post(upload.single("productImage"),handleBussinessAuthentication,handleUploadProduct)

router
.route("/buyproduct/:productId")
.get(handleBussinessAuthentication,handleBuyProduct)

router
.route("/resell/:productId")
.get(handleBussinessAuthentication,handleResellProduct)

router.route("/orders")
.get(handleBussinessAuthentication,handleGetAllBussinessOrders)

router
  .route("/login")
  .post( handleLoginBussiness);

router.
  route("/logout")
  .post(Logout)

router.route("/apis")
.get(handleBussinessAuthentication,handleFilterApis)

router.route("/getcategories")
.get(handleBussinessAuthentication,handleGetCategories)


router.route("/ethBalance/:walletId")
.get(configAndConnectWeb3)

export default router;
