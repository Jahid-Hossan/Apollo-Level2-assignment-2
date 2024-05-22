import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/shop.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Shop app is running");
});

export default app;
