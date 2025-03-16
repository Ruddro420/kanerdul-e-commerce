import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart } = useContext(CartContext);
    console.log(cart);

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
                                            <p class="item-name">Cotton T-shirt</p>
                                        </div>
                                        <div class="quantity">
                                            <button>-</button>
                                            <span>1</span>
                                            <button>+</button>
                                        </div>
                                        <p class="price">&euro; 44.00</p>
                                        <span class="remove">&#10005;</span>
                                    </div>
                                </>
                            )
                        })
                    }

                    <div class="cart-item">
                        <img src="https://i.imgur.com/ba3tvGm.jpg" alt="T-shirt" />
                        <div class="item-details">
                            <p class="item-category">Shirt</p>
                            <p class="item-name">Cotton T-shirt</p>
                        </div>
                        <div class="quantity">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                        <p class="price">&euro; 44.00</p>
                        <span class="remove">&#10005;</span>
                    </div>
                </div>

                <div class="column button-cart">
                    <h2>Summary</h2><br />
                    <p>ITEMS: 2</p> <br />
                    <p>Total: &euro; 88.00</p> <br />
                    {/* <label for="shipping">Shipping:</label>
                    <select id="shipping">
                        <option>Standard - &euro;5.00</option>
                    </select>
                    <input type="text" placeholder="Enter your code" /> */}
                    <p><strong>Total Price: &euro; 93.00</strong></p> <br />
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;