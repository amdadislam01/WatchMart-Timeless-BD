import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      {/* Hero Banner */}
      <div className="banner-section flex justify-center items-center h-[350px] lg:h-[550px]">
        <div className="banner-section-content text-center z-10">
          <h6 className="uppercase text-sm lg:text-xl text-white bricolage-font">
            -  Get In Touch
          </h6>
          <h1 className="text-4xl lg:text-5xl xl:text-8xl font-semibold bricolage-font text-[#fa8703]">
            <span className="text-white bricolage-font">Contact </span>Us
          </h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 lg:py-24 px-[8%] lg:px-[12%] bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Contact Info */}
          <div className="space-y-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Let’s <span className="text-[#fa8703]">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Whether you’re curious about features, a free trial, or even
              press—we’re here to answer any questions.
            </p>

            <div className="space-y-6 text-gray-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#1a1a1a] p-3 rounded-xl">
                  <i className="fa-solid fa-location-dot text-[#fa8703] text-xl"></i>
                </div>
                <p>123 Main Street, Dhaka, Bangladesh</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#1a1a1a] p-3 rounded-xl">
                  <i className="fa-solid fa-phone text-[#fa8703] text-xl"></i>
                </div>
                <p>+880 123 456 789</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#1a1a1a] p-3 rounded-xl">
                  <i className="fa-solid fa-envelope text-[#fa8703] text-xl"></i>
                </div>
                <p>support@watchmart.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1a1a1a]/70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-[#fa8703] focus:ring-2 focus:ring-[#fa8703] outline-none transition"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-[#fa8703] focus:ring-2 focus:ring-[#fa8703] outline-none transition"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-[#fa8703] focus:ring-2 focus:ring-[#fa8703] outline-none transition"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#fa8703] hover:bg-transparent hover:text-[#fa8703] font-bold px-6 py-3 rounded-lg w-full transition border border-[#fa8703] cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
          <div className="bg-white text-black rounded-xl p-8 shadow-xl text-center max-w-sm">
            <h3 className="text-2xl font-bold mb-3">✅ Message Sent!</h3>
            <p className="mb-6">
              Thank you for reaching out. We’ll get back to you soon.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-[#fa8703] text-white px-5 py-2 rounded-lg hover:bg-black hover:text-[#fa8703] border border-[#fa8703] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
