/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Loader from "./Loader";

const Header = ({ menuopen, setMenuOpen }) => {
  const { cart, user } = useContext(CartContext);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState({});
  const [loading, setLoading] = useState(true);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Fetch main categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${BASE_URL}/products/categories`);
        const result = await response.json();
        setCategories(result || []);

        // Initialize subCategories state with 'undefined' (indicating not loaded yet)
        const initialSubCategories = {};
        result.forEach((category) => {
          initialSubCategories[category.name] = undefined;
        });
        setSubCategories(initialSubCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Fetch subcategories for a category
  const fetchSubCategories = async (categoryName) => {
    if (subCategories[categoryName] !== undefined) return; // Avoid duplicate fetch
    try {
      const response = await fetch(`${BASE_URL}/sub-category/category/${categoryName}`);
      const result = await response.json();
      setSubCategories((prev) => ({
        ...prev,
        [categoryName]: result.length > 0 ? result : [],
      }));
    } catch (error) {
      console.error("Error fetching sub-categories:", error);
      setSubCategories((prev) => ({
        ...prev,
        [categoryName]: [],
      }));
    }
  };

  // Handle hover to show subcategories
  const handleCategoryHover = (categoryName) => {
    setHoveredCategory(categoryName);
    fetchSubCategories(categoryName);
  };

  return (
    <div className="fixed top-0 z-50 w-full bg-white shadow">
      {loading ? (
        <Loader />
      ) : (
        <header>
          <div className="bg-gray-100 border-b border-gray-200">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between h-16 lg:h-20">
                <Link to="/" className="flex">
                  <img className="w-auto h-8 lg:h-10" src="/gadgetextreme logo.png" alt="Logo" />
                </Link>

                <div className="hidden lg:flex lg:items-center lg:space-x-7">
                  <Link to="/" className="text-base font-medium text-black">Home</Link>
                  
                  {categories.map((category) => {
                    const hasSubCategories = subCategories[category.name]?.length > 0;

                    return (
                      <div 
                        key={category.id} 
                        className="relative group"
                        onMouseEnter={() => handleCategoryHover(category.name)}
                        onMouseLeave={() => setHoveredCategory(null)}
                      >
                        <Link
                          to={`/category/${category.name}`}
                          className="text-base font-medium text-black flex items-center"
                        >
                          {category.name}
                          {subCategories[category.name] === undefined || hasSubCategories ? (
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          ) : null}
                        </Link>

                        {hoveredCategory === category.name && hasSubCategories && (
                          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                            {subCategories[category.name].map((subCat, index) => (
                              <Link
                                key={index}
                                to={`/sub-category/${category.name}/${subCat}`}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 capitalize"
                              >
                                {subCat}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                  <Link to="/shop" className="text-base font-medium text-black">Shop</Link>
                </div>

                <Link to="/cart" className="flex items-center justify-center ml-auto text-white bg-black rounded-full w-9 h-9 lg:hidden relative">
                  <div className="absolute left-5 bottom-5">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                      {cart.length > 0 ? cart.length : "0"}
                    </p>
                  </div>
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </Link>
              </nav>
            </div>
          </div>
        </header>
      )}
    </div>
  );
};

export default Header;
