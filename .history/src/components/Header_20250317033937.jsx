import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <header>
                <div className="ar-headerContainer">
                    <div className="ar-headerLogo">
                        <Link href="/">
                            <img src="https://kanerdul.com/public/66dee4efb04ac.jpg" alt="header-logo" />
                        </Link>
                    </div>
                    <div className="ar-Search">
                        <input type="search" placeholder="search product......" />
                        <div className="ar-search-icon"><a href=""><i className="fa-solid fa-magnifying-glass"></i></a></div>
                    </div>

                    <div className="ar-contact">
                        <div className="contactPhone">
                            <div className="ar-contactIcon">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="ar-contact-container">
                                <p>
                                    অর্ডার করতে কল করুন
                                </p>
                                <span> 0130000000</span>
                            </div>
                        </div>
                        <div className="cart-container">
                            <div className="ar-cart">
                                <div className="cart-icon">
                                    <Link to="/cart">
                                        <i className="fa-solid fa-bag-shopping"></i>
                                        {/* {cart.length > 0 && <span className="cart-count">{cart.length}</span>} */}
                                    </Link>
                                </div>
                            </div>
                            <div className="ar-cart">
                                <a href="account-page.html">
                                    <i className="fa-solid fa-circle-user"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </header>
        </div>
    );
};

export default Header;