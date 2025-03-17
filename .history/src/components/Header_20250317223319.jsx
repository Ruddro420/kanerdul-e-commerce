import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {
    const { cart } = useContext(CartContext);

    return (
        <div>

            <header>
                <div class="bg-gray-100 border-b border-gray-200">
                    <div class="px-4 mx-auto sm:px-6 lg:px-8">
                        <nav class="relative flex items-center justify-between h-16 lg:h-20">
                            <div class="hidden lg:flex lg:items-center lg:space-x-10">
                                <a href="#" title="" class="text-base font-medium text-black"> Features </a>

                                <a href="#" title="" class="text-base font-medium text-black"> Solutions </a>

                                <a href="#" title="" class="text-base font-medium text-black"> Resources </a>

                                <a href="#" title="" class="text-base font-medium text-black"> Pricing </a>
                            </div>

                            <div class="lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2">
                                <div class="flex-shrink-0">
                                    <Link to="/" title="" class="flex">
                                        <img class="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />
                                    </Link>
                                </div>
                            </div>

                            <button type="button" class="flex items-center justify-center ml-auto text-white bg-black rounded-full w-9 h-9 lg:hidden">
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </button>

                            <button type="button" class="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>

                            <div class="hidden lg:flex lg:items-center lg:space-x-10">
                                <a href="#" title="" class="text-base font-medium text-black"> Sign up </a>

                                <a href="#" title="" class="text-base font-medium text-black"> Sign in </a>

                                <div class=" bg-gray-100 flex justify-center items-center">
                                    <div class="relative">
                                        <div class="t-0 absolute left-3">
                                            <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                                                {cart.length > 0 ? <span className="cart-count">{cart.length}</span> : <span className="cart-count">0</span>}
                                            </p>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-6 w-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>


                <nav class="py-4 bg-white lg:hidden">
                    <div class="px-4 mx-auto sm:px-6 lg:px-8">
                        <div class="flex items-center justify-between">
                            <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">Menu</p>

                            <button type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div class="mt-6">
                            <div class="flex flex-col space-y-2">
                                <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Features </a>

                                <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Solutions </a>

                                <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Resources </a>

                                <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Pricing </a>
                            </div>

                            <hr class="my-4 border-gray-200" />

                            <div class="flex flex-col space-y-2">
                                <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Sign up </a>

                                <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Sign in </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            {/*  <header>
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
                                        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
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
            </header> */}
        </div>
    );
};

export default Header;