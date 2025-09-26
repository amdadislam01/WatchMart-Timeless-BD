import React from "react";
import Home from "../components/Sections/Home";
import WatchCategoris from "../components/Sections/WatchCategoris";
import WatchBrands from "../components/Sections/WatchBrands";
import Service from "../components/Sections/Service";
import WatchSection from "../components/Sections/WatchSection";
import WatchTestimonials from "../components/Sections/WatchTestimonials ";
import Abouts from "../components/Sections/Abouts";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <Home />
      {/* About Section */}
      <Abouts />
      {/* Watch Categories */}
      <WatchCategoris />
      {/* Watch Brands */}
      <WatchBrands />
      {/* Service */}
      <Service />
      {/* Watch  */}
      <WatchSection />
      {/* Testimonials */}
      <WatchTestimonials />
    </>
  );
};

export default Index;
