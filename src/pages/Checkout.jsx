/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import CartSection from "../components/cartSection";

const Checkout = () => {
  const { totalPrice, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    deliveryArea: "outside", // Default to outside Dhaka
  });
  const [getUser, setGetUser] = useState("");
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const calculateDeliveryCharge = (area) => {
    return area === "inside" ? 70 : 120;
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setGetUser(user?.user);
    generateRandomText();
  }, []);

  const validateBangladeshiPhoneNumber = (phone) => {
    const regex = /^(?:\+8801|01)\d{9}$/;
    return regex.test(phone);
  };
  /* guest use extra functions------------------- */

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  const currentDate = formatDate(new Date());
  
/*  */
const [randomId, setRandomId] = useState('');

const generateRandomText = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < 5; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  setRandomId(result);
}

  /* --------------- */

  const checkOut = async (e) => {
    e.preventDefault();
 
    const productDetails = JSON.parse(localStorage.getItem("cart")) || [];
    const deliveryCharge = calculateDeliveryCharge(formData.deliveryArea);
    const areaName =
      formData.deliveryArea === "inside" ? "ঢাকার ভিতরে" : "ঢাকার বাইরে";

    const phone = getUser ? orderData?.phone || formData.phone : formData.phone;

    if (!validateBangladeshiPhoneNumber(phone)) {
      toast.error(
        "Invalid Bangladeshi phone number. Please use the format +8801XXXXXXXXX or 01XXXXXXXXX."
      );
      return;
    }

    if (
      !getUser &&
      (!formData.name ||
        // !formData.email ||
        !formData.address ||
        !formData.phone)
    ) {
      toast.error("Please fill out all required fields.");
      return;
    }

    /*     if (!getUser) {
      const confirmCheckout = window.confirm(
        "\nDo you want to order without an account?\n"
      );

      if (!confirmCheckout) {
        return;
      }
    } */

    const order = {
      user_id: getUser ? getUser.uid : null,
      cart: productDetails,
      name: formData.name,
      client_order_id :randomId,
      email: getUser ? getUser.email : formData?.email,
      address: `${
        getUser ? orderData?.address || formData.address : formData.address
      }, ${areaName}`,
      phone: getUser ? orderData?.phone || formData.phone : formData.phone,
      total_price: totalPrice + deliveryCharge,
      p_method: "Cash On Delivery",
    };

    try {
      const response = await fetch(`${BASE_URL}/order/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        localStorage.setItem("order", JSON.stringify(order));
        toast.success("Your Order is Placed Successfully");

        // Save guest order (for non-logged-in users)
        if (!getUser) {
          const guestOrderWithDate = {
            ...order,
            created_at: currentDate,
            order_id :randomId, // Add current date to the order
          };

          const guestOrders =
            JSON.parse(localStorage.getItem("guestOrders")) || [];
          guestOrders.push(guestOrderWithDate);
          localStorage.setItem("guestOrders", JSON.stringify(guestOrders));
        }

        setCart([]);
        localStorage.setItem("cart", JSON.stringify([]));

        navigate("/order-success");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Order placement failed");
      }
    } catch (error) {
      toast.error("Failed to place your order, please try again later.");
    }
  };

  // ... rest of your existing code (loadData, useEffect, etc.)

  return (
    <>
      <section className="bg-white py-8 antialiased">
        <form
          onSubmit={checkOut}
          className="mx-auto max-w-screen px-4 2xl:px-0"
        >
          <div className="mt-6 sm:mt-8 lg:grid grid-cols-2 lg:w-[90%] mx-auto lg:items-start lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Delivery Details
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 rounded-lg border border-gray-200 p-5">
                  <div>
                    <label
                      htmlFor="your_name"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      আপনার নাম *
                    </label>
                    <input
                      name="name"
                      onChange={handleChange}
                      {...(orderData?.name && { value: orderData?.name })}
                      type="text"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="আপনার নাম"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="select-city-input-3"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      সম্পুর্ণ ঠিকানা*
                    </label>
                    <input
                      name="address"
                      {...(orderData?.name && { value: orderData.address })}
                      onChange={handleChange}
                      type="text"
                      id="your_email"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="সম্পুর্ণ ঠিকানা*"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone-input-3"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      ফোন নাম্বার*
                    </label>
                    <div className="flex items-center">
                      <input
                        name="phone"
                        onChange={handleChange}
                        {...(orderData?.name && { value: orderData.phone })}
                        type="number"
                        id="ফোন নাম্বার"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                        placeholder="Phone"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="your_email"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      আপনার ইমেইল
                    </label>
                    <input
                      name="email"
                      onChange={handleChange}
                      value={getUser?.email}
                      type="email"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="name@flowbite.com"
                    />
                  </div>
                </div>

                {/* Delivery Area Radio Buttons */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center ps-4 border border-gray-300 rounded-lg">
                    <input
                      id="inside-dhaka"
                      type="radio"
                      value="inside"
                      name="deliveryArea"
                      checked={formData.deliveryArea === "inside"}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="inside-dhaka"
                      className="w-full py-4 ms-2 text-sm font-medium text-gray-900 cursor-pointer"
                    >
                      ঢাকার ভিতরে (ডেলিভারি চার্জ: ৳70)
                    </label>
                  </div>
                  <div className="flex items-center ps-4 border border-gray-300 rounded-lg">
                    <input
                      id="outside-dhaka"
                      type="radio"
                      value="outside"
                      name="deliveryArea"
                      checked={formData.deliveryArea === "outside"}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="outside-dhaka"
                      className="w-full py-4 ms-2 text-sm font-medium text-gray-900 cursor-pointer"
                    >
                      ঢাকার বাইরে (ডেলিভারি চার্জ: ৳120)
                    </label>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    type="submit"
                    className="cursor-pointer flex w-full items-center justify-center rounded-lg bg-[#2A59FF] px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
                  >
                    অর্ডার করুণ
                  </button>

                  <p className="text-sm font-normal text-gray-500">
                    One or more items in your cart require an account.{" "}
                    <Link
                      to="/login"
                      title=""
                      className="font-medium text-primary-700 underline hover:no-underline"
                    >
                      Sign in or create an account now.
                    </Link>
                    .
                  </p>
                </div>
              </div>

              {/* Payment section remains the same */}
              {/* ... */}
            </div>

            {/* Sub Total */}
            <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:min-w-full xl:max-w-md rounded-lg border border-gray-200 p-5">
              <div className="flow-root">
                <CartSection />
                <div className="my-3 divide-y divide-gray-200">
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500">
                      সাবটোটাল
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ৳ {totalPrice}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500">
                      ডেলিভারি চার্জ (
                      {formData.deliveryArea === "inside"
                        ? "ঢাকার ভিতরে"
                        : "ঢাকার বাইরে"}
                      )
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ৳ {calculateDeliveryCharge(formData.deliveryArea)}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-bold text-gray-900">মোট</dt>
                    <dd className="text-base font-bold text-gray-900">
                      ৳{" "}
                      {totalPrice +
                        calculateDeliveryCharge(formData.deliveryArea)}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Checkout;
