import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const WatchBrands = () => {
  return (
    <div className="bg-[#0d0d0d] w-full lg:px-[12%] px-[8%] py-[60px]">
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="brands-swiper"
        breakpoints={{
          1399: { slidesPerView: 6 },
          1024: { slidesPerView: 5 },
          767: { slidesPerView: 3 },
          575: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {[
          "Rolex",
          "Omega",
          "Casio",
          "Seiko",
          "Fossil",
          "Tag Heuer",
          "Tissot",
          "Citizen",
        ].map((brand, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[140px] w-full md:w-[200px] flex justify-center items-center 
          rounded-2xl bg-gradient-to-br from-[#1c1c1c] to-[#000] 
          border border-[#222] hover:border-[#fa8703] 
          transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[#fa8703]/40 group"
            >
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#fa8703] to-[#ffb347] 
            text-2xl md:text-3xl font-extrabold tracking-widest group-hover:scale-110 transition-all duration-500"
              >
                {brand}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WatchBrands;
