import express from "express";
import { handleGetAllUsers ,handleCreateUser} from "../controllers/user.js";
import { HandleGetAllLoggs } from "../controllers/loggs.js";
import { handleLoginUser } from "../controllers/login.js";
import {  handleUserAuthentication } from "../controllers/authenticate.js";
import { handleAddToCart } from "../controllers/Cart/addToCart.js";
import { handleGetAllCartItems } from "../controllers/Cart/getCartItem.js";
import { handleRemoveFromCart } from "../controllers/Cart/removeFromCart.js";
import { handleCreateAddress } from "../controllers/Address/createAddress.js";
import handleGetAllAddress from "../controllers/Address/getAllAddress.js";
import handleCreateOrder from "../controllers/Order/createOrder.js";
import { handleGetOrderDetails } from "../controllers/Order/getOrderDetails.js";
import handleGetSpecificCategory from "../controllers/Categories/handleGetSpecificCategory.js";
import handleGetProduct  from "../controllers/Products/getProduct.js";
import SearchProducts from "../controllers/searchProducts.js";
import handleGetCategories from "../controllers/getCategories.js";

const router = express.Router();

router.route("/")
  .get(handleGetAllUsers )
  .post(handleCreateUser );

router.route("/login")
.post(handleLoginUser)

router.route("/cart")
.get(handleUserAuthentication,handleGetAllCartItems)

router.route("/order")
// .get(handleUserAuthentication,handleGetOrderDetails)
.post(handleUserAuthentication,handleCreateOrder)

router.route("/getcategories")
.get(handleUserAuthentication,handleGetCategories)

router.route("/category/:categoryId")
.get(handleUserAuthentication,handleGetSpecificCategory)

router.route("/product/:productId")
.get(handleUserAuthentication,handleGetProduct)

router.route("/search")
.get(handleUserAuthentication,SearchProducts)

router.route("/getorder/:orderId")
.get(handleUserAuthentication,handleGetOrderDetails)

router.route("/addProduct/:productId")
.post(handleUserAuthentication,handleAddToCart)

router.route("/removeProduct/:productId")
.post(handleUserAuthentication,handleRemoveFromCart)

router.route("/address")
.get(handleUserAuthentication,handleGetAllAddress)
.post(handleUserAuthentication,handleCreateAddress)

router.route("/loggs").get(HandleGetAllLoggs)

export default router;
