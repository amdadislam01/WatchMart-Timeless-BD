import React from "react";
import watchCtg1 from "../../assets/watchCtg-1.png";
import watchCtg2 from "../../assets/watchCtg-2.png";
import watchCtg3 from "../../assets/watchCtg-3.png";
import watchCtg4 from "../../assets/watchCtg-4.png";

const WatchCategoris = () => {
  return (
    <div className="watch-categories lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
      <div className="watch-categories-content text-center mb-10 lg:mb-14">
        <p className="uppercase text-sm tracking-[5px] mb-2 text-[#fa8703]">
          - Watch Categories
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white bricolage-font">
          Discover Timeless Collections
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {[
          { title: "Luxury Watches", count: "40+ Models", img: watchCtg1 },
          { title: "Sports Watches", count: "70+ Models", img: watchCtg2 },
          { title: "Classic Watches", count: "100+ Models", img: watchCtg3 },
          { title: "Smart Watches", count: "60+ Models", img: watchCtg4 },
        ].map((item, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1e1e23] to-[#2a2a32] p-6 cursor-pointer transform transition duration-500 hover:-translate-y-3 hover:rotate-1 hover:shadow-[0_0_25px_rgba(250,135,3,0.6)]"
          >
            {/* Image */}
            <div className="flex items-center justify-center h-56 mb-6">
              <img
                src={item.img}
                alt={item.title}
                className="object-contain w-[80%] h-[80%] transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2"
              />
            </div>
            {/* Text */}
            <div className="text-center">
              <h4 className="text-white text-2xl font-semibold bricolage-font mb-1 group-hover:text-[#fa8703] transition-colors duration-500">
                {item.title}
              </h4>
              <span className="text-gray-400 text-sm tracking-wide">
                {item.count}
              </span>
            </div>
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#fa8703]/70 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchCategoris;
