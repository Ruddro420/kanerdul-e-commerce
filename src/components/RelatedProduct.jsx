import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const RelatedProduct = ({ products, loading }) => {
    const { addToCart, orderNow } = useContext(CartContext);
    return (
        <div style={{ marginTop: '30px' }}>
            <div class="container mx-auto px-8">
                <div class="mb-4 flex items-center justify-between gap-4 md:mb-8">
                    <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Related Products</h2>

                    <a href="#" title="" class="flex items-center text-base font-medium text-primary-700 hover:underline dark:text-primary-500">
                        See more products
                        <svg class="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                        </svg>
                    </a>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {loading ? (
                        <div className="loader-container">
                            <div className="spinner"></div>
                            <p>Loading, please wait...</p>
                        </div>
                    ) : (
                        <>
                            {products.map((item) => (
                                <div key={item.id} class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
                                    <Link to={`/single/${item.id}`}>
                                        <img class="w-full h-56 rounded-lg" src={item.image} alt="Product Image" />
                                    </Link>
                                    <Link to={`/single/${item.id}`}>
                                        <h3 class="text-xl font-semibold text-gray-800 mt-4">{item.title.substring(0, 18)} ...</h3>
                                    </Link>
                                    <p class="text-sm text-gray-600 mt-1">{item.category}</p>
                                    <p class="text-xl font-semibold text-gray-900 mt-2">$ {item.price}</p>
                                    <div class="mt-4 flex justify-between items-center">
                                        <button
                                            onClick={() => addToCart(item)}
                                            class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 cursor-pointer">Add to Cart</button>
                                        <button
                                            onClick={() => orderNow(item)}
                                            class="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 cursor-pointer">Order Now</button>
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

export default RelatedProduct;