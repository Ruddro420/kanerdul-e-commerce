import React from 'react';

const MainFooter = () => {
    return (
        <div>
            <div className="footer-bg">
                <footer className="footer">
                    <div className="footer-container">
                        <div className="footer-section">
                            <h3>Company</h3>
                            <p><a href="#">Our stores</a></p>
                            <p>+391 (0315) 2558 4593</p>
                            <p><a href="mailto:hello@domain.com">hello@domain.com</a></p>
                        </div>
                        <div className="footer-section">
                            <h3>Useful links</h3>
                            <p><a href="#">New Products</a></p>
                            <p><a href="#">Best Sellers</a></p>
                            <p><a href="#">Bundle & Save</a></p>
                            <p><a href="#">Online Gift Card</a></p>
                        </div>
                        <div className="footer-section">
                            <h3>Information</h3>
                            <p><a href="#">Contact Us</a></p>
                            <p><a href="#">Shipping FAQ</a></p>
                            <p><a href="#">Terms</a></p>
                            <p><a href="#">Privacy Policy</a></p>
                        </div>
                        <div className="sm-hide-for-mobile">
                            <div className="footer-section">
                                <h3>Good emails.</h3>
                                <p>Enter your email below to be the first to know about new collections <br /> and product
                                    launches.
                                </p>
                                <div className="sm-email-section">
                                    <form action="#" className="email-form">
                                        <input type="email" placeholder="Enter your email address" required />
                                    </form>
                                    <button type="submit">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-bottom-content">
                            <div className="footer-left-text">
                                <h3>
                                    © 2025 Oussama Anedam
                                </h3>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default MainFooter;