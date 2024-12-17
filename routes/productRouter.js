import express from "express";
import { createProduct, deleteProduct, getPoducts, getProductByName } from "../controllers/productController.js";

const productRouter=express.Router();

productRouter.post("/",createProduct);
productRouter.get("/",getPoducts);
productRouter.get("/:name",getProductByName);
productRouter.delete("/",deleteProduct);


export default productRouter;
