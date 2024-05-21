import { Request, Response } from "express";
import { productServices } from "./shop.service";


// postProduct method

const addProduct = async(req:Request,res:Response)=>{
    try {
        const product = req.body;
        const result = await productServices.addProductIntoDB(product)

        res.status(200).json({
            success: true,
            message: 'Product created successfully!',
            data: result,
          });

    }catch (err: any) {
        res.status(500).json({
          success: false,
          message: "Something went wrong!",
          error: err,
        });
      }
}


// getProduct method

const getProduct = async(req:Request,res:Response)=>{
  try {
      // const product = req.body;
      const result = await productServices.getProductFromDB()

      res.status(200).json({
          success: true,
          message: 'Products fetched successfully!',
          data: result,
        });

  }catch (err: any) {
      res.status(500).json({
        success: false,
        message: "Something went wrong!",
        error: err,
      });
    }
}




export const productControllers={
    addProduct,
    getProduct
}