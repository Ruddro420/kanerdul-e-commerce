import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Products = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const { addToCart, orderNow } = useContext(CartContext);

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

    return (
        <div style={{ marginTop: '30px' }}>
            <div class="container mx-auto px-8">
                <h2 className='text-4xl font-semibold text-gray-800 py-8'>All Products</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {loading ? (
                        <div className="loader-container">
                            <div className="spinner"></div>
                            <p>Loading, please wait...</p>
                        </div>
                    ) : (
                        <>
                            {data.map((item) => (
                                <Link to={`/single/${item.id}`} key={item.id} class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
                                    <img class="w-full h-56 rounded-lg" src={item.image} alt="Product Image" />
                                    <h3 class="text-xl font-semibold text-gray-800 mt-4">{item.title.substring(0, 18)} ...</h3>
                                    <p class="text-sm text-gray-600 mt-1">{item.category}</p>
                                    <p class="text-xl font-semibold text-gray-900 mt-2">$ {item.price}</p>
                                    <div class="mt-4 flex justify-between items-center">
                                        <button
                                            onClick={() => addToCart(item)}
                                            class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Add to Cart</button>
                                        <button
                                            onClick={() => orderNow(item)}
                                            class="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">Order Now</button>
                                    </div>
                                </Link>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
