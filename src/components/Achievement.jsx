import React from "react";
import Heading from "./Heading";
import { FiVideo } from "react-icons/fi";
import { SlGraduation, SlPeople } from "react-icons/sl";
import { imgAchievement } from "../assets";
const Achievement = () => {
  const iconsData = [
    {
      id: 1,
      icon: <SlGraduation size={30} style={{ color: "#1A906B" }} />,
      color: "E9F8F3",
      title: "Instructor",
      number: 300,
    },
    {
      id: 2,
      icon: <FiVideo size={30} style={{ color: "#FFC27A" }} />,
      color: "FFFAF5",
      title: "Video",
      number: "10,000+",
    },
    {
      id: 3,
      icon: <SlGraduation size={30} style={{ color: "#ED4459" }} />,
      color: "FFEEF0",
      title: "Student",
      number: "20,000+",
    },
    {
      id: 4,
      icon: <SlPeople size={30} style={{ color: "#0075FD" }} />,
      color: "F0F7FF",
      title: "Users",
      number: "1,00,000+",
    },
  ];
  return (
    <div className="w-full bbg-white py-32">
      <div className="md:max-w-[1480px] mx-auto max-w-[600px] grid md:grid-cols-2 px-3.5">
        <div className="flex flex-col justify-center">
          <Heading
            title="Our"
            green="Achievement"
            description="Various versions have evolved over the years, sometimes by accident,"
          />
          <div className="grid grid-cols-2 py-2">
            {iconsData.map((item, i) => {
              const { icon, color, title, number } = item;
              return (
                <div className="py-6 flex" key={i}>
                  <div className={`p-4 bg-[#${color}] rounded-xl`}>{icon}</div>
                  <div className="px-3">
                    <h1 className="text-2xl font-semibold">{number}</h1>
                    <p className="text-[#6D737A]">{title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <img
          src={imgAchievement}
          className="m-auto md:order-last  order-first"
        />
      </div>
    </div>
  );
};

export default Achievement;
