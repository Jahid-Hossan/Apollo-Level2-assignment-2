import express from 'express';
import { productControllers } from './shop.controller';
const router = express.Router();

router.post('/products', productControllers.addProduct);



export const ProductRoutes = router;