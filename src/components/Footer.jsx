import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white lg:px-[12%] px-[8%] pt-16 flex justify-center items-center flex-col bg-[#0d0d0d]">
      {/* Top Section */}
      <div className="border-b border-[#222] pb-8 w-full text-white px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
          {/* Brand Info */}
          <div className="flex-1">
            <Link to="/" className="text-4xl font-bold bricolage-font">
              Watch<span className="text-[#fa8703]">Mart</span>
            </Link>
            <p className="text-[#999] mb-6 md:w-[90%] w-full mt-2">
              Discover timeless luxury with our curated selection of watches.  
              From sports to luxury — style that lasts forever.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="border border-[#fa8703] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#fa8703] hover:text-black transition-colors duration-300"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="border border-[#fa8703] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#fa8703] hover:text-black transition-colors duration-300"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="#"
                className="border border-[#fa8703] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#fa8703] hover:text-black transition-colors duration-300"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="#"
                className="border border-[#fa8703] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#fa8703] hover:text-black transition-colors duration-300"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <h4 className="text-2xl font-semibold bricolage-font mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[#999] footer-menu relative">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#fa8703] relative transition duration-300 bricolage-font"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/watches"
                  className="hover:text-[#fa8703] relative transition duration-300 bricolage-font"
                >
                  Watches
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-[#fa8703] relative transition duration-300 bricolage-font"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#fa8703] relative transition duration-300 bricolage-font"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="flex-1">
            <h4 className="text-2xl font-semibold bricolage-font mb-4">
              Subscribe
            </h4>
            <p className="text-[#999] mb-4 text-sm">
              Get exclusive deals and updates about our latest collections.
            </p>
            <div className="flex items-center border border-[#fa8703] rounded-full px-4 py-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                className="bg-transparent outline-none text-white placeholder:text-[#aaa] flex-1"
              />
              <button
                type="submit"
                className="bg-[#fa8703] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#e57a02] transition"
              >
                <i className="ri-arrow-right-up-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-[#999] text-center text-base relative py-6">
        <p className="bricolage-font">
          © 2025. All Rights Reserved.{" "}
          <span className="text-[#fa8703] bricolage-font">WatchMart</span>
        </p>
        <p className="bricolage-font">
          Developed By{" "}
          <a
            href="https://amdadislam.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#fa8703] transition bricolage-font"
          >
            Amdad Islam
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
