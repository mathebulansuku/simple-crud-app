import express from "express";
import { connectDB } from "./config/db.js";
import { Product } from "./models/product.model.js";

const app = express();
const port = 3000;

//middleware
app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(port, () => {
  connectDB;
  console.log(`Server is listening on port ${port}`);
});
