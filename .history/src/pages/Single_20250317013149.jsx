import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RelatedProduct from '../components/RelatedProduct';

const Single = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [relatedLoading, setRelatedLoading] = useState(true);

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
                    <div className="OrderProcessSection">
                        <div className="orderProcessContainer">
                            <div className="productImage">
                                <img src={data.image} alt={data.title} />
                            </div>
                            <div className="ar-productOrder">
                                <div className="for-contact">
                                    <h1>{data.title}</h1>
                                    <strong>৳ {data.price}</strong>&nbsp; <del>৳ 890</del>
                                </div>
                                <div className="orderBtn">
                                    <div className="orderBuy">
                                        <a
                                            style={{ backgroundColor: '#DB991B', padding: '10px 20px', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}
                                            href="order-now.html"
                                        >
                                            অর্ডার করুন
                                        </a>
                                        <a
                                            style={{ backgroundColor: '#198754', padding: '10px 20px', color: '#fff', textDecoration: 'none', borderRadius: '5px', marginLeft: '10px' }}
                                            href="order-now.html"
                                        >
                                            Buy Now
                                        </a>
                                    </div>
                                    <div className="callBtn">
                                        <button>অর্ডার করতে কল করুন: 01720415286</button>
                                    </div>
                                </div>
                                <div className="productCode">
                                    <span> <b>Code :</b> {data.id} </span>
                                </div>
                                <div className="deliveryCause">
                                    <div className="dhakaIn">
                                        <p>ঢাকায় ডেলিভারি খরচ</p>
                                        <span>৳ 60</span>
                                    </div>
                                    <hr /><br />
                                    <div className="dhakaOut">
                                        <p>ঢাকার বাইরের ডেলিভারি খরচ</p>
                                        <span>৳ 130</span>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="discriptionContainer">
                        <div className="descriptionSection">
                            <div className="discription">
                                <h1>Description</h1>
                                <div className="mainDescription">
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                    
                    {/* Related Products */}
                    <RelatedProduct products={relatedProducts} loading={relatedLoading} />
                </div>
            )}
        </>
    );
};

export default Single;
