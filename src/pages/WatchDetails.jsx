import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const WatchDetails = () => {
  const { id } = useParams();
  const [watch, setWatch] = useState(null);
  const [allWatches, setAllWatches] = useState([]);

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const res = await fetch("/watchData.json");
        const data = await res.json();
        setAllWatches(data);
        const singleWatch = data.find((item) => String(item.id) === id);
        setWatch(singleWatch);
      } catch (error) {
        console.error("Error fetching watch details:", error);
      }
    };

    fetchWatches();
  }, [id]);

  if (!watch)
    return <p className="text-center mt-20 text-gray-400">Loading...</p>;

  return (
    <div className="bg-gradient-to-b from-black via-[#0d0d0d] to-black min-h-screen   lg:px-[12%] px-[8%] py-[90px] lg:py-[120px] text-white font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image Section */}
        <div className="flex justify-center">
          <div className="relative group">
            <img
              src={watch.image}
              alt={watch.name}
              className="w-[350px] h-[350px] object-cover drop-shadow-2xl rounded-2xl transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute -inset-6 bg-gradient-to-tr from-[#fa8703]/30 to-transparent rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition"></div>
          </div>
        </div>

        {/* Right Info Section */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold">{watch.name}</h1>
          <p className="text-gray-400 text-lg">{watch.brand}</p>
          <p className="text-3xl font-bold text-[#fa8703]">
            {watch.price} {watch.currency}
          </p>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="grid grid-cols-2 gap-2 text-gray-300">
              {watch.features?.map((feature, idx) => (
                <li
                  key={idx}
                  className="bg-[#1a1a1a] px-4 py-2 rounded-lg text-sm hover:bg-[#2a2a2a] transition"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Stock Info */}
          <p className="text-gray-400">
            <span className="font-semibold text-white">Stock:</span>{" "}
            {watch.stock > 0 ? (
              <span className="text-green-500">Available ({watch.stock})</span>
            ) : (
              <span className="text-red-500">Out of Stock</span>
            )}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="flex-1 bg-[#fa8703] text-white py-3 rounded-xl font-bold hover:bg-transparent border border-[#fa8703] transition">
              Add to Cart
            </button>
            <button className="flex-1 bg-transparent text-[#fa8703] py-3 rounded-xl font-bold border border-[#fa8703] hover:bg-[#fa8703] hover:text-white transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Description Bottom Section */}
      <div className="mt-16 bg-[#1a1a1a]/70 backdrop-blur-md p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="text-gray-300 leading-relaxed">
          {watch.description ||
            "Experience timeless craftsmanship with this premium watch, designed for elegance, durability, and modern lifestyle. Perfect for business, sports, and casual wear."}
        </p>
      </div>

      {/* Customer Reviews */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg border border-gray-800 hover:scale-105 transition"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                <div>
                  <p className="font-semibold">Review {idx + 1}</p>
                  <p className="text-sm text-gray-400">Verified Buyer</p>
                </div>
              </div>
              <p className="text-yellow-400 text-lg">★★★★★</p>
              <p className="text-gray-300 mt-2">
                "This watch is absolutely amazing. Build quality is top notch
                and looks very premium!"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {allWatches
            .filter((item) => item.id !== watch.id)
            .slice(0, 6)
            .map((item) => (
              <SwiperSlide key={item.id}>
                <Link
                  to={`/watch/${item.id}`}
                  className="block bg-[#1a1a1a] p-5 rounded-xl hover:scale-105 transition shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500 rounded-2xl mb-4"
                  />
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-[#fa8703] font-bold">
                    {item.price} {item.currency}
                  </p>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WatchDetails;
