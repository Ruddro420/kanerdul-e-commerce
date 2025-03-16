import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [cartCount, setCartCount] = useState(0);

    // Retrieve the cart count from localStorage when the component mounts
    useEffect(() => {
        const storedCartCount = localStorage.getItem('cartItemCount');
        if (storedCartCount) {
            setCartCount(Number(storedCartCount));
        }
    }, []);
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
                                <i className="fa-solid fa-bag-shopping"></i>
                                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
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