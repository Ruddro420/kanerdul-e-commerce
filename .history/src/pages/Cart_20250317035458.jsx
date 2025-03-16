import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cart, totalPrice, removeFromCart } = useContext(CartContext);

    return (
        <div className="cart-section">
            {
                cart.length === 0 ? (
                    <div className="empty-cart">
                        <h2>Your cart is empty</h2>
                        <p>Looks like you haven't added any items to the cart yet.</p>
                    </div>
                ) : <div className="container">
                    <div className="column">
                        <h2>Shopping Cart</h2>
                        {cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} />
                                <div className="item-details">
                                    <p className="item-category">{item.category}</p>
                                    <p className="item-name">{item.title}</p>
                                </div>
                                <div className="quantity">
                                    <button>-</button>
                                    <span>{item.quantity}</span>
                                    <button>+</button>
                                </div>
                                <p className="price">$ {item.quantity * item.price}</p>
                                {/* ✅ Remove item on click */}
                                <span className="remove" onClick={() => removeFromCart(item.id)}>&#10005;</span>
                            </div>
                        ))}
                    </div>

                    <div className="column button-cart">
                        <h2>Summary</h2><br />
                        <p>ITEMS: {cart.length}</p> <br />
                        <p>Total: $ {totalPrice.toFixed(2)}</p> <br />
                        <p><strong>Total Price: $ {totalPrice.toFixed(2)}</strong></p> <br />
                        <button>Checkout</button>
                    </div>
                </div>
            }

        </div>
    );
};

export default Cart;
