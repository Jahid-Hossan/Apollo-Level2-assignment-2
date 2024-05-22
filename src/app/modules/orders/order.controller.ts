import { Request, Response } from "express";
import { orderServices } from "./order.service";

const addOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await orderServices.addOrderIntoDB(order);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Insufficient quantity available in inventory",
    });
  }
};

const getOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email;

    if (email) {
      const result = await orderServices.getOrderFromBD(email as string);
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully for user email!",
        data: result,
      });
    } else {
      const result = await orderServices.getOrderFromBD();
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully for user email!",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Order not found",
    });
  }
};

export const orderController = {
  addOrder,
  getOrder,
};
