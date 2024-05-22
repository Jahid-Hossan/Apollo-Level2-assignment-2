"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const shop_model_1 = require("./shop.model");
// post product
const addProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shop_model_1.ProductModel.create(product);
    return result;
});
// get all product
const getProductFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const regexPattern = new RegExp(searchTerm);
    const result = yield shop_model_1.ProductModel.find({ name: { $regex: regexPattern, $options: 'i' } });
    return result;
});
// get single product
const getSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: id };
    const result = yield shop_model_1.ProductModel.findOne(query);
    return result;
});
// update product
const updateProductFromDB = (id, product) => __awaiter(void 0, void 0, void 0, function* () {
    // const query = { _id: id };
    const updatedProductData = {
        $set: {
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            tags: product.tags,
            variants: product.variants,
            inventory: product.inventory,
        },
    };
    const result = yield shop_model_1.ProductModel.findByIdAndUpdate(id, updatedProductData, { new: true, runValidators: true });
    return result;
});
// get single product
const deleteProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: id };
    const result = yield shop_model_1.ProductModel.findByIdAndDelete(query);
    return result;
});
exports.productServices = {
    addProductIntoDB,
    getProductFromDB,
    getSingleProductFromDB,
    updateProductFromDB,
    deleteProductFromDB
};
