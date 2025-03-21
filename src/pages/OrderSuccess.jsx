import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
    const { order } = useContext(CartContext);
    console.log(order);

    return (
        <div>
            <section class="bg-white py-8 antialiased ">
                <div class="mx-auto max-w-2xl px-4 2xl:px-0">
                    <h2 class="text-xl font-semibold text-gray-900  sm:text-2xl mb-2">Thanks for your order!</h2>
                    <p class="text-gray-500  mb-6 md:mb-8">Your order <a href="#" class="font-medium text-gray-900 hover:underline">#7564804</a> will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.</p>
                    <div class="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6  mb-6 md:mb-8">
                        <dl class="sm:flex items-center justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-500 ">Date</dt>
                            <dd class="font-medium text-gray-900  sm:text-end">{order.orderDate}</dd>
                        </dl>
                        <dl class="sm:flex items-center justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-500 ">Payment Method</dt>
                            <dd class="font-medium text-gray-900 sm:text-end">{order.paymentMethod}</dd>
                        </dl>
                        <dl class="sm:flex items-center justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-500">Name</dt>
                            <dd class="font-medium text-gray-900  sm:text-end">{order.formData?.name}</dd>
                        </dl>
                        <dl class="sm:flex items-center justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-500 ">Address</dt>
                            <dd class="font-medium text-gray-900  sm:text-end">{order.formData?.address}</dd>
                        </dl>
                        <dl class="sm:flex items-center justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-500">Phone</dt>
                            <dd class="font-medium text-gray-900  sm:text-end">{order.formData && order.formData.phone}</dd>
                        </dl>
                    </div>
                    <div class="flex items-center space-x-4">
                        <Link to="/account" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none bg-[#2a59ff]">Track your order</Link>
                        <Link to="/" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Return to shopping</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OrderSuccess;