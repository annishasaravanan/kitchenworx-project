
import express from "express";
import formidable from "express-formidable";

const router = express.Router();


import { requireSignin, isAdmin } from "../middlewares/auth.js";

import {
  create,
  list,
  read,
  photo,
  remove,
  update,
  listProducts,
  filteredProducts,
  productsCount,
  productsSearch,
  relatedProducts,
  getToken,
  processPayment,
  

} from "../controllers/product.js";

router.post("/product", requireSignin, isAdmin, formidable(), create);
router.get("/products", list);
router.get("/product/:slug", read);
router.get("/product/photo/:productId", photo);
router.delete("/product/:productId", requireSignin, isAdmin, remove);
router.put("/product/:productId", requireSignin, isAdmin, formidable(), update);
router.get("/list-products/:page", listProducts);
router.post("/filtered-products", filteredProducts);
router.get("/products-count", productsCount);
router.get("/products/search/:keyword", productsSearch);
router.get("/related-products/:productId/:categoryId", relatedProducts);


router.get("/braintree/token", getToken);
router.post("/braintree/payment", requireSignin, processPayment);
export default router;
