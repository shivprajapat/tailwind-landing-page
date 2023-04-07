import React from "react";
import { BsVectorPen } from "react-icons/bs";
import { TiHtml5 } from "react-icons/ti";
import { TbMicrophone2, TbMusic } from "react-icons/tb";
import { HiOutlineBriefcase } from "react-icons/hi";
import { WiSunrise } from "react-icons/wi";
import { AiOutlineCamera } from "react-icons/ai";
import { BiData } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";

import Heading from "./Heading";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const data = [
    {
      icon: <BsVectorPen size={30} />,
      title: "Design",
    },
    {
      icon: <TiHtml5 size={30} />,
      title: "Development",
    },
    {
      icon: <TbMicrophone2 size={30} />,
      title: "Marketing",
    },
    {
      icon: <HiOutlineBriefcase size={30} />,
      title: "Business",
    },
    {
      icon: <WiSunrise size={30} />,
      title: "Lifestyle",
    },
    {
      icon: <AiOutlineCamera size={30} />,
      title: "Photography",
    },
    {
      icon: <TbMusic size={30} />,
      title: "Music",
    },
    {
      icon: <BiData size={30} />,
      title: "Data Science",
    },
    {
      icon: <TiHtml5 size={30} />,
      title: "Personal Develop",
    },
    {
      icon: <TiHtml5 size={30} />,
      title: "Health & Fitness",
    },
    {
      icon: <MdAttachMoney size={30} />,
      title: "Finance",
    },
    {
      icon: <FaUniversity size={30} />,
      title: "Teaching",
    },
  ];

  return (
    <div className="w-full bg-[#F0FBF7] py-24">
      <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
        <Heading
          title="Most"
          green="Popular Categories"
          description="Various versions have evolved over the years, sometimes by accident."
        />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-12 md:gap-4 gap-2">
          {data.map((category, i) => (
            <CategoryCard key={i} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
