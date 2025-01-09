import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";  // To get the category from the URL
import Cards from "./Cards";  // Assuming this is your book card component

function CategoryPage() {
  const { category } = useParams();  // Get the category from the URL
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooksByCategory = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/category/${category}`);
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBooksByCategory();
  }, [category]);  // Refetch books when category changes

  return (
    <div className="container mx-auto md:px-20 px-4">
      <div className="pt-28 text-center">
        <h1 className="text-2xl md:text-4xl">Books in {category} Category</h1>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
        {books.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
