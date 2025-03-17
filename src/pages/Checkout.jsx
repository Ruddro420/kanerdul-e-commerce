import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
    const { cart, totalPrice ,removeFromCart} = useContext(CartContext);
    return (
        <>
            {
                cart.length == 0 ? (
                    <>
                        <div style={{ textAlign: 'center' }}>
                            <h2>Your cart is empty</h2>
                            <p>Looks like you haven't added any items to the cart yet.</p>
                        </div>
                    </>)
                    : <section className='checkout-container'>
                        {/* Product Details */}
                        <div class="sh-products-buy-calculation-section">
                            <table>
                                <thead>
                                    <tr>
                                        <th class="sh-product">Product</th>
                                        <th class="text-center">Price</th>
                                        <th class="text-center">Quantity</th>
                                        <th class="text-center">Total</th>
                                    </tr>
                                </thead>
                                <tbody style={{ textAlign: 'center' }}>
                                    {
                                        cart.map(item => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td class="sh-image-section">
                                                            <p>{item.title}</p>
                                                        </td>
                                                        <td>
                                                            <p>{item.price} টাকা</p>
                                                        </td>
                                                        <td>
                                                            <div class="sh-sub-sec">
                                                                <div class="">
                                                                    <p>{item.quantity}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p>{item.price * item.quantity} টাকা</p>
                                                        </td>
                                                        <td>
                                                            <span className="remove" onClick={() => removeFromCart(item.id)}>&#10005;</span>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }

                                </tbody> <br />
                                <tfoot className='price-footer'>
                                    <tr>
                                        <td>Total Amount</td>
                                        <td></td>
                                        <td></td>
                                        <td>{totalPrice} টাকা</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        {/* Order Details */}
                        <div class="ar-orderContainer">
                            <div class="ar-container">
                                <div class="ar-orderFrom">
                                    <div class="ar-orderAddress">
                                        <p>অর্ডারটি কনফার্ম করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার, লিখে <span style={{ color: "red" }}>অর্ডার
                                            কনফার্ম করুন</span><br /> বাটনে ক্লিক করুন</p>
                                    </div>
                                    <div class="ar-inputContainer">
                                        <div class="name">
                                            <label for="">আপনার নাম *</label><br />
                                            <input type="text" placeholder="আপনার নাম " />
                                        </div>
                                        <div class="ar-mobailNo">
                                            <label for="">আপনার মোবাইল নম্বর *</label><br />
                                            <input type="text" placeholder="আপনার মোবাইল নম্বর *" />
                                        </div>
                                        <div class="ar-mobailNo">
                                            <label for="">আপনার ইমেইল এড্রেস *</label><br />
                                            <input type="text" placeholder="আপনার ইমেইল এড্রেস *" />
                                        </div>
                                        <div class="ar-address">
                                            <label for="">আপনার সম্পূর্ণ ঠিকানা*</label><br />
                                            <input type="text" placeholder="আপনার সম্পূর্ণ ঠিকানা*" />
                                        </div>
                                    </div>
                                    <div class="ar-courier-charges">
                                        <label for="">কুরিয়ার চার্জ *</label><br />

                                        <div class="ar-checkBox">
                                            <input type="checkbox" name="" id="" placeholder=" " /><span>ঢাকার বাহিরে 130 টাকা</span>
                                        </div>

                                        <div class="ar-checkBox">
                                            <input type="checkbox" name="" id="" placeholder=" " /><span>ঢাকার ভিতর 60 টাকা</span>
                                        </div>
                                    </div>
                                    <div class="ar-orderBtn">
                                        <button> অর্ডার কনফার্ম করুন</button>
                                    </div>
                                </div>
                                <br />
                            </div>
                        </div>
                    </section>
            }
        </>
    );
};

export default Checkout;