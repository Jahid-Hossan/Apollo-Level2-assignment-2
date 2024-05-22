import { TProduct } from "./shop.interface";
import { ProductModel } from "./shop.model";

// post product
const addProductIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

// get all product
const getProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};


// get single product
const getSingleProductFromDB = async (id: string) => {
  const query = { _id: id };
  const result = await ProductModel.findOne(query);
  return result;
};

// update product
const updateProductFromDB = async (id: string, product: TProduct) => {
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

  const result = await ProductModel.findByIdAndUpdate(id, updatedProductData,{ new: true, runValidators: true },);
  return result;
};

// get single product
const deleteProductFromDB = async (id: string) => {
  const query = { _id: id };
  const result = await ProductModel.findByIdAndDelete(query);
  return result;
};

export const productServices = {
  addProductIntoDB,
  getProductFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB
};
