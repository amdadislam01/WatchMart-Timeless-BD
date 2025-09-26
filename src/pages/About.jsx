import React from 'react'
import Abouts from '../components/Sections/Abouts'
import WatchCategoris from '../components/Sections/WatchCategoris'
import Service from '../components/Sections/Service'

const About = () => {
  return (
    <>
      <div className="banner-section flex justify-center items-center h-[350px] lg:h-[550px]">
        <div className="banner-section-content text-center z-10">
          <h6 className="uppercase text-sm lg:text-xl text-white bricolage-font">
            - WatchMart
          </h6>
          <h1 className="text-4xl lg:text-5xl xl:text-8xl font-semibold bricolage-font text-[#fa8703]">
            <span className="text-white bricolage-font">About </span>Us
          </h1>
        </div>
      </div>
      <Abouts />
      <WatchCategoris />
      <Service />
    </>
  )
}

export default About
