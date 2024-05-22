import { Request, Response } from "express";
import { productServices } from "./shop.service";

// postProduct method

const addProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await productServices.addProductIntoDB(product);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: err,
    });
  }
};

// getProduct method

const getProduct = async (req: Request, res: Response) => {
  try {
    // const product = req.body;
    // console.log(req.query);
    const searchTerm=req.query.searchTerm;
    
    if (searchTerm) {
      const result = await productServices.getProductFromDB(searchTerm as string);
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    }else{
      const result = await productServices.getProductFromDB();
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    }

    
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: err,
    });
  }
};

// get single product

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: err,
    });
  }
};

// update product

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = req.body;

    const result = await productServices.updateProductFromDB(
      productId,
      product,
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: err,
    });
  }
};

// DELETE product

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.deleteProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: err,
    });
  }
};

export const productControllers = {
  addProduct,
  getProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct
};
 