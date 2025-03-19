import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
const CategoryProduct = () => {
    const { id } = useParams()
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const { addToCart } = useContext(CartContext);

    // Fetch data
    const loadData = async () => {
        try {
            const response = await fetch(`${BASE_URL}/products/category/${id}`);
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
    }, [id]);
    return (
        <div>
            <div class="text-center p-10">
                <h1 class="font-bold text-4xl mb-4">{id.toUpperCase()}</h1>
                {/* <h1 class="text-3xl">Product Category</h1> */}
            </div>
        <Products loading={loading} data={data} />
            {/* <section id="Projects"
                class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                {loading ? (
                    <div className="loader-container">
                        <div className="spinner"></div>
                        <p>Loading, please wait...</p>
                    </div>
                ) : (
                    <>
                        {data.map(item => {
                            return (
                                <>
                                    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                        <div href="#">
                                            <Link to={`/single/${item.id}`}>
                                                <img src={item.image}
                                                    alt="Product" class="h-80 w-72  rounded-t-xl" />
                                            </Link>
                                            <div class="px-4 py-3 w-72">
                                                <span class="text-gray-400 mr-3 uppercase text-xs">{item.category}</span>
                                                <Link to={`/single/${item.id}`}>
                                                    <p class="text-lg font-bold text-black truncate block capitalize">{item.title}</p>
                                                </Link>
                                                <div class="flex items-center">
                                                    <p class="text-lg font-semibold text-black cursor-auto my-3">$ {item.price}</p>
                                                    <del>
                                                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                                    </del>
                                                    <div onClick={() => addToCart(item)} class="ml-auto cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                                            <path
                                                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </>
                )}


            </section> */}

            
        </div>
    );
};

export default CategoryProduct;



const Products = ({loading, data}) => {
  const [cartItems, setCartItems] = useState(new Set());
  const { addToCart, orderNow, cart } = useContext(CartContext);


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