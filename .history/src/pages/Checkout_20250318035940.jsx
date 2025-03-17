import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { totalPrice } = useContext(CartContext);
  // checkout if localstorage data avaiable or not users
  const checkOut = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user")); // Get logged-in user

    if (user) {
        const productDetails = JSON.parse(localStorage.getItem("cart")) || []; // Get cart data
        const order = {
            userId: user.uid, // Store user ID
            products: productDetails,
            orderDate: new Date().toISOString(),
        };

        // Store order in localStorage (or send it to the backend)
        localStorage.setItem("order", JSON.stringify(order));

        alert("Your Order is Placed Successfully");
        navigate("/order-success"); // Redirect to order success page
    } else {
        alert("Please login to place an order");
        navigate("/login"); // Redirect to login page
    }
};

  return (
    <>
      <section class="bg-white py-8 antialiased">
        <form action="#" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div class="min-w-0 flex-1 space-y-8">
              <div class="space-y-4">
                <h2 class="text-xl font-semibold text-gray-900 ">Delivery Details</h2>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 rounded-lg border border-gray-200 p-5">
                  <div>
                    <label for="your_name" class="mb-2 block text-sm font-medium text-gray-900 "> Your name * </label>
                    <input type="text" id="your_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="Bonnie Green" required />
                  </div>

                  <div>
                    <label for="your_email" class="mb-2 block text-sm font-medium text-gray-900 "> Your email* </label>
                    <input type="email" id="your_email" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 " placeholder="name@flowbite.com" required />
                  </div>
                  <div>
                    <div class="mb-2 flex items-center gap-2">
                      <label for="select-city-input-3" class="block text-sm font-medium text-gray-900 "> Address * </label>
                    </div>
                    <input type="text" id="your_email" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 " placeholder="Rangpur" required />
                  </div>

                  <div>
                    <label for="phone-input-3" class="mb-2 block text-sm font-medium text-gray-900 "> Phone Number* </label>
                    <div class="flex items-center">
                      <input type="number" id="your_email" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 " placeholder="Phone" required />
                    </div>
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <h3 class="text-xl font-semibold text-gray-900 ">Payment</h3>

                <div class="grid grid-cols-1 gap-4 md:grid-cols-1">
                  <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 ">
                    <div class="flex items-start">
                      <div class="flex h-5 items-center">
                        <input id="credit-card" aria-describedby="credit-card-text" type="radio" name="payment-method" value="" class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 " checked />
                      </div>

                      <div class="ms-4 text-sm">
                        <label for="credit-card" class="font-medium leading-none text-gray-900"> Cash On Delivery </label>
                        <p id="credit-card-text" class="mt-1 text-xs font-normal text-gray-500">Pay with your hand</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub Total */}
            <div class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md rounded-lg border border-gray-200 p-5">
              <div class="flow-root">
                <div class="-my-3 divide-y divide-gray-200 ">
                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500 ">Subtotal</dt>
                    <dd class="text-base font-medium text-gray-900 ">$ {totalPrice}</dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500 ">Savings</dt>
                    <dd class="text-base font-medium text-green-500">00</dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500 ">Store Pickup</dt>
                    <dd class="text-base font-medium text-gray-900 "> 00</dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500 ">Tax</dt>
                    <dd class="text-base font-medium text-gray-900 ">00</dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-bold text-gray-900 ">Total</dt>
                    <dd class="text-base font-bold text-gray-900 ">$ {totalPrice}</dd>
                  </dl>
                </div>
              </div>

              <div class="space-y-3">
                <button
                  onClick={checkOut}
                  type="submit" class="flex w-full items-center justify-center rounded-lg bg-[#2A59FF] px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 ">Proceed to Payment</button>

                <p class="text-sm font-normal text-gray-500 ">One or more items in your cart require an account. <Link to="/login" title="" class="font-medium text-primary-700 underline hover:no-underline ">Sign in or create an account now.</Link>.</p>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Checkout;