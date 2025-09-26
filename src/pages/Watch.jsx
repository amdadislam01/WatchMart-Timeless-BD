import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Watch = () => {
  const [watches, setWatches] = useState([]);
  const [filteredWatches, setFilteredWatches] = useState([]);
  const [filters, setFilters] = useState({
    brand: [],
    type: [],
    minPrice: "",
    maxPrice: "",
  });

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const res = await fetch("/watchData.json");
        const data = await res.json();
        setWatches(data);
        setFilteredWatches(data);
      } catch (err) {
        console.error("Error fetching watches:", err);
      }
    };
    fetchWatches();
  }, []);

  const handleFilterChange = (category, value) => {
    setFilters((prev) => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];

      return { ...prev, [category]: updated };
    });
  };

  useEffect(() => {
    let filtered = [...watches];

    // Brand filter
    if (filters.brand.length > 0) {
      filtered = filtered.filter((watch) =>
        filters.brand.includes(watch.brand)
      );
    }

    // Type filter
    if (filters.type.length > 0) {
      filtered = filtered.filter((watch) => filters.type.includes(watch.type));
    }

    // Min price filter
    if (filters.minPrice !== "" && !isNaN(filters.minPrice)) {
      filtered = filtered.filter((watch) => watch.price >= filters.minPrice);
    }

    // Max price filter
    if (filters.maxPrice !== "" && !isNaN(filters.maxPrice)) {
      filtered = filtered.filter((watch) => watch.price <= filters.maxPrice);
    }

    setFilteredWatches(filtered);
  }, [filters, watches]);

  return (
    <>
      {/* Banner */}
      <div className="banner-section flex justify-center items-center h-[350px] lg:h-[550px]">
        <div className="banner-section-content text-center z-10">
          <h6 className="uppercase text-sm lg:text-xl text-white bricolage-font">
            - Shop Now
          </h6>
          <h1 className="text-4xl lg:text-5xl xl:text-8xl font-semibold bricolage-font text-[#fa8703]">
            <span className="text-white bricolage-font">Watch </span>Shop
          </h1>
        </div>
      </div>

      {/* Filter Section */}
      <div className="px-[8%] lg:px-[12%] py-12 text-white">
        <h3 className="text-3xl font-bold mb-8 text-center">Filter Watches</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Filter */}
          <div className="bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-800 p-6">
            <h4 className="font-semibold mb-4 text-lg text-[#FA8703] border-b border-gray-700 pb-2">
              Brand
            </h4>
            <div className="space-y-3">
              {["Realme", "Apple", "Samsung", "Xiaomi"].map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-3 cursor-pointer hover:text-[#FA8703] transition-colors"
                >
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-[#FA8703] rounded-md cursor-pointer"
                    onChange={() => handleFilterChange("brand", brand)}
                    checked={filters.brand.includes(brand)}
                  />
                  <span className="text-sm md:text-base">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div className="bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-800 p-6">
            <h4 className="font-semibold mb-4 text-lg text-[#FA8703] border-b border-gray-700 pb-2">
              Type
            </h4>
            <div className="space-y-3">
              {["Smartwatch", "Analog", "Digital"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-3 cursor-pointer hover:text-[#FA8703] transition-colors"
                >
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-[#FA8703] rounded-md cursor-pointer"
                    onChange={() => handleFilterChange("type", type)}
                    checked={filters.type.includes(type)}
                  />
                  <span className="text-sm md:text-base">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-800 p-6">
            <h4 className="font-semibold mb-4 text-lg text-[#FA8703] border-b border-gray-700 pb-2">
              Price Range
            </h4>
            <div className="flex flex-col gap-4">
              <input
                type="number"
                placeholder="Min Price"
                className="px-4 py-2 rounded-lg bg-[#121212] border border-gray-700 focus:border-[#FA8703] outline-none text-sm md:text-base"
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, minPrice: e.target.value }))
                }
              />
              <input
                type="number"
                placeholder="Max Price"
                className="px-4 py-2 rounded-lg bg-[#121212] border border-gray-700 focus:border-[#FA8703] outline-none text-sm md:text-base"
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, maxPrice: e.target.value }))
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Watch Cards */}
      <div className="lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
        {filteredWatches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredWatches.map((watch) => (
              <div
                className="watch-item group bg-gradient-to-br from-[#1e1f22] to-[#121212] relative w-full rounded-2xl shadow-lg border border-gray-800 hover:shadow-yellow-600/30 transition-all duration-500"
                key={watch.id}
              >
                {/* Image */}
                <div className="watch-image w-full relative h-[260px] overflow-hidden rounded-t-2xl flex justify-center items-center bg-black/40">
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="h-max w-full object-cover drop-shadow-lg group-hover:scale-110 transition-all duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[#FA8703] text-white text-xs px-4 py-1 rounded-full uppercase tracking-wide">
                    {watch.type}
                  </span>
                </div>

                <div className="watch-content p-6 text-white">
                  <h4 className="text-2xl font-bold bricolage-font mb-1">
                    {watch.name}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">
                    Brand: {watch.brand}
                  </p>

                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-300 mb-2">
                      Features:
                    </h5>
                    <ul className="flex flex-wrap gap-2">
                      {watch.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="bg-[#222] text-gray-300 px-3 py-1 rounded-lg text-xs"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <div>
                      <h4 className="text-2xl md:text-3xl text-[#fa8703] font-bold bricolage-font">
                        {watch.price} {watch.currency}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {watch.stock > 0
                          ? `${watch.stock} in stock`
                          : "Out of stock"}
                      </p>
                    </div>
                    <Link to={`/watch/${watch.id}`}>
                      <button
                        className={`px-5 py-3 text-sm md:text-base rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                          watch.stock > 0
                            ? "bg-[#FA8703] hover:bg-[#fa8703] text-white"
                            : "bg-gray-600 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        {watch.stock > 0 ? "View Details" : "Unavailable"}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">No watches found.</p>
        )}
      </div>
    </>
  );
};

export default Watch;
