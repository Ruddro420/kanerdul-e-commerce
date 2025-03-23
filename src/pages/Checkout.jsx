/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Checkout = () => {
  const { totalPrice, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [getUser, setGetUser] = useState("");
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const cities = [
    "ঢাকা", "চট্টগ্রাম", "খুলনা", "রাজশাহী", "বরিশাল", "সিলেট", "রংপুর", "ময়মনসিংহ", "কুমিল্লা", "নারায়ণগঞ্জ", 
    "গাজীপুর", "টাঙ্গাইল", "যশোর", "বগুড়া", "দিনাজপুর", "পাবনা", "কক্সবাজার", "ফরিদপুর", "ব্রাহ্মণবাড়িয়া", "নরসিংদী", 
    "কুষ্টিয়া", "নোয়াখালী", "ফেনী", "লক্ষ্মীপুর", "চাঁদপুর", "সাতক্ষীরা", "সিরাজগঞ্জ", "জামালপুর", "পটুয়াখালী", "বাগেরহাট", 
    "জয়পুরহাট", "নড়াইল", "কিশোরগঞ্জ", "মানিকগঞ্জ", "মুন্সিগঞ্জ", "মাদারীপুর", "শরীয়তপুর", "গোপালগঞ্জ", "হবিগঞ্জ", 
    "মৌলভীবাজার", "সুনামগঞ্জ", "নেত্রকোণা", "শেরপুর", "নওগাঁ", "চাঁপাইনবাবগঞ্জ", "খাগড়াছড়ি", "রাঙ্গামাটি", "বান্দরবান"
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const calculateDeliveryCharge = (city) => {
    return city === "ঢাকা" ? 70 : 120;
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setGetUser(user?.user);
  }, []);

  const validateBangladeshiPhoneNumber = (phone) => {
    const regex = /^(?:\+8801|01)\d{9}$/;
    return regex.test(phone);
  };

  const checkOut = async (e) => {
    e.preventDefault();

    const productDetails = JSON.parse(localStorage.getItem("cart")) || [];
    const city = formData.city || orderData?.city;
    const deliveryCharge = calculateDeliveryCharge(city);

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
        !formData.email ||
        !formData.address ||
        !formData.phone ||
        !formData.city)
    ) {
      toast.error("Please fill out all required fields.");
      return;
    }

    if (!getUser) {
      const confirmCheckout = window.confirm(
        "\nDo you want to order without an account?\n"
      );

      if (!confirmCheckout) {
        return;
      }
    }

    const order = {
      user_id: getUser ? getUser.uid : null,
      cart: productDetails,
      name: getUser ? orderData?.name || getUser.displayName : formData.name,
      email: getUser ? getUser.email : formData.email,
      address: `${getUser ? orderData?.address || formData.address : formData.address}, ${city}`,
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

        setCart("");
        localStorage.removeItem("cart");

        navigate("/order-success");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Order placement failed");
      }
    } catch (error) {
      toast.error("Failed to place your order, please try again later.");
    }
  };

  const loadData = async () => {
    if (!getUser?.uid) return;
    try {
      const response = await fetch(`${BASE_URL}/order/${getUser.uid}`);
      if (!response.ok) throw new Error("Failed to fetch");
      const result = await response.json();
      setOrderData(result?.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (getUser?.uid) {
      loadData();
    }
  }, [getUser, BASE_URL]);

  return (
    <>
      <section class="bg-white py-8 antialiased">
        <form onSubmit={checkOut} class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div class="min-w-0 flex-1 space-y-8">
              <div class="space-y-4">
                <h2 class="text-xl font-semibold text-gray-900 ">
                  Delivery Details
                </h2>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 rounded-lg border border-gray-200 p-5">
                  <div>
                    <label
                      for="your_name"
                      class="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      আপনার নাম *{" "}
                    </label>
                    <input
                      name="name"
                      onChange={handleChange}
                      {...(orderData?.name && { value: orderData?.name })}
                      type="text"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="আপনার নাম"
                      required
                    />
                  </div>

                  <div>
                    <div class="mb-2 flex items-center gap-2">
                      <label
                        for="city"
                        class="block text-sm font-medium text-gray-900 "
                      >
                        {" "}
                        সিটি নির্বাচন করুণ*{" "}
                      </label>
                    </div>
                    <select 
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" 
                      name="city" 
                      id="city"
                      onChange={handleChange}
                      required
                    >
                      <option value="">সিটি নির্বাচন করুণ</option>
                      {cities.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <div class="mb-2 flex items-center gap-2">
                      <label
                        for="select-city-input-3"
                        class="block text-sm font-medium text-gray-900 "
                      >
                        {" "}
                        সম্পুর্ণ ঠিকানা*{" "}
                      </label>
                    </div>
                    <input
                      name="address"
                      {...(orderData?.name && { value: orderData.address })}
                      onChange={handleChange}
                      type="text"
                      id="your_email"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
                      placeholder="সম্পুর্ণ ঠিকানা*"
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="phone-input-3"
                      class="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      ফোন নাম্বার*{" "}
                    </label>
                    <div class="flex items-center">
                      <input
                        name="phone"
                        onChange={handleChange}
                        {...(orderData?.name && { value: orderData.phone })}
                        type="number"
                        id="ফোন নাম্বার"
                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
                        placeholder="Phone"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="your_email"
                      class="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      আপনার ইমেইল*{" "}
                    </label>
                    <input
                      name="email"
                      onChange={handleChange}
                      value={getUser?.email}
                      type="email"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <h3 class="text-xl font-semibold text-gray-900 ">Payment</h3>

                <div class="grid grid-cols-1 gap-4 md:grid-cols-1">
                  <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 ">
                    <div class="flex items-start">
                      <div class="flex h-5 items-center">
                        <input
                          id="credit-card"
                          aria-describedby="credit-card-text"
                          type="radio"
                          name="payment-method"
                          value=""
                          class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 "
                          checked
                        />
                      </div>

                      <div class="ms-4 text-sm">
                        <label
                          for="credit-card"
                          class="font-medium leading-none text-gray-900"
                        >
                          {" "}
                          Cash On Delivery{" "}
                        </label>
                        <p
                          id="credit-card-text"
                          class="mt-1 text-xs font-normal text-gray-500"
                        >
                          Pay with your hand
                        </p>
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
                    <dt class="text-base font-normal text-gray-500 ">
                      সাবটোটাল
                    </dt>
                    <dd class="text-base font-medium text-gray-900 ">
                      ৳ {totalPrice}
                    </dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500 ">ডেলিভারি চার্জ ( {(formData.city || orderData?.city)} )</dt>
                    <dd class="text-base font-medium text-gray-900 ">
                      ৳ {calculateDeliveryCharge(formData.city || orderData?.city)}
                    </dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-bold text-gray-900 ">মোট</dt>
                    <dd class="text-base font-bold text-gray-900 ">
                      ৳ {totalPrice + calculateDeliveryCharge(formData.city || orderData?.city)}
                    </dd>
                  </dl>
                </div>
              </div>

              <div class="space-y-3">
                <button
                  type="submit"
                  class="cursor-pointer flex w-full items-center justify-center rounded-lg bg-[#2A59FF] px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 "
                >
                  অর্ডার করুণ
                </button>

                <p class="text-sm font-normal text-gray-500 ">
                  One or more items in your cart require an account.{" "}
                  <Link
                    to="/login"
                    title=""
                    class="font-medium text-primary-700 underline hover:no-underline "
                  >
                    Sign in or create an account now.
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Checkout;