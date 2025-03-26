/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  const { order: contextOrder } = useContext(CartContext);
  const [getUser, setGetUser] = useState("");
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // Get user data
    const user = JSON.parse(localStorage.getItem("user"));
    setGetUser(user?.user);

    // Get order data from localStorage first, fallback to context
    const localStorageOrder = JSON.parse(localStorage.getItem("order"));
    setOrder(localStorageOrder || contextOrder);
  }, [contextOrder]);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const currentDate = formatDate(new Date());
  const orderDate = order?.orderDate
    ? formatDate(new Date(order.orderDate))
    : currentDate;

  if (!order) {
    return <div>Loading order details...</div>;
  }

  return (
    <div>
      <section class="bg-white py-8 antialiased ">
        <div class="mx-auto max-w-2xl px-4 2xl:px-0">
          <h2 class="text-xl font-semibold text-gray-900  sm:text-2xl mb-2">
            Thanks for your order!
          </h2>
          <p class="text-gray-500  mb-6 md:mb-8">
            Your order{" "}
            <a href="#" class="font-medium text-gray-900 hover:underline">
              {/* #7564804 */}
            </a>{" "}
            will be processed within 24 hours during working days. We will
            notify you by email once your order has been shipped.
          </p>
          <div class="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6  mb-6 md:mb-8">
            <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 ">Date</dt>
              <dd class="font-medium text-gray-900  sm:text-end">
                {orderDate} {/* if no date it will show todays date */}
              </dd>
            </dl>
            <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 ">
                Order ID
              </dt>
              <dd class="font-medium text-gray-900 sm:text-end">
                #{order?.client_order_id}
              </dd>
            </dl>
            <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 ">
                Payment Method
              </dt>
              <dd class="font-medium text-gray-900 sm:text-end">
                {order?.p_method}
              </dd>
            </dl>
            <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 ">
                Total Price
              </dt>
              <dd class="font-medium text-gray-900 sm:text-end">
                ৳ {order?.total_price}
              </dd>
            </dl>
            <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500">Name</dt>
              <dd class="font-medium text-gray-900  sm:text-end">
                {order?.name}
              </dd>
            </dl>
            <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 ">Address</dt>
              <dd class="font-medium text-gray-900  sm:text-end">
                {order?.address}
              </dd>
            </dl>
            <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500">Phone</dt>
              <dd class="font-medium text-gray-900  sm:text-end">
                {order?.phone}
              </dd>
            </dl>
          </div>
          <div class="flex items-center space-x-4">
            {getUser ? (
              <Link
                to="/account"
                class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none bg-[#2a59ff]"
              >
                Track your order
              </Link>
            ) : (
              <Link
                to="/orders"
                class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none bg-[#2a59ff]"
              >
                Track your order
              </Link>
            )}

            <Link
              to="/"
              class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
            >
              Return to shopping
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderSuccess;
