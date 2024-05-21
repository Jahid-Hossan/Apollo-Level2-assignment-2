import { TProduct } from "./shop.interface";
import { ProductModel } from "./shop.model";




const addProductIntoDB = async (product: TProduct) => {
    const result = await ProductModel.create(product);
    return result;
  };

  export const productServices = {
    addProductIntoDB
  }