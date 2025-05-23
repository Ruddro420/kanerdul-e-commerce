import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RelatedProduct = ({products}) => {
    return (
        <div>
            <div style={{ marginTop: '0px' }}>
            <div class="sh-all-productAndSee-text-section">
                <div class="sh-all-productAndSee-text-container">
                    <h3>Related Produts</h3>
                </div>
            </div>
            <div class="sh-daimond-section">
                <div class="sh-daimond-product-container">
                    {loading ? (
                        // Fullscreen loader
                        <div className="loader-container">
                            <div className="spinner"></div>
                            <p>Loading, please wait...</p>
                        </div>
                    ) : (
                        // Website content
                        products.map(item => {
                            return (
                                <>
                                    <div key={item.id} class="sh-daimond-container">
                                        <div class="sh-daimond-product">
                                            <Link to={`/single/${item.id}`}><img src={item.image} alt="" /></Link>
                                        </div>
                                        <div class="sh-product-discount-price">-38%</div>
                                        <div class="sh-product-details">
                                            <div class="sh-product-name">
                                                <Link to={`/single/${item.id}`}>
                                                    <h4>{item.title}</h4>
                                                </Link>
                                            </div>

                                            <div class="sh-products-prices">
                                                <div class="sh-less-price">
                                                    <p>৳ {item.price}</p>
                                                </div>
                                                <div class="sh-regular-price">
                                                    <p>৳ 2,500</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="sh-order-korun-button">
                                            <button type="button" name="button" class="sh-btn-style sh-btn-cartbg"><a href="#"><i
                                                class="fa-solid fa-cart-plus"></i></a></button>
                                            <button type="button" name="button" class="sh-btn-style sh-btn-orderbg"><a
                                                href="/html/order-now.html">অর্ডার করুন</a></button>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default RelatedProduct;