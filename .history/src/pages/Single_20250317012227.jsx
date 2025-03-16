import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Single = () => {
    // get id from url
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // fetch data
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const loadData = async () => {
        try {
            const response = await fetch(`${BASE_URL}/products/${id}`);
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
        <>
            {
                loading ? (
                    // Fullscreen loader
                    <div className="loader-container" >
                        <div className="spinner"></div>
                        <p>Loading, please wait...</p>
                    </div >
                ) : (
                    <div>
                        <div class="OrderProcessSection">
                            <div class="orderProcessContainer">
                                <div class="productImage">
                                    <img src={data.image} alt="" />
                                </div>
                                <div class="ar-productOrder">
                                    <div class="for-contact">
                                        <h1>
                                           {data.title}
                                        </h1>
                                        <strong>৳ {data.price}</strong>&nbsp; <del>৳ 890</del>
                                    </div>
                                    <div class="orderBtn">
                                        <div class="orderBuy">
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
                                        <div class="callBtn">
                                            <button>অর্ডার করতে কল করুন:
                                                01720415286</button>
                                        </div>
                                    </div>
                                    <div class="productCode">
                                        <span> <b>Code :</b> {data.id} </span>
                                    </div>
                                    <div class="deliveryCause">
                                        <div class="dhakaIn">
                                            <p>
                                                ঢাকায় ডেলিভারি খরচ
                                            </p>
                                            <span>
                                                ৳ 60
                                            </span>
                                        </div>
                                        <hr /> <br />
                                        <div class="dhakaOut">
                                            <p>
                                                ঢাকার বাইরের ডেলিভারি খরচ
                                            </p>
                                            <span>
                                                ৳ 130
                                            </span>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="discriptionContainer">
                            <div class="descriptionSection">
                                <div class="discription">
                                    <h1>Discription</h1>
                                    <div class="mainDescription">
                                       <p>{data.description}</p>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Single;