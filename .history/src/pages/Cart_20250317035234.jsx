import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, totalPrice } = useContext(CartContext);

    return (
        <div class="cart-section">
            <div class="container">
                <div class="column">
                    <h2>Shopping Cart</h2>
                    {
                        cart.map(item => {
                            return (
                                <>
                                    <div class="cart-item">
                                        <img src={item.image} alt="T-shirt" />
                                        <div class="item-details">
                                            <p class="item-category">{item.category}</p>
                                            <p class="item-name">{item.title}</p>
                                        </div>
                                        <div class="quantity">
                                            <button>-</button>
                                            <span>{item.quantity}</span>
                                            <button>+</button>
                                        </div>
                                        <p class="price">$ {item.quantity * item.price}</p>
                                        <span class="remove">&#10005;</span>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

                <div class="column button-cart">
                    <h2>Summary</h2><br />
                    <p>ITEMS: {cart.length}</p> <br />
                    <p>Total: $ {totalPrice.toFixed(2)}</p> <br />
                    {/* <label for="shipping">Shipping:</label>
                    <select id="shipping">
                        <option>Standard - &euro;5.00</option>
                    </select>
                    <input type="text" placeholder="Enter your code" /> */}
                    <p><strong>Total Price: $ {totalPrice.toFixed(2)}</strong></p> <br />
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;