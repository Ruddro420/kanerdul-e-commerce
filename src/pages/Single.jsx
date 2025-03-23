import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RelatedProduct from "../components/RelatedProduct";
import { CartContext } from "../context/CartContext";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiMessengerLine } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";

const Single = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedLoading, setRelatedLoading] = useState(true);
  const[selectedImg, setSelectedImg]=useState("")
  const { addToCart, orderNow } = useContext(CartContext);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const IMAGE_URL = import.meta.env.VITE_API_IMAGE_URL;

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

  console.log(data);
  

  const loadRelatedProducts = async (select_category, currentProductId) => {
    setRelatedLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/products/category/${select_category}`);
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

  console.log(data?.image_gallary?.map((item) => (
    item
)));
  

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
                      className="w-full h-full"
                      src=
{selectedImg ? (`${IMAGE_URL}/admin/product/gallery/${selectedImg}`):
 (data.product_image?(`${IMAGE_URL}/admin/product/${data.product_image}`):"/Placeholder.svg")}
                      alt="Product"
                    />
                  </div>
                  <div className="flex gap-4">
                    {data?.image_gallary?.map((item, i) => (
                       <button onClick={() =>setSelectedImg(item)}  className="w-1/4 h-auto cursor-pointer hover:shadow-sm"  key={i}> <img
                       src={`${IMAGE_URL}/admin/product/gallery/${item}`}
                       alt="Product"
                       /></button>
                    ))}
                   
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {data.product_name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">{data.select_category}</p>
                  <div className="flex mb-4">
                    <div className="mr-4">
                      <span className="font-bold text-gray-700">Price: </span>
                      <span className="text-gray-600">$ {data.selling_price}</span>
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
                  <div className="flex -mx-2 mb-4 pt-8">
                    <div className="w-1/2 px-2">
                      <button
                        onClick={() => addToCart(data)}
                        className="w-full bg-gray-900 text-white py-2 px-4  font-bold hover:bg-gray-800 cursor-pointer"
                      >
                        Add to Cart
                      </button>
                    </div>
                    <div className="w-1/2 px-2">
                      <button
                        onClick={() => orderNow(data)}
                        className="w-full bg-gray-200 text-gray-800 py-2 px-4  font-bold hover:bg-gray-300 cursor-pointer"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                  <div className="w-full flex gap-2 my-4">
                    <button onClick={() => orderNow(data)}
                      className="w-full bg-black text-white py-2 px-4  font-bold hover:bg-gray-900 cursor-pointer flex gap-2 justify-center items-center"
                    >
                    <FaCartShopping size={25} /> ক্যাশ অন ডেলিভারিতে অর্ডার করুণ


                    </button>
                  </div>
                  <div className="w-full flex gap-2">
                    <Link
                    target="_blank"
                      to="https://wa.me/+8801624010673"
                      className="w-full bg-[#25D366] text-white py-2 px-4  font-bold hover:bg-[#25d365d0] cursor-pointer flex gap-2 justify-center items-center"
                    >
                      <IoLogoWhatsapp size={25} />      WhatsApp
                    </Link>
                    <Link
                    target="_blank"
                    to="https://www.facebook.com/messages/t/109673061973728"
                      
                      className="w-full bg-[#0863F7] text-white py-2 px-4  font-bold hover:bg-[#0864f7c9] cursor-pointer flex gap-2 justify-center items-center"
                    >
                    <RiMessengerLine size={25} />  Messenger

                    </Link>
                  </div>
                 
                </div>
              </div>

              <div className="lg:py-8">
                <div className="text-2xl font-bold text-gray-800">Description</div>
            {data.product_description}
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
