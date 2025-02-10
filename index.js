import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node Server");
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
