import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cart, totalPrice, removeFromCart } = useContext(CartContext);
  return (
    <>

      <section class="bg-white py-8 antialiased">
        <form action="#" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <ol class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 sm:text-base">
            <li class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/']  sm:after:hidden">
                <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Cart
              </span>
            </li>

            <li class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/']  sm:after:hidden checkout-progress">
                <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Checkout
              </span>
            </li>

            <li class="flex shrink-0 items-center">
              <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Order summary
            </li>
          </ol>

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
                    <dd class="text-base font-medium text-gray-900 ">$8,094.00</dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500 ">Savings</dt>
                    <dd class="text-base font-medium text-green-500">0</dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500 ">Store Pickup</dt>
                    <dd class="text-base font-medium text-gray-900 ">$99</dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500 ">Tax</dt>
                    <dd class="text-base font-medium text-gray-900 ">$199</dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-bold text-gray-900 ">Total</dt>
                    <dd class="text-base font-bold text-gray-900 ">$8,392.00</dd>
                  </dl>
                </div>
              </div>

              <div class="space-y-3">
                <button type="submit" class="flex w-full items-center justify-center rounded-lg bg-[#2A59FF] px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 ">Proceed to Payment</button>

                <p class="text-sm font-normal text-gray-500 ">One or more items in your cart require an account. <a href="#" title="" class="font-medium text-primary-700 underline hover:no-underline ">Sign in or create an account now.</a>.</p>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Checkout;