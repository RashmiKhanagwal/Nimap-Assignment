const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);