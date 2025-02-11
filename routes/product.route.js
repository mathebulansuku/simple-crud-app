import express from "express";
import {
  getProducts,
  getProduct,
  updateProducts,
  createProducts,
  deleteProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", createProducts);

router.put("/:id", updateProducts);

router.delete("/:id", deleteProducts);

export default router;
