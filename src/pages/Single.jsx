/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import RelatedProduct from "../components/RelatedProduct";
import { CartContext } from "../context/CartContext";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiMessengerLine } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";

const Single = () => {
  const { id } = useParams();
  const { isCartOpen, setIsCartOpen } = useOutletContext();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedLoading, setRelatedLoading] = useState(true);
  const [selectedImg, setSelectedImg] = useState("");
  const { cart, addToCart, orderNow } = useContext(CartContext);
  const isInCart = cart.some((item) => item.id === data?.id);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const IMAGE_URL = import.meta.env.VITE_API_IMAGE_URL;

  /* Color handling functions */
  const getColorCode = (colorName) => {
    const colorMap = {
      yellow: "#FFFF00",
      blue: "#0000FF",
      gray: "#808080",
      red: "#FF0000",
      green: "#008000",
      black: "#000000",
      white: "#FFFFFF",
      orange: "#FFA500",
      purple: "#800080",
      pink: "#FFC0CB",
      brown: "#A52A2A",
    };
    const normalizedColor = colorName?.toLowerCase().trim();
    return colorMap[normalizedColor] || "#CCCCCC";
  };

  // Process colors from data
  const colors = data?.color
    ? data.color.split(",").map((color) => ({
        name: color.trim(),
        code: getColorCode(color.trim()),
      }))
    : [];

  // Initialize selectedColor state
  const [selectedColor, setSelectedColor] = useState("");

  // Set default color when data loads
  useEffect(() => {
    if (data && data.color && !selectedColor) {
      const firstColor = data.color.split(",")[0].trim();
      setSelectedColor(getColorCode(firstColor));
    }
  }, [data]);

  /* Data loading functions */
  const loadData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/products/${id}`);
      const result = await response.json();
      setData(result[0]);

      if (result[0].select_category) {
        loadRelatedProducts(result[0].select_category, result[0].id);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadRelatedProducts = async (select_category, currentProductId) => {
    setRelatedLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}/products/category/${select_category}`
      );
      const result = await response.json();
      const filteredProducts = result[0].filter(
        (product) => product.id !== parseInt(currentProductId)
      );
      setRelatedProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching related products:", error);
    } finally {
      setRelatedLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Loading product details...</p>
        </div>
      ) : (
        <div>
          <div className="bg-gray-100 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row -mx-4 align-center">
                <div className="md:flex-1 px-4">
                  <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                    <img
                      className="w-full h-full object-cover"
                      src={
                        selectedImg
                          ? `${IMAGE_URL}/admin/product/gallery/${selectedImg}`
                          : data.product_image
                          ? `${IMAGE_URL}/admin/product/${data.product_image}`
                          : "/Placeholder.svg"
                      }
                      alt={data.product_name}
                    />
                  </div>
                  <div className="flex gap-4">
                    {data?.image_gallary?.map((item, i) => (
                      <button
                        onClick={() => setSelectedImg(item)}
                        className="w-1/4 h-auto cursor-pointer hover:shadow-sm"
                        key={i}
                      >
                        <img
                          src={`${IMAGE_URL}/admin/product/gallery/${item}`}
                          alt={`Product view ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {data.product_name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {data.select_category}
                  </p>
                  <div className="flex mb-4">
                    <div className="mr-4">
                      <span className="font-bold text-gray-700">Price: </span>
                      <span className="text-gray-600 text-xl font-semibold">
                        ৳ {data.selling_price}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-700">
                        Availability:{" "}
                      </span>
                      <span className="text-gray-600">{data.availability}</span>
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700">
                      Product Description:
                    </span>
                    <p className="text-gray-600 text-sm mt-2">
                      {data.p_short_des}
                    </p>
                  </div>
                  {colors.length > 0 && (
                    <div>
                      <span className="font-bold text-gray-700">
                        Choose Color:
                      </span>
                      <div className="flex gap-2 mt-2">
                        {colors.map((color, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedColor(color.code)}
                            className={`w-8 h-8 rounded border-2 transition-all ${
                              selectedColor === color.code
                                ? "border-black shadow-md"
                                : "border-gray-300"
                            } hover:shadow-sm`}
                            style={{ backgroundColor: color.code }}
                            title={color.name}
                            aria-label={`Select color ${color.name}`}
                          />
                        ))}
                      </div>
                      {selectedColor && (
                        <p className="text-sm text-gray-600 mt-1">
                          Selected:{" "}
                          {colors.find((c) => c.code === selectedColor)?.name}
                        </p>
                      )}
                    </div>
                  )}
                  <div className="flex justify-items-stretch gap-4 lg:-mx-2 mb-4 pt-8">
                    <div className="w-full">
                      {isInCart ? (
                        <button className="bg-[#F9DADF] text-[#DF4A5D] h-full rounded-md hover:bg-[#DF4A5D] hover:text-[#F9DADF] transition duration-300 cursor-pointer w-full">
                          <Link to="/cart" className="py-2 h-full px-4 w-full">
                            কার্ট দেখুন
                          </Link>
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            addToCart({ ...data, selectedColor });
                            setIsCartOpen(!isCartOpen);
                          }}
                          className="bg-[#F9DADF] text-[#DF4A5D] py-2 px-4 rounded-md hover:bg-[#DF4A5D] hover:text-[#F9DADF] transition duration-300 cursor-pointer w-full"
                        >
                          কার্টে রাখুন
                        </button>
                      )}
                    </div>
                    <div className="w-full">
                      <button
                        onClick={() => orderNow({ ...data, selectedColor })}
                        className="bg-[#DF4A5D] text-[#F9DADF] py-2 px-4 rounded-md hover:bg-[#F9DADF] hover:text-[#DF4A5D] transition duration-300 cursor-pointer w-full"
                      >
                        অর্ডার করুন
                      </button>
                    </div>
                  </div>
                  <div className="w-full flex gap-2 my-4">
                    <button
                      onClick={() => orderNow({ ...data, selectedColor })}
                      className="w-full bg-[#F69603] text-black py-2 px-4 font-bold hover:bg-[#f6a503] cursor-pointer flex gap-2 justify-center items-center transition-colors"
                    >
                      <FaCartShopping size={25} /> ক্যাশ অন ডেলিভারিতে অর্ডার
                      করুণ
                    </button>
                  </div>
                  <div className="w-full flex gap-2">
                    <Link
                      target="_blank"
                      to="https://wa.me/+8801624010673"
                      className="w-full bg-[#25D366] text-white py-2 px-4 font-bold hover:bg-[#25d365d0] cursor-pointer flex gap-2 justify-center items-center transition-colors"
                    >
                      <IoLogoWhatsapp size={25} /> WhatsApp
                    </Link>
                    <Link
                      target="_blank"
                      to="https://www.facebook.com/messages/t/109673061973728"
                      className="w-full bg-[#0863F7] text-white py-2 px-4 font-bold hover:bg-[#0864f7c9] cursor-pointer flex gap-2 justify-center items-center transition-colors"
                    >
                      <RiMessengerLine size={25} /> Messenger
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:py-8">
                <div className="text-2xl font-bold text-gray-800">
                  Description
                </div>
                <div className="mt-2 text-gray-700">
                  {data.product_description}
                </div>
              </div>
            </div>
          </div>

          <RelatedProduct products={relatedProducts} loading={relatedLoading} />
        </div>
      )}
    </>
  );
};

export default Single;
