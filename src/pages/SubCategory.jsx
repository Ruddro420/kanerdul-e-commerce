/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ProductSection from "../components/ProductSection";

const SubCategory = () => {
  const { category, subCategory } = useParams();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const { addToCart } = useContext(CartContext);

  const loadData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/category/${category}`);
      const result = await response.json();
      setData(result[0]); // Access the array of products from the "0" property
      
      // Filter products by sub-category
      const filtered = result[0].filter(product => 
        product.select_sub_category.toLowerCase() === subCategory.toLowerCase()
      );
      setFilteredData(filtered);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [category, subCategory]);

  return (
    <div>
      <div className="text-center p-10 bg-green-700">
        <h1 className="font-bold text-4xl mb-4 text-white">{subCategory.toUpperCase()}</h1>
      </div>
      <div className="mt-16 lg:px-8">
        <ProductSection loading={loading} data={filteredData} />
      </div>
    </div>
  );
};

export default SubCategory;