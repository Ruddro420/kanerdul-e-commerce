import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import RelatedProduct from "../components/RelatedProduct";
import Alert from "../components/Alert";

const Cart = () => {
    const { cart, totalPrice, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

    return (
        <>
            <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                {
                    cart.length == 0 ? <Alert />
                        : <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
                            <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

                            <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                                <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                                    <div class="space-y-6">
                                        {
                                            cart.map(item => {
                                                return (
                                                    <>
                                                        <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                                            <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                                                <a href="#" class="shrink-0 md:order-1">
                                                                    <img class="h-20 w-20 dark:hidden" src={item.image} alt="imac image" />
                                                                    <img class="hidden h-20 w-20 dark:block" src={item.image} alt="imac image" />
                                                                </a>

                                                                <label for="counter-input" class="sr-only">Choose quantity:</label>
                                                                <div class="flex items-center justify-between md:order-3 md:justify-end">
                                                                    <div class="flex items-center">
                                                                        <button
                                                                            onClick={() => decreaseQuantity(item.id)}
                                                                            type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="cursor-pointer inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                                            <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                                                            </svg>
                                                                        </button>
                                                                        <input type="text" id="counter-input" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value={item.quantity} disabled />
                                                                        <button
                                                                            onClick={() => increaseQuantity(item.id)}
                                                                            type="button" id="increment-button" data-input-counter-increment="counter-input" class="cursor-pointer inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                                            <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                    <div class="text-end md:order-4 md:w-32">
                                                                        <p class="text-base font-bold text-gray-900 dark:text-white">$ {(item.quantity * item.price).toFixed(2)}</p>
                                                                    </div>
                                                                </div>

                                                                <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                                    <a href="#" class="text-base font-medium text-gray-900 hover:underline dark:text-white">{item.title}</a>

                                                                    <div class="flex items-center gap-4">
                                                                        <button
                                                                            onClick={() => removeFromCart(item.id)}
                                                                            type="button" class="cursor-pointer mt-4 inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                                                            <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                                                            </svg>
                                                                            Remove
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                                    <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                        <p class="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

                                        <div class="space-y-4">
                                            <div class="space-y-2">
                                                <dl class="flex items-center justify-between gap-4">
                                                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                                                    <dd class="text-base font-medium text-gray-900 dark:text-white">$ {totalPrice.toFixed(2)}</dd>
                                                </dl>

                                                <dl class="flex items-center justify-between gap-4">
                                                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                                                    <dd class="text-base font-medium text-green-600">00</dd>
                                                </dl>

                                                <dl class="flex items-center justify-between gap-4">
                                                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                                                    <dd class="text-base font-medium text-gray-900 dark:text-white">00</dd>
                                                </dl>

                                                <dl class="flex items-center justify-between gap-4">
                                                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                                                    <dd class="text-base font-medium text-gray-900 dark:text-white">00</dd>
                                                </dl>
                                            </div>

                                            <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                                <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                                <dd class="text-base font-bold text-gray-900 dark:text-white">$ {totalPrice.toFixed(2)}</dd>
                                            </dl>
                                        </div>

                                        <Link to="/checkout" class="flex w-full items-center justify-center rounded-lg bg-[#2A59FF] px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Checkout</Link>

                                        <div class="flex items-center justify-center gap-2">
                                            <span class="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                                            <Link to="/" title="" class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                                                Continue Shopping
                                                <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }

            </section>

        </>



        // <div className="cart-section">
        //     {cart.length === 0 ? (
        //         <div className="empty-cart">
        //             <h2>Your cart is empty</h2>
        //             <p>Looks like you haven't added any items to the cart yet.</p>
        //         </div>
        //     ) : (
        //         <div className="container">
        //             <div className="column">
        //                 <h2>Shopping Cart</h2>
        //                 {cart.map(item => (
        //                     <div key={item.id} className="cart-item">
        //                         <img src={item.image} alt={item.title} />
        //                         <div className="item-details">
        //                             <p className="item-category">{item.category}</p>
        //                             <p className="item-name">{item.title}</p>
        //                         </div>
        //                         <div className="quantity">
        //                             <button onClick={() => decreaseQuantity(item.id)}>-</button>
        //                             <span>{item.quantity}</span>
        //                             <button onClick={() => increaseQuantity(item.id)}>+</button>
        //                         </div>
        //                         <p className="price">$ {(item.quantity * item.price).toFixed(2)}</p>
        //                         <span className="remove" onClick={() => removeFromCart(item.id)}>&#10005;</span>
        //                     </div>
        //                 ))}
        //             </div>

        //             <div className="column button-cart">
        //                 <h2>Summary</h2><br />
        //                 <p>ITEMS: {cart.length}</p> <br />
        //                 <p>Total: $ {totalPrice.toFixed(2)}</p> <br />
        //                 <p><strong>Total Price: $ {totalPrice.toFixed(2)}</strong></p> <br />
        //                 <Link className="button" to='/checkout'>Checkout</Link>
        //             </div>
        //         </div>
        //     )}
        // </div>
    );
};

export default Cart;
