import { ProductModel } from "../shop/shop.model";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const addOrderIntoDB = async (order: TOrder) => {
  const productId = order.productId;
  const product = await ProductModel.findById(productId);
  const decreseQuantity = {
    $inc: {
      "inventory.quantity": order.quantity * -1,
    },
  };

  if (!product) {
    return;
  }

  if (order.quantity > product.inventory.quantity) {
    throw new Error("noQuantity");
  }

  const result = await OrderModel.create(order);

  if (result) {
    await ProductModel.findByIdAndUpdate(productId, decreseQuantity, {
      new: true,
      runValidators: true,
    });
  }

  if (product.inventory.quantity <= 0) {
    await ProductModel.findByIdAndUpdate(
      productId,
      { $set: { "inventory.inStock": false } },
      { new: true, runValidators: true },
    );
  }

  return result;
};

const getOrderFromBD = async (email?: string) => {
  const query = { email: email };
  if (email) {
    const result = await OrderModel.find(query);
    return result;
  } else {
    const result = await OrderModel.find();
    return result;
  }
};

export const orderServices = {
  addOrderIntoDB,
  getOrderFromBD,
};
