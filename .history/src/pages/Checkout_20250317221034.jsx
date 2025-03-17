import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
    const { cart, totalPrice ,removeFromCart} = useContext(CartContext);
    return (
        <>

<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <form action="#" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <ol class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
      <li class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
        <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
          <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Cart
        </span>
      </li>

      <li class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
        <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden checkout-progress">
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
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Delivery Details</h2>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 rounded-lg border border-gray-200 p-5">
            <div>
              <label for="your_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your name * </label>
              <input type="text" id="your_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Bonnie Green" required />
            </div>

            <div>
              <label for="your_email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your email* </label>
              <input type="email" id="your_email" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@flowbite.com" required />
            </div>
            <div>
              <div class="mb-2 flex items-center gap-2">
                <label for="select-city-input-3" class="block text-sm font-medium text-gray-900 dark:text-white"> Address * </label>
              </div>
              <input type="text" id="your_email" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Rangpur" required />
            </div>

            <div>
              <label for="phone-input-3" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Phone Number* </label>
              <div class="flex items-center">
              <input type="number" id="your_email" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Phone" required />                
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Payment</h3>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-1">
            <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input id="credit-card" aria-describedby="credit-card-text" type="radio" name="payment-method" value="" class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" checked />
                </div>

                <div class="ms-4 text-sm">
                  <label for="credit-card" class="font-medium leading-none text-gray-900 dark:text-white"> Cash On Delivery </label>
                  <p id="credit-card-text" class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Pay with your hand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* Sub Total */}
      <div class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md rounded-lg border border-gray-200 p-5">
        <div class="flow-root">
          <div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
            <dl class="flex items-center justify-between gap-4 py-3">
              <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
              <dd class="text-base font-medium text-gray-900 dark:text-white">$8,094.00</dd>
            </dl>

            <dl class="flex items-center justify-between gap-4 py-3">
              <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
              <dd class="text-base font-medium text-green-500">0</dd>
            </dl>

            <dl class="flex items-center justify-between gap-4 py-3">
              <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
              <dd class="text-base font-medium text-gray-900 dark:text-white">$99</dd>
            </dl>

            <dl class="flex items-center justify-between gap-4 py-3">
              <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
              <dd class="text-base font-medium text-gray-900 dark:text-white">$199</dd>
            </dl>

            <dl class="flex items-center justify-between gap-4 py-3">
              <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
              <dd class="text-base font-bold text-gray-900 dark:text-white">$8,392.00</dd>
            </dl>
          </div>
        </div>

        <div class="space-y-3">
          <button type="submit" class="flex w-full items-center justify-center rounded-lg bg-[#2A59FF] px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Payment</button>

          <p class="text-sm font-normal text-gray-500 dark:text-gray-400">One or more items in your cart require an account. <a href="#" title="" class="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Sign in or create an account now.</a>.</p>
        </div>
      </div>
    </div>
  </form>
</section>





            {/* {
                cart.length == 0 ? (
                    <>
                        <div style={{ textAlign: 'center' }}>
                            <h2>Your cart is empty</h2>
                            <p>Looks like you haven't added any items to the cart yet.</p>
                        </div>
                    </>)
                    : <section className='checkout-container'>
                       
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
            } */}
        </>
    );
};

export default Checkout;