import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node Server");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
