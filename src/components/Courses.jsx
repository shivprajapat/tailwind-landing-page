import React from "react";
import Heading from "./Heading";
import Slider from "react-slick";
import Card from "./Card";
import { courses } from "../data";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Courses = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <button>
        <FaAngleRight />
      </button>
    ),
    prevArrow: (
      <button>
        <FaAngleLeft />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="w-full bg-[#E9F8F3B2] py-32 course">
      <div className="md:max-w-[1480px] mx-auto max-w-[600px] px-3.5">
        <Heading
          title="Most Popular"
          green="Courses"
          description="Various versions have evolved over the years, sometimes by accident,"
        />
        <Slider {...settings} className="px-5">
          {courses.map((course, i) => (
            <div key={i}>
              <Card course={course} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Courses;
