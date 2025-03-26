// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const heroimg = ["/web image 1.webp", "/web image 2.webp"];
  return (
    <div>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]} 
        spaceBetween={50}
        slidesPerView={1} 
        loop={true}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }} 
        // navigation 
        breakpoints={{
          320: { slidesPerView: 1 }, 
          768: { slidesPerView: 1 }, 
          1024: { slidesPerView: 1 },
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
