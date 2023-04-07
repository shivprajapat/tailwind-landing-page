import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import FeedbackCard from "./FeedbackCard";
import Heading from "./Heading";
import Slider from "react-slick";

const Feedback = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="w-full bg-white py-32">
      <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
        <div className="py-4">
          <Heading
            title="Students'"
            green="Feedback"
            description="Various versions have evolved over the years, sometimes by accident."
          />
        </div>

        <Slider {...settings}>
          {new Array(5).fill("").map((_, i) => (
            <FeedbackCard key={i} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
