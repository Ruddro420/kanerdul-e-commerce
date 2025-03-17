import React from 'react';

const Account = () => {
    return (
        <div style={{background:'#F5F6F7',paddingTop:'50px',paddingBottom:'50px'}}>
            {/* Personal Details */}
            <div class="sh-account-second-section">
                <div class="sh-acount-second-container">
                    <div class="sh-editable-section">
                        <div class="sh-second-account-right-items">
                            <div class="sh-personal-edit-box">
                                <h1>Personal Information</h1>
                            </div>
                            <hr />
                            <div class="sh-details-section">

                                <div class="sh-name-container">
                                    <p><b>Name</b></p>
                                    <p>Subas Hembrom</p>
                                </div>
                                <div class="sh-name-container">
                                    <p><b>Address</b></p>
                                    <p>Rangpur, Tajhat, UCEP Technical School
                                        Rangpur - Rangpur - Mordern</p>
                                </div>
                                <div class="sh-name-container">
                                    <p><b>G-mail</b></p>
                                    <p>subashebrom@gmail.com</p>
                                </div>
                            </div>
                            <hr />
                            <div class="sh-details-section">
                                <div class="sh-name-container">
                                    <p><b>Phone Number</b></p>
                                    <p>+880 01315-291293</p>
                                </div>
                                <div class="sh-name-container">
                                </div>
                                <div class="sh-name-container">
                                </div>
                            </div>
                        </div>
                        <div class="sh-second-account-right-items-two">
                            <div class="sh-personal-edit-box">
                                <h1>Personal Information</h1>
                                <button onclick="saveDetails()" type="button" name="button"
                                    class="sh-btn-style sh-save-btn-background">Save</button>
                            </div>
                            <hr />
                            <div class="sh-details-section">
                                <div class="sh-name-container">
                                    <label for="text">Name</label>
                                    <input type="text" placeholder="Subas Hebrom" value="" name="" id="" />
                                </div>
                                <div class="sh-name-container">
                                    <label for="text">Address</label>
                                    <input type="text" placeholder="Rangpur, Tajhat, UCEP Technical School
                            Rangpur - Rangpur - Mordern" value="" name="" id="" />
                                </div>
                                <div class="sh-name-container">
                                    <label for="text">Gmail</label>
                                    <input type="email" placeholder="suashebrom@gmail.com" value="" name="" id="" />
                                </div>
                            </div>
                            <hr />
                            <div class="sh-details-section">

                                <div class="sh-name-container">
                                    <label for="text">Phone Number</label>
                                    <input type="text" placeholder="+880 1315-291293" value="" name="" id="" />
                                </div>
                                <div class="sh-name-container">
                                </div>
                                <div class="sh-name-container">
                                </div>
                            </div>
                        </div>
                        <div class="sh-order-account-right-items-two">
                            <div class="sh-order-menu-items">
                                <ul>
                                    <li onclick="showDitalsOrderedProducts()"><a href="#">My Orders</a></li>
                                    <li><a href="#">My Returns & Cancellations</a></li>
                                    <li onclick="showWishlist()"><a href="#">My Wishlist Stores</a></li>
                                    <li onclick="showReview()"><a href="#">My Reviews</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="sh-ordered-details">
                            <div class="sh-Myorder-account-right-items-two">
                                <div class="sh-order-sub-items">
                                    <ul>
                                        <li><a href="#">All</a></li>
                                        <li><a href="#">To Pay</a></li>
                                        <li><a href="#">To Ship</a></li>
                                        <li><a href="#">To Receive</a></li>
                                    </ul>
                                    <div class="sh-hidefor-mobile">
                                        <ul>
                                            <li>Show: <select name="" id="">
                                                <option value="1" name="All Orders">All Orders</option>
                                                <option value="1" name="All Orders">Please include date</option>

                                            </select></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="sh-My-order-account-right-items-two">
                                <div class="sh-order-product-name">
                                    <h3>Lavender Crystal</h3>
                                    <p>Completed</p>
                                </div>
                                <hr />

                                <div class="sh-ordered-products">
                                    <table>
                                        <tr>
                                            <td class="sh-ordered-image">
                                                <img src="/img/trendy 05.jpg" alt="" />
                                            </td>
                                            <td class="sh-ordered-product-name">
                                                <p>Lavender Crystal Bead Drop Earrings -150</p>
                                            </td>
                                            <td class="sh-ordered-product-price">
                                                <p>৳ 359</p>
                                            </td>
                                            <td class="sh-ordered-qty">
                                                <p>Qty: 1</p>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="sh-wishlist-details">
                            <div class="sh-Myorder-account-right-items-two">
                                <div class="sh-order-sub-items">
                                    <ul>
                                        <li onclick="showWishlistTwo()"><a href="#">My Wishlist(1)</a></li>
                                        <li class="sh-past-purchase" onclick="showPastPurchase()"><a href="#">Past Purchase</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sh-wishlist-box">

                                <div class="sh-My-order-account-right-items-two">
                                    <div class="sh-order-product-name">
                                        <h3>Bd Fashion</h3>
                                    </div>
                                    <hr />

                                    <div class="sh-ordered-products">
                                        <table>
                                            <tr>
                                                <td class="sh-ordered-image">
                                                    <img src="/img/trendy 05.jpg" alt="" />
                                                </td>
                                                <td class="sh-ordered-product-name">
                                                    <p>Lavender Crystal Bead Drop Earrings -150</p>
                                                </td>
                                                <td class="sh-ordered-product-price">
                                                    <p>৳ 359</p>
                                                </td>
                                                <td class="sh-ordered-qty">
                                                    <button type="button" name="button" class="sh-wish-to-add-btn"><i
                                                        class="fa-solid fa-cart-plus"></i></button>
                                                </td>
                                                <td class="sh-wish-trahs-icon"><i class="fa-solid fa-trash"></i></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="sh-past-ordered-details">

                            <div class="sh-My-order-account-right-items-two">
                                <div class="sh-order-product-name">
                                    <h3>Lavender Crystal</h3>
                                    <p>Purchased On</p>
                                </div>
                                <hr />
                                <div class="sh-ordered-products">
                                    <table>
                                        <tr>
                                            <td class="sh-ordered-image">
                                                <img src="/img/trendy 05.jpg" alt="" />
                                            </td>
                                            <td class="sh-ordered-product-name">
                                                <p>Lavender Crystal Bead Drop Earrings -150</p>
                                            </td>
                                            <td class="sh-ordered-product-price">
                                                <p>৳ 359</p>
                                            </td>
                                            <td class="sh-ordered-qty">
                                                <p>Qty: 1</p>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="sh-reviewed-details">
                            <div class="sh-My-order-account-right-items-two">
                                <div class="sh-order-product-name">
                                    <h3>Lavender Crystal</h3>
                                    <p>Purchased On</p>
                                </div>
                                <hr />

                                <div class="sh-ordered-products">
                                    <table>
                                        <tr>
                                            <td class="sh-ordered-image">
                                                <img src="/img/trendy 05.jpg" alt="" />
                                            </td>
                                            <td class="sh-reviewd-product-name">
                                                <p>Lavender Crystal Bead Drop Earrings -150</p>
                                            </td>
                                            <td class="sh-horizontal-line"></td>
                                            <td class="sh-review-box">
                                                <p>Sold by</p>
                                                <button type="button" name="button" class="sh-review-btn">Review</button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="sh-sing-up-section">
                <div class="sh-sign-up">
                    <ul>
                        <li>
                            <h1>Sign up/Login</h1>
                        </li>
                        <li onclick="hideSignup()"><a href="#"><i class="fa-solid fa-xmark"></i></a></li>
                    </ul>
                </div>
                <hr />

                <div class="sh-sign-log-info">
                    <div class="sh-sl-details">
                        <label for="text">Name/E-mail</label>
                        <input type="text" placeholder="Number or Email" name="" id="" />
                    </div>
                    <div class="sh-sl-details">
                        <label for="text">Password</label>
                        <input type="password" placeholder="xxxxxxxx" name="" id="" />
                    </div>
                    <div class="sh-sl-details-policy">
                        <input type="checkbox" />
                        <p>By creating and/or using your account, you agree to our Terms of Use and Privacy Policy.</p>
                    </div>
                    <div class="sh-sl-details-account">
                        <button onclick="showOtp()" type="button" name="button" class="sh-send-code">Send Via Code SMS</button>
                    </div>
                    <div class="sh-sl-details-account">
                        <p>Already have an account?<a onclick="showLoginPage()" href="#">Log in Now</a></p>
                    </div>
                    <div class="sh-sl-details-account">
                        <p><span>Or, sign up with</span></p>
                    </div>
                    <div class="sh-sl-details-google-facebook">
                        <ul>
                            <li><i class="fa-brands fa-google"><a href="#">Google</a></i></li>
                            <li><i class="fa-brands fa-facebook"><a href="#">Facebook</a></i></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="sh-otp-section">
                <div class="sh-sign-up">
                    <ul>
                        <li>
                            <h1>Sign up/Login</h1>
                        </li>
                        <li onclick="hideotp()"><a href="#"><i class="fa-solid fa-xmark"></i></a></li>
                    </ul>
                </div>
                <hr />

                <div class="sh-otp-email-phone">
                    <i class="fa-solid fa-envelope"></i>
                    <p>Email or Phone Number</p>
                </div>
                <div class="sh-otp-text">
                    <p>OTP sent to your email. Please enter OTP bellow.</p>
                </div>
                <div class="sh-otp-number">
                    <input type="text" name="" id="" />
                    <div class="sh-lock-icon">
                        <i class="fa-solid fa-lock"></i>
                    </div>
                </div>
                <div class="sh-remember">
                    <div class="sh-remember-text">
                        <label for="remember"><input type="checkbox" name="otp" id="remember" />Remember Me</label>
                        <p>Resend OTP</p>
                    </div>
                </div>
                <div class="sh-otp-login">
                    <button type="button" name="button">Log In</button>
                </div>
                <div class="sh-sl-details-google-facebook">
                    <ul>
                        <li><i class="fa-brands fa-google"><a href="#">Google</a></i></li>
                        <li><i class="fa-brands fa-facebook"><a href="#">Facebook</a></i></li>
                    </ul>
                </div>
                <div class="sh-margin"></div>
            </div>

            <div class="sh-sing-up-log-section">
                <div class="sh-sign-up">
                    <ul>
                        <li>
                            <h1>Sign up/Login</h1>
                        </li>
                        <li onclick="hidelogin()"><a href="#"><i class="fa-solid fa-xmark"></i></a></li>
                    </ul>
                </div>
                <hr />

                <div class="sh-sign-log-info">
                    <div class="sh-sl-details">
                        <label for="text">Phone/E-mail</label>
                        <input type="text" placeholder="Enter your phone number or email" name="" id="" />
                    </div>
                    <div class="sh-sl-details">
                        <label for="text">Password</label>
                        <input type="password" placeholder="xxxxxxxx" name="" id="" />
                    </div>
                    <div class="sh-sl-details-forgot">
                        <p>Forgot Password</p>
                    </div>
                    <div class="sh-sl-details-account">
                        <button type="button" name="button" class="sh-send-code">LOG IN</button>
                    </div>
                    <div class="sh-sl-details-account">
                        <p>Don't have account? <a onclick="showsigUpPage()" href="#">Sign Up</a></p>
                    </div>
                    <div class="sh-sl-details-account">
                        <p><span>Or, sign up with</span></p>
                    </div>
                    <div class="sh-sl-details-google-facebook">
                        <ul>
                            <li><i class="fa-brands fa-google"><a href="#">Google</a></i></li>
                            <li><i class="fa-brands fa-facebook"><a href="#">Facebook</a></i></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;