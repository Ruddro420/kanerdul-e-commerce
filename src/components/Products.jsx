import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState(new Set());
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const { addToCart, orderNow, cart } = useContext(CartContext);

  // Fetch data
  const loadData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Update cart items when cart changes
  useEffect(() => {
    const cartItemIds = new Set(cart.map((item) => item.id));
    setCartItems(cartItemIds);
  }, [cart]);

  return (
    <div style={{ marginTop: "30px" }}>
      <div className="container mx-auto px-8">
        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            All Products
          </h2>
          <a
            href="#"
            className="flex items-center text-base font-medium text-blue-700 hover:underline"
          >
            See more products
            <svg
              className="ms-1 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:px-10">
          {loading ? (
            <div className="loader-container">
              <div className="spinner"></div>
              <p>Loading, please wait...</p>
            </div>
          ) : (
            <>
              {data.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border-1 border-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-100"
                >
                  <Link to={`/single/${item.id}`}>
                    <img
                      className="w-full h-48 rounded-lg"
                      src={item.image}
                      alt="Product Image"
                    />
                  </Link>
                  <Link to={`/single/${item.id}`}>
                    <h3 className="text-xl font-semibold text-gray-800 mt-4">
                      {item.title.substring(0, 18)} ...
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">{item.category}</p>
                  <p className="text-xl font-semibold text-gray-900 mt-2">
                    $ {item.price}
                  </p>
                  <div className="mt-4 flex flex-col gap-2 items-stretch">
                    {cartItems.has(item.id) ? (
                      <Link
                        to="/cart"
                        className="bg-blue-100 text-center text-blue-800 py-2 px-4 rounded-md hover:bg-blue-800 hover:text-white transition duration-300 cursor-pointer"
                      >
                        View Cart
                      </Link>
                    ) : (
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-blue-100 text-blue-800 py-2 px-4 rounded-md hover:bg-blue-800 hover:text-white transition duration-300 cursor-pointer"
                      >
                        Add to Cart
                      </button>
                    )}

                    <button
                      onClick={() => orderNow(item)}
                      className="bg-[#00A651] text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 cursor-pointer"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
