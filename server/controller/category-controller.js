import Category from "../model/categorySchema.js";

export const getCategory = async (req, res) => {
  try {
    const categories = await Category.distinct("category"); // Gets all unique categories
    res.json(categories);
  } catch (error) {
    res.status(500).send("Error fetching categories");
  }
};

export const getCt = async (req, res) => {
  try {
    const category = req.params.category;
    const books = await Category.find({ category: category }); // Find books by category
    res.json(books);
  } catch (error) {
    res.status(500).send("Error fetching books by category");
  }
};
