import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RelatedProduct from '../components/RelatedProduct';
import { CartContext } from '../context/CartContext';

const Single = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [relatedLoading, setRelatedLoading] = useState(true);
    /* Context Loader */
    const { addToCart, orderNow } = useContext(CartContext);

    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const loadData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${BASE_URL}/products/${id}`);
            const result = await response.json();
            setData(result);

            if (result.category) {
                loadRelatedProducts(result.category, result.id);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const loadRelatedProducts = async (category, currentProductId) => {
        setRelatedLoading(true);
        try {
            const response = await fetch(`${BASE_URL}/products/category/${category}`);
            const result = await response.json();

            // Exclude the current product from the related products
            const filteredProducts = result.filter(product => product.id !== parseInt(currentProductId));
            setRelatedProducts(filteredProducts);
        } catch (error) {
            console.error("Error fetching related products:", error);
        } finally {
            setRelatedLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, [id]); // Reload data when the ID changes

    return (
        <>
            {loading ? (
                <div className="loader-container">
                    <div className="spinner"></div>
                    <p>Loading product details...</p>
                </div>
            ) : (
                <div>
                    <div class="bg-gray-100 dark:bg-gray-800 py-8">
                        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div class="flex flex-col md:flex-row -mx-4">
                                <div class="md:flex-1 px-4">
                                    <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                        <img class="w-full h-full" src={data.image} alt="Product Image" />
                                    </div>
                                    <div class="flex -mx-2 mb-4">
                                        <div class="w-1/2 px-2">
                                            <button
                                                onClick={() => addToCart(data)}
                                                class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">কার্টে যুক্ত করুন</button>
                                        </div>
                                        <div class="w-1/2 px-2">
                                            <button
                                                onClick={() => orderNow(data)}
                                                class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"> অর্ডার করুন </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="md:flex-1 px-4">
                                    <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{data.title}</h2>
                                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                        {data.category}
                                    </p>
                                    <div class="flex mb-4">
                                        <div class="mr-4">
                                            <span class="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                            <span class="text-gray-600 dark:text-gray-300">$ {data.price}</span>
                                        </div>
                                        <div>
                                            <span class="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                            <span class="text-gray-600 dark:text-gray-300">In Stock</span>
                                        </div>
                                    </div>
                                    <div class="mb-4">
                                        <span class="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                                        <div class="flex items-center mt-2">
                                            <button class="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                                            <button class="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                                            <button class="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                                            <button class="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                                        </div>
                                    </div>
                                    <div class="mb-4">
                                        <span class="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                                        <div class="flex items-center mt-2">
                                            <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                                            <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                                            <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                                            <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                                            <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                        <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                            {data.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Related Products */}
                    <RelatedProduct products={relatedProducts} loading={relatedLoading} />
                </div>
            )}
        </>
    );
};

export default Single;
