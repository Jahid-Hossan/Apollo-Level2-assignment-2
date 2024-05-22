"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const shop_controller_1 = require("./shop.controller");
const router = express_1.default.Router();
router.post("/products", shop_controller_1.productControllers.addProduct);
router.get("/products", shop_controller_1.productControllers.getProduct);
router.get("/products/:productId", shop_controller_1.productControllers.getSingleProduct);
router.put("/products/:productId", shop_controller_1.productControllers.updateProduct);
router.delete("/products/:productId", shop_controller_1.productControllers.deleteProduct);
exports.ProductRoutes = router;
