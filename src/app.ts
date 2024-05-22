import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/shop/shop.route";
import { OrderRoutes } from "./app/modules/orders/order.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api", ProductRoutes);
app.use("/api/orders", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Shop app is running");
});

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
