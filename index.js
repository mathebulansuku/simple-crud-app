import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { Product } from "./models/product.model.js";

const app = express();
const port = 3000;

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Node Server");
});

//routes
app.get("/api/products", async (req, res) => {
  //Allows you to get all products in mongoDB
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({ message: "Product created", product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json({ message: "Product not found." });
    }
    res.status(200).json({ message: "Product has been deleted." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// const connectDB = async () => {
//   try {
//     await mongoose.connect("your_connection_string_here");
//     console.log("MongoDB Connected");
//   } catch (error) {
//     console.error("Connection Failed:", error.message);
//     process.exit(1);
//   }
// };

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
