import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { imgHero } from "../assets";

const Hero = () => {
  return (
    <div className="w-full bg-white md:pt-24 md:pb-24 pt-16 pb-10">
      <div className="md:max-w-[1480px] mx-auto grid lg:grid-cols-2 max-w-[600px] px-3.5">
        <div className="flex flex-col justify-start gap-4">
          <p className="pb-2 text-2xl text-[#20B486] font-medium">
            START TO SUCCESS
          </p>
          <h1 className="md:leading-[72px] pb-2 md:text-6xl sm:text-5xl text-4xl font-semibold">
            Access To <span className="text-[#20B486]">5000+</span> Courses from{" "}
            <span className="text-[#20B486]">300</span> Instructors &
            Institutions
          </h1>
          <p className="pb-2 text-lg text-gray-600">
            Various versions have evolved over the years, sometimes by accident.
          </p>
          <form className="bg-white max-w-[500px] px-4 h-[55px] input-box-shadow rounded-md flex items-center justify-between">
            <input
              className="bg-white h-full w-full outline-none border-none"
              type="text"
              placeholder="What do want to learn?"
            />
            <button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#000" }}
              />
            </button>
          </form>
        </div>
        <img
          src={imgHero}
          alt="imgHero"
          className="md:order-last order-first"
        />
      </div>
    </div>
  );
};

export default Hero;
