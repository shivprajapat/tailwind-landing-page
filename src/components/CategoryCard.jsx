import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const CategoryCard = ({ category }) => {
  const { icon, title } = category;
  return (
    <div className="category-card bg-white md:p-4 p-2 shadow-lg rounded-md flex items-center gap-4 justify-between border border-transparent hover:border-[#20B486] hover:cursor-pointer group/shiv transition delay-150 duration-35 ease-in-out">
      <div className="flex gap-4">
        {icon}
        <h6 className="md:max-w-[200px] max-w-[70px] truncate md:text-[20px] text-[18px] text-lg font-semibold absolute ml-10">
          {title}
        </h6>
      </div>
      <div className="group-hover/shiv:bg-[#20B486] rounded-lg p-2 transition delay-75 duration-35 ease-in-out">
        <BsArrowUpRight
          size={25}
          style={{ color: "#20B486" }}
          className="arrow-icon"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
