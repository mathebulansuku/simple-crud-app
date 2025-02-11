import mongoose from "mongoose";

const ProductShema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model("Product", ProductShema);
