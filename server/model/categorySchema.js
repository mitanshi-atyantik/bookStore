import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  title: String,
  author: String,
  category: String,
  image: String,  // Category for the Category
  description: String,
  // other Category fields like image, etc.
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
