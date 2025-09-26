import React from "react";
import about from "../../assets/about.png";
const Abouts = () => {
  return (
    <div className="about text-white lg:px-[10%] px-[8%] py-[50px] lg:py-[90px]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative w-auto sm:h-[450px] lg:h-[600px]">
          <img
            src={about}
            alt=""
            className="rounded-3xl w-full h-full object-contain md:object-cover"
          />
        </div>
        <div className="">
          <p className="uppercase text-xs md:text-sm tracking-widest text-[#fa8703] mb-2">
            - WatchMart
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 bricolage-font">
            We Are More Than <br />{" "}
            <span className="text-[#fa8703] bricolage-font">A Watch Store</span>
          </h2>
          <p className="text-gray-400 leading-relaxed my-6 text-sm lg:text-base">
            At WatchMart, we don’t just sell timepieces—we deliver elegance,
            precision, and timeless style. Each watch is crafted to reflect your
            personality, making every moment truly special.
          </p>

          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-[#fa8703]">
                <i className="ri-check-double-line"></i>
              </div>
              <span className="text-white">Luxury & Sports Watches</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-[#fa8703]">
                <i className="ri-check-double-line"></i>
              </div>
              <span className="text-white">Classic & Everyday Watches</span>
            </div>
          </div>
          <button className="bg-[#fa8703] text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-black transition-colors duration-300 cursor-pointer">
            Read More <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
