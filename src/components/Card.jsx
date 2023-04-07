import React from "react";
import StarRating from "./StarRating";

const Card = ({ course }) => {
  const { linkImg, title, rating, price, category } = course;
  return (
    <div className="z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-4 my-4">
      <div className="p-4">
        <img src={linkImg} className="h-52 w-full object-cover" />
      </div>
      <div className="p-4 pt-0">
        <div className="pb-2">
          <h1 className="pb-2 truncate">{title}</h1>
          <StarRating rating={rating} />
        </div>
        <h3 className="py-2 text-xl  border-t">{price}</h3>
        <div className="absolute top-6 bg-white left-6 px-2 py-[2.5px] rounded font-bold">
          {category}
        </div>
      </div>
    </div>
  );
};

export default Card;
