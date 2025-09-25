import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll background change
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        isScrolled ? "bg-[#111111] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto  flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold bricolage-font text-white"
        >
          Watch<span className="text-[#fa8703]">Mart</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-12 font-medium bricolage-font text-white">
          <li>
            <Link to="/" className="hover:text-[#fa8703] transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#fa8703] transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/watch" className="hover:text-[#fa8703] transition">
              Watch
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-[#fa8703] transition">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#fa8703] transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side (Cart + Login) */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="w-10 h-10 rounded-full bg-[#1e1f22] flex items-center justify-center border border-[#fa8703] hover:bg-[#fa8703] hover:text-white text-[#fa8703] transition cursor-pointer shadow-md">
            <FaCartArrowDown className="text-md" />
          </div>
          <button className="bg-[#fa8703] px-6 py-2 rounded-full text-lg font-bold cursor-pointer text-white border border-[#fa8703] hover:bg-transparent hover:text-[#fa8703] transition">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden block text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? (
              <i className="ri-menu-line text-2xl"></i>
            ) : (
              <i className="ri-close-line text-2xl"></i>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-black ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-5 px-6 py-5 text-white font-medium">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/watch" onClick={() => setIsOpen(false)}>
              Watch
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <button className="bg-[#fa8703] px-6 py-2 rounded-full text-lg font-bold cursor-pointer text-white border border-[#fa8703] hover:bg-transparent hover:text-[#fa8703] transition">
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
