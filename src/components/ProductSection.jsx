import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { X } from "lucide-react"; // Close button icon

const ProductSection = ({ loading, data, className }) => {
  const IMAGE_URL = import.meta.env.VITE_API_IMAGE_URL;
  const [cartItems, setCartItems] = useState(new Set());
  const { addToCart, orderNow, cart } = useContext(CartContext);

  // State for cart slider
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Update cart items when cart changes
  useEffect(() => {
    const cartItemIds = new Set(cart.map((item) => item.id));
    setCartItems(cartItemIds);
  }, [cart]);

  // Function to handle Add to Cart and open cart slider
  const handleAddToCart = (item) => {
    addToCart(item);
    setIsCartOpen(true); // Open the cart slider
  };

  return (
    <>
      <div
        className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4 lg:px-10 ${className}`}
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            {data?.map((item) => (
              <div
                key={item.id}
                className="bg-white border-1 border-gray-100 p-2 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-100"
              >
                <Link to={`/single/${item.id}`}>
                  <img
                    className="w-full lg:h-40 h-36 rounded-lg"
                    src={
                      item.product_image
                        ? `${IMAGE_URL}/admin/product/${item.product_image}`
                        : "https://adaptcommunitynetwork.org/wp-content/uploads/2022/01/ef3-placeholder-image.jpg"
                    }
                    alt="Product Image"
                  />
                </Link>
                <Link to={`/single/${item.id}`}>
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">
                    {item.product_name?.substring(0, 15) || "No Name Available"} ...
                  </h3>
                </Link>
                <p className="text-sm text-gray-600 mt-1">{item.select_category}</p>
                <p className="text-xl font-semibold text-gray-900 mt-2">
                  <span className="penthrough mr-4 text-[red]">৳ {item.regular_price}</span>{" "}
                  <span>৳{item.selling_price}</span>
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
                      onClick={() => handleAddToCart(item)}
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

      {/* Sliding Cart Sidebar ---------------------------------*/}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white lg:px-6 px-4 shadow-lg transition-transform transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 ease-in-out z-50`}
      >
        {/* Cart Header */}
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-gray-500 cursor-pointer hover:text-gray-900">
            <X size={24} />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="p-4 overflow-y-auto flex flex-col gap-5 h-[calc(100%-110px)]">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="flex items-center bg-gray-100 rounded-lg px-3 py-3">
                <img
                  src={
                    item.product_image
                      ? `${IMAGE_URL}/admin/product/${item.product_image}`
                      : "https://adaptcommunitynetwork.org/wp-content/uploads/2022/01/ef3-placeholder-image.jpg"
                  }
                  alt={item.product_name}
                  className="w-14 h-14 rounded-md"
                />
                <div className="ml-3 flex-1">
                  <h3 className="text-sm font-semibold">{item.product_name}</h3>
                  <p className="text-xs text-gray-500">৳{item.selling_price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-10">Your cart is empty</p>
          )}
        </div>

        {/* Checkout Button */}
        <div className="">
          <Link
            to="/checkout"
            className="block w-full text-center bg-green-600 text-white py-2 rounded-md hover:bg-green-500 transition"
          >
            Checkout
          </Link>
        </div>
      </div>

    </>
  );
};

export default ProductSection;
