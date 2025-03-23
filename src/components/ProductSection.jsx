import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import Loader from './Loader';
import { Link } from 'react-router-dom';

const ProductSection = ({loading, data, className}) => {
    const IMAGE_URL = import.meta.env.VITE_API_IMAGE_URL;
      const [cartItems, setCartItems] = useState(new Set());
      const { addToCart, orderNow, cart } = useContext(CartContext);
    
      // Update cart items when cart changes
      useEffect(() => {
        const cartItemIds = new Set(cart.map((item) => item.id));
        setCartItems(cartItemIds);
      }, [cart]);
    return (
        <div className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4 lg:px-10 ${className}`}>
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
                    src={`${IMAGE_URL}/admin/product/${item.product_image}`}
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
    );
};

export default ProductSection;