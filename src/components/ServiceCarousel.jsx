import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import your images
import general from "../assets/general.png";
import bathroom from "../assets/bathroom.png";
import kitchen from "../assets/kitchen.png";
import bedroom from "../assets/bedroom.png";

const services = [
  { image: general, title: "General" },
  { image: bathroom, title: "Bathroom Cleaning" },
  { image: kitchen, title: "Kitchen" },
  { image: bedroom, title: "Bedroom" },
];

const ServicesCarousel = () => {
  return (
    <section className="bg-white py-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          EXPLORE OUR{" "}
          <span className="text-[#F56042]">HOUSEKEEPING SERVICES</span>
        </h2>
        <p className="text-gray-500 mt-2">
          One booking and multiple tasks
        </p>
      </div>

      {/* Carousel */}
      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-gray-800 font-medium text-lg">
                    {service.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesCarousel;
