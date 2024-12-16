import express from "express";
import { createProduct, deleteProduct, getPoducts, getProductByName } from "../controllers/productController.js";

const productRouter=express.Router();

productRouter.get("/",getPoducts);
productRouter.get("/:name",getProductByName);
productRouter.post("/",createProduct);
productRouter.delete("/",deleteProduct);

export default productRouter;
