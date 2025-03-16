import React from 'react';
import { useParams } from 'react-router-dom';

const Single = () => {
    // get id from url
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // fetch data
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const loadData = async () => {
        try {
            const response = await fetch(`${BASE_URL}/products`);
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
    return (
        <div>
            <div class="OrderProcessSection">
                <div class="orderProcessContainer">
                    <div class="productImage">
                        <img src="https://kanerdul.com/public/product/67667ef225627.jpg" alt="" />
                    </div>
                    <div class="ar-productOrder">
                        <div class="for-contact">
                            <h1>
                                Pearl Shell Pendant 18k Gold Plated
                            </h1>
                            <strong>৳ 590</strong>&nbsp; <del>৳ 890</del>
                        </div>
                        <div class="orderBtn">
                            <div class="orderBuy">
                                <a
                                    style={{ backgroundColor: '#DB991B', padding: '10px 20px', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}
                                    href="order-now.html"
                                >
                                    অর্ডার করুন
                                </a>
                                <a
                                    style={{ backgroundColor: '#198754', padding: '10px 20px', color: '#fff', textDecoration: 'none', borderRadius: '5px', marginLeft: '10px' }}
                                    href="order-now.html"
                                >
                                    Buy Now
                                </a>
                            </div>
                            <div class="callBtn">
                                <button>অর্ডার করতে কল করুন:
                                    01720415286</button>
                            </div>
                        </div>
                        <div class="productCode">
                            <span> <b>Code :</b> 413 </span>
                        </div>
                        <div class="deliveryCause">
                            <div class="dhakaIn">
                                <p>
                                    ঢাকায় ডেলিভারি খরচ
                                </p>
                                <span>
                                    ৳ 60
                                </span>
                            </div>
                            <hr /> <br />
                            <div class="dhakaOut">
                                <p>
                                    ঢাকার বাইরের ডেলিভারি খরচ
                                </p>
                                <span>
                                    ৳ 130
                                </span>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
            <div class="discriptionContainer">
                <div class="descriptionSection">
                    <div class="discription">
                        <h1>Discription</h1>
                        <div class="mainDescription">
                            <p>এই রোমান্টিক নেকলেসটিতে একটি সূক্ষ্ম "ভালোবাসা" দুল নকশা রয়েছে, যেখানে মার্জিত লিপিতে "ভালোবাসা"
                                শব্দটি ব্যবহার করা হয়েছে। হৃদয় আকৃতির "o" ঝলমলে ঘন জিরকোনিয়া পাথর <br /> দিয়ে সজ্জিত, যা এই
                                আবেগপূর্ণ অংশে উজ্জ্বলতার ছোঁয়া যোগ করে। দুলটি একটি ক্লাসিক 18k সোনার ধাতুপট্টাবৃত চেইনের সাথে
                                যুক্ত, যা এটিকে যেকোনো অনুষ্ঠানের জন্য একটি বহুমুখী <br />আনুষাঙ্গিক করে তোলে।</p>

                            <span><strong>Material:</strong> Premium alloy with 18k gold plating</span><br />
                            <span><strong>Main Stones:</strong> Cubic zirconia</span><br />
                            <span><strong>Color: </strong>Gold with clear stone accents</span><br />
                            <span><strong>Design:</strong>Scripted "love" with a crystal-encrusted heart detail</span><br />
                            <span><strong>Chain Length:</strong>16 inches + 2-inch extender</span><br />
                            <span><strong>Style:</strong> Elegant and romantic, suitable for everyday wear or gifting</span><br />
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
};

export default Single;