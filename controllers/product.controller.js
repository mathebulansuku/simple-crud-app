import mongoose from "mongoose";
import Product from "../models/product.model";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProducts = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({ message: "Product created", product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProducts = async (req, res) => {
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
};

export const deleteProducts = async (req, res) => {
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
};
