import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node Server");
});

app.post("/api/products", (req, res) => {
  console.log(req.body);
  res.send(`Hello ${req.body.name}`); //{name: "Nsuku", surname: "Mathebula", email: "thebula@db.com"}
});

app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const searchIndex = products.findIndex((product) => product.id === id);

  if (searchIndex > -1) {
    const deletedProduct = products.splice(searchIndex, 1);
    console.log(deletedProduct);
    res.send(200).json("Product is deleted.");
  } else {
    res
      .sendStatus(404)
      .json({ error: `This product with ${id} does not exist.` });
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
