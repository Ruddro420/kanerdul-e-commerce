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
    }, [id]);

    return (
        <>
            {loading ? (
                <div className="loader-container">
                    <div className="spinner"></div>
                    <p>Loading product details...</p>
                </div>
            ) : (
                <div>
                    <div className="bg-gray-100 py-8">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col md:flex-row -mx-4">
                                <div className="md:flex-1 px-4">
                                    <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                                        <img className="w-full h-full" src={data.image} alt="Product" />
                                    </div>
                                    <div className="flex -mx-2 mb-4">
                                        <div className="w-1/2 px-2">
                                            <button onClick={() => addToCart(data)} className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 cursor-pointer">Add to Cart</button>
                                        </div>
                                        <div className="w-1/2 px-2">
                                            <button onClick={() => orderNow(data)} className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300 cursor-pointer">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:flex-1 px-4">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{data.title}</h2>
                                    <p className="text-gray-600 text-sm mb-4">{data.category}</p>
                                    <div className="flex mb-4">
                                        <div className="mr-4">
                                            <span className="font-bold text-gray-700">Price: </span>
                                            <span className="text-gray-600">$ {data.price}</span>
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-700">Availability: </span>
                                            <span className="text-gray-600">In Stock</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="font-bold text-gray-700">Product Description:</span>
                                        <p className="text-gray-600 text-sm mt-2">{data.description}</p>
                                    </div>
                                    <div className="flex -mx-2 mb-4 pt-8">
                                        <div className="w-1/2 px-2">
                                            <button onClick={() => addToCart(data)} className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 cursor-pointer">Add to Cart</button>
                                        </div>
                                        <div className="w-1/2 px-2">
                                            <button onClick={() => orderNow(data)} className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300 cursor-pointer">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <RelatedProduct products={relatedProducts} loading={relatedLoading} />
                </div>
            )}
        </>
    );
};

export default Single;