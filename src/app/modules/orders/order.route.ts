import express from "express";
import { orderController } from "./order.controller";

const router = express.Router();

router.post("/", orderController.addOrder);

router.get("/", orderController.getOrder);

export const OrderRoutes = router;
