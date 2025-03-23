/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Loader from "./Loader";

const Header = ({ menuopen, setMenuOpen }) => {
  const { cart, user } = useContext(CartContext);
  // const [menuopen, setMenuOpen] = useState(false);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Fetch data
  const loadData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/categories`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // console.log(data);

  return (
    <div className="fixed top-0 z-50 w-full" onClick={() => (menuopen ? setMenuOpen(false) : "")}>
      {loading ? (
        <Loader />
      ) : (
        <header>
          <div class="bg-gray-100 border-b border-gray-200">
            <div class="px-4 mx-auto sm:px-6 lg:px-8">
              <nav class="relative flex items-center justify-between h-16 lg:h-20">
                <div class="">
                  <div class="flex-shrink-0">
                    <Link to="/" title="" class="flex">
                      <img
                        class="w-auto h-8 lg:h-10"
                        src="/gadgetextreme logo.png"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>

                <div class="hidden lg:flex lg:items-center lg:space-x-7">
                  {data[0]?.map((item) => {
                    return (
                      <>
                        <Link
                          key={item.id}
                          style={{ textTransform: "capitalize" }}
                          to={`/category/${item.name}`}
                          class="text-base font-medium text-black"
                        >
                          {item.name}
                        </Link>
                      </>
                    );
                  })}
                </div>

                <div class="flex lg:hidden lg:items-center lg:space-x-7 justify-center mx-auto">
                  <h1 className="text-black text-lg font-bold">Gadgetex</h1>
                </div>
                

                <Link
                  to={"/cart"}
                  type="button"
                  class="flex items-center justify-center ml-auto text-white bg-black rounded-full w-9 h-9 lg:hidden relative"
                >
                  <div class="t-0 absolute left-5 bottom-5">
                    <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                      {cart.length > 0 ? (
                        <span className="cart-count">{cart.length}</span>
                      ) : (
                        <span className="cart-count">0</span>
                      )}
                    </p>
                  </div>
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </Link>

                <button
                  type="button"
                  onClick={() => setMenuOpen(!menuopen)}
                  class="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                >
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>

                <div class="hidden lg:flex lg:items-center lg:space-x-10">
                  {user?.user.uid ? (
                    <div class="relative">
                      <Link to="/account">
                        <img
                          class="w-10 h-10 rounded-full"
                          src="/profile.png"
                          alt=""
                        />
                        <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                      </Link>
                    </div>
                  ) : (
                    <Link
                      to="/login"
                      title=""
                      class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                    >
                      {" "}
                      Sign in{" "}
                    </Link>
                  )}

                  {/*  <Link to="/register" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Sign up </Link>

                                <Link to="/login" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Sign in </Link> */}

                  <Link
                    to="/cart"
                    class=" bg-gray-100 flex justify-center items-center mt-[-12px]"
                  >
                    <div class="relative">
                      <div class="t-0 absolute left-3">
                        <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                          {cart.length > 0 ? (
                            <span className="cart-count">{cart.length}</span>
                          ) : (
                            <span className="cart-count">0</span>
                          )}
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="file: mt-4 h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          <nav
            class={`py-4 bg-white lg:hidden ${
              menuopen === true ? "block" : "hidden"
            }`}
          >
            <div class="px-4 mx-auto sm:px-6 lg:px-8">
              <div class="flex items-center justify-between">
                <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                  Menu
                </p>

                <button
                  onClick={() => setMenuOpen(!menuopen)}
                  type="button"
                  class="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div class="mt-6">
                <div class="flex flex-col space-y-2">
                  {data[0].map((item) => {
                    return (
                      <>
                        <Link
                          style={{ textTransform: "capitalize" }}
                          to={`/category/${item.name}`}
                          class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                        >
                          {item.name}
                        </Link>
                      </>
                    );
                  })}
                </div>

                <hr class="my-4 border-gray-200" />

                <div class="flex flex-col space-y-2">
                  {user?.user.uid ? (
                    <Link
                      to="/account"
                      title=""
                      class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                    >
                      {" "}
                      Account{" "}
                    </Link>
                  ) : (
                    <>
                      <Link
                        to="/register"
                        title=""
                        class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                      >
                        {" "}
                        Sign up{" "}
                      </Link>

                      <Link
                        to="/login"
                        title=""
                        class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                      >
                        {" "}
                        Sign in{" "}
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </header>
      )}
    </div>
  );
};

export default Header;
