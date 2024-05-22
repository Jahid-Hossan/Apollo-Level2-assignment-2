import express from "express";
import { productControllers } from "./shop.controller";
const router = express.Router();

router.post("/products", productControllers.addProduct);

router.get("/products", productControllers.getProduct);

router.get("/products/:productId", productControllers.getSingleProduct);

router.put("/products/:productId", productControllers.updateProduct);

router.delete("/products/:productId", productControllers.deleteProduct);

export const ProductRoutes = router; 
