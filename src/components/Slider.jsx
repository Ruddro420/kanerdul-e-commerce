// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Include Pagination module
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Import Pagination styles

const Slider = () => {
  const heroimg = ["/web image 1.webp", "/web image 2.webp"];
  return (
    <div>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]} // Add Pagination module
        spaceBetween={50}
        slidesPerView={1} // Default view
        loop={true}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }} // Enable Pagination
        // navigation 
        breakpoints={{
          320: { slidesPerView: 1 }, // Mobile (Small screens)
          768: { slidesPerView: 1 }, // Tablets
          1024: { slidesPerView: 1 }, // Desktops
        }}
      >
        {heroimg.map((img, index) => (
          <SwiperSlide key={index}>
            <img className="w-full" src={img} alt={`slide-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
